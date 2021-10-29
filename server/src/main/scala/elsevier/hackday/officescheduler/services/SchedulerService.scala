package elsevier.hackday.officescheduler.services
import java.time.LocalDate
import java.time.format.DateTimeFormatter

case class Data(date: LocalDate, names: Array[String])

class SchedulerService {
  val dateStr = "2021-09-09"
  val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  val localDate: LocalDate = LocalDate.parse(dateStr, formatter)

  val userData: Array[Data] = Array(Data(localDate, Array("name1", "name1-test")), Data(localDate, Array("name2", "name2-test")))
}