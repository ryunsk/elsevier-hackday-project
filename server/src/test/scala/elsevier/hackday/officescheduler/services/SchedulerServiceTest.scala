package elsevier.hackday.officescheduler.services

import org.scalatest._
import flatspec._
import matchers._
import org.scalatest.matchers.must.Matchers.be

import java.time.LocalDate
import java.time.format.DateTimeFormatter

class SchedulerServiceTest extends AnyFlatSpec with Matchers {

  val schedulerService = new SchedulerService
  ignore should "return all users" in {
    // Override equals
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    val defaultResult = Array(
      UserData(LocalDate.parse("2021-10-28", formatter), Array("Steve", "Jon")),
      UserData(LocalDate.parse("2021-10-29", formatter), Array("Annie", "Shane"))
    )
    schedulerService.getAllDatesAndUsers shouldBe defaultResult
  }

  ignore should "return all users - negative" in {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    val defaultResult = Array(
      UserData(LocalDate.parse("2021-10-28", formatter), Array("aaa", "bbb")),
      UserData(LocalDate.parse("2021-10-29", formatter), Array("aaa", "bbb"))
    )
    schedulerService.getAllDatesAndUsers should not be defaultResult
  }

  it should "add user" in {

  }

}
