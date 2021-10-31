package elsevier.hackday.officescheduler.resources

import cats.effect.{Blocker, ContextShift, IO, Sync}
import com.sun.tools.internal.xjc.reader.xmlschema.bindinfo.BIConversion.User
import elsevier.hackday.officescheduler.services.{SchedulerService, UserData, VersionService}
import org.http4s._
import org.http4s.dsl.Http4sDsl
import org.http4s.implicits.{http4sKleisliResponseSyntaxOptionT, http4sLiteralsSyntax}
import org.http4s.server.Router
import org.http4s.server.staticcontent.resourceServiceBuilder
import org.http4s.circe._
import io.circe.generic.auto._
import io.circe.syntax.EncoderOps
import org.http4s.FormDataDecoder.formEntityDecoder
import org.http4s.circe.CirceEntityCodec.circeEntityDecoder

import java.time.LocalDate
import java.time.format.DateTimeFormatter

class Routes[F[_] : Sync : ContextShift](blocker: Blocker, versionService: VersionService, schedulerService: SchedulerService) {


  //  val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  private val apiRoutes: HttpRoutes[F] = {
    implicit val decoder = jsonOf[IO, UserData]
    val dsl = new Http4sDsl[F] {}
    import dsl._

    HttpRoutes.of[F] {
      case GET -> Root / "version" =>
        Ok(versionService.version)

      case GET -> Root / "" =>
        Ok(schedulerService.userData.asJson)

      case req@POST -> Root / "" =>
        req.decode[UserData] {
          x =>
            schedulerService.addUser(x)
            Ok(schedulerService.userData.asJson)
        }
    }
  }

  private val staticContentRoutes: HttpRoutes[F] =
    resourceServiceBuilder("web", blocker).toRoutes

  val httpApp: HttpApp[F] =
    Router(
      "/api" -> apiRoutes,
      "/" -> staticContentRoutes
    ).orNotFound
}