package elsevier.hackday.officescheduler.resources

import cats.effect._
import doobie.ExecutionContexts
import doobie.h2.H2Transactor
import doobie.hikari.HikariTransactor
import doobie.util.transactor
import elsevier.hackday.officescheduler.db.{Database, UserRepository}
import elsevier.hackday.officescheduler.services.{SchedulerService, VersionService}
import org.http4s.server.blaze._
import org.http4s.server.middleware._

import java.util.concurrent.Executors
import scala.concurrent.ExecutionContext.global

object Main extends IOApp {

  def run(args: List[String]): IO[ExitCode] = {
    val portParameter = sys.env.getOrElse("PORT", null)

    val port = if (portParameter == null) 8080 else portParameter.toInt
    val host = if (portParameter == null) "localhost" else "0.0.0.0"

    val versionService = new VersionService()
    val schedulerService = new SchedulerService()

    val blockingPool = Executors.newFixedThreadPool(4)
    val blocker = Blocker.liftExecutorService(blockingPool)
    val routes = new Routes[IO](blocker, versionService, schedulerService)
    //    val dbTransactor = Database.transactor

    val transactor =
      for {
        ec <- ExecutionContexts.fixedThreadPool[IO](32)
        be <- Blocker[IO]
        xa <- Database.transactor(ec, be)
      } yield xa

    val repository = new UserRepository(transactor)

    BlazeServerBuilder
      [IO](global)
      .bindHttp(port, host)
      .withHttpApp(CORS(routes.httpApp))
      .serve
      .compile
      .drain
      .as(ExitCode.Success)
  }
} 