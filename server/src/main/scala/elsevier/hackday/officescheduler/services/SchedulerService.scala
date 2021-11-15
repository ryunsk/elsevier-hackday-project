package elsevier.hackday.officescheduler.services

import cats.effect.IO
import elsevier.hackday.officescheduler.db.UserRepository
import fs2.Stream
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import elsevier.hackday.officescheduler.model.Model.{SingleUserData, UserData}


class SchedulerService(repository: UserRepository) {
  val formatter: DateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  var userData: Array[UserData] = Array(
    UserData(LocalDate.parse("2021-10-28", formatter), Array("Steve", "Jon")),
    UserData(LocalDate.parse("2021-10-29", formatter), Array("Annie", "Shane"))
  )

  def getAllDatesAndUsers: Array[UserData] = {
    userData
  }

  def getAllDatesAndUsersFromDB: Stream[IO, SingleUserData] = {
    repository.getUsers
  }

  def addUser(input: UserData): Array[UserData] = {
    userData :+= input
    userData
  }

  def resetData(): Unit = {
    userData = Array(
      UserData(LocalDate.parse("2021-10-28", formatter), Array("Steve", "Jon")),
      UserData(LocalDate.parse("2021-10-29", formatter), Array("Annie", "Shane"))
    )
    userData
  }
}