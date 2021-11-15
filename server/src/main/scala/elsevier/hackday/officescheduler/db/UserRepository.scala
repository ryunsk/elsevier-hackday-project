package elsevier.hackday.officescheduler.db

import cats.effect.IO
import doobie.implicits._
import doobie.util.transactor.Transactor
import elsevier.hackday.officescheduler.model.Model.SingleUserData
import fs2.Stream

class UserRepository(transactor: Transactor[IO]) {
  def getUsers: Stream[IO, SingleUserData] = {
    sql"SELECT date, name FROM USERS".query[SingleUserData].stream.transact(transactor)
  }
}
