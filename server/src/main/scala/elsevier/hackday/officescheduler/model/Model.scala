package elsevier.hackday.officescheduler.model

import java.time.LocalDate

object Model {

  case class UserData(date: LocalDate, names: Array[String])

  case class SingleUserData(date: LocalDate, name: String)

}
