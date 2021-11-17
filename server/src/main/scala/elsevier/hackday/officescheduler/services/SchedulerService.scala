package elsevier.hackday.officescheduler.services

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import elsevier.hackday.officescheduler.model.Model.{SingleUserData, UserData}


class SchedulerService() {
  // (transactor: Transactor[IO])
  val formatter: DateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  val defaultData: Array[UserData] = Array(
    UserData(LocalDate.parse("2021-10-28", formatter), Array("Steve", "Jon")),
    UserData(LocalDate.parse("2021-10-29", formatter), Array("Annie", "Shane"))
  )
  var userData: Array[UserData] = defaultData

  def getAllDatesAndUsers: Array[UserData] = {
    userData
  }

  def addUser(input: UserData): Array[UserData] = {
    userData :+= input
    userData
  }

  def resetData(): Unit = {
    userData = defaultData
  }
}