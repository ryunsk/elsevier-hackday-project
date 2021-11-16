package elsevier.hackday.officescheduler.db

import doobie._
import cats.effect._
import doobie.hikari.HikariTransactor
import doobie.h2._
import scala.concurrent.ExecutionContext

object Database {
  def transactor(executionContext: ExecutionContext, blocker: Blocker)(implicit contextShift: ContextShift[IO]): Resource[IO, H2Transactor[IO]] = {
    H2Transactor.newH2Transactor[IO](
      //      "org.h2.Driver", // driver classname
      "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1", // connect URL
      "sa", // username
      "", // password
      executionContext,
      blocker
    )
  }

  //  val transactor: Resource[IO, HikariTransactor[IO]] =
  //    for {
  //      ce <- ExecutionContexts.fixedThreadPool[IO](32) // our connect EC
  //      be <- Blocker[IO] // our blocking EC
  //      xa <- HikariTransactor.newHikariTransactor[IO](
  //        "org.h2.Driver", // driver classname
  //        "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1", // connect URL
  //        "sa", // username
  //        "", // password
  //        ce, // await connection here
  //        be
  //      )
  //    } yield xa
}