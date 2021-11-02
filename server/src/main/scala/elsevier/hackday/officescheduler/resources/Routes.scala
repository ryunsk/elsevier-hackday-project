package elsevier.hackday.officescheduler.resources

import cats.effect.{Blocker, ContextShift, IO, Sync}
import elsevier.hackday.officescheduler.services.{SchedulerService, UserData, VersionService}
import org.http4s._
import org.http4s.dsl.Http4sDsl
import org.http4s.implicits.http4sKleisliResponseSyntaxOptionT
import org.http4s.server.Router
import org.http4s.server.staticcontent.resourceServiceBuilder
import org.http4s.circe._
import io.circe.generic.auto._
import io.circe.syntax.EncoderOps
import org.http4s.circe.CirceEntityCodec.circeEntityDecoder

class Routes[F[_] : Sync : ContextShift](blocker: Blocker, versionService: VersionService, schedulerService: SchedulerService) {


  //  val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  private val apiRoutes: HttpRoutes[F] = {
    implicit val decoder = jsonOf[IO, UserData]
    val dsl = new Http4sDsl[F] {}
    import dsl._

    HttpRoutes.of[F] {
      case GET -> Root / "version" =>
        Ok(versionService.version)

      case GET -> Root / "users" =>
        println("===== Get all data successful =====")
        Ok(schedulerService.getAllDatesAndUsers.asJson)

      case req@POST -> Root / "users" =>
        req.decode[UserData] {
          x =>
            schedulerService.addUser(x)
            Ok(schedulerService.userData.asJson)
        }

      case POST -> Root / "reset" =>
        schedulerService.resetData()
        Ok("User data has been reset")
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