package elsevier.hackday.officescheduler.services

import java.time.LocalDate
import java.time.format.DateTimeFormatter

case class UserData(date: LocalDate, names: Array[String])

class SchedulerService {
  val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  val userData: Array[UserData] = Array(
    UserData(LocalDate.parse("2021-10-28", formatter), Array("Steve", "Jon")),
    UserData(LocalDate.parse("2021-10-29", formatter), Array("Annie", "Shane"))
  )
}