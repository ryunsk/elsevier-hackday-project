package elsevier.hackday.officescheduler.services

import org.scalatest.flatspec._
import org.scalatest.matchers.should.Matchers
import java.time.LocalDate
import java.time.format.DateTimeFormatter

class SchedulerServiceTest extends AnyFlatSpec with Matchers {

  val schedulerService = new SchedulerService

  behavior of "SchedulerService"

  it should "return all users" in {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    val expectedResult = Array(
      UserData(LocalDate.parse("2021-10-28", formatter), Array("Steve", "Jon")),
      UserData(LocalDate.parse("2021-10-29", formatter), Array("Annie", "Shane"))
    )
    schedulerService.getAllDatesAndUsers(0).names shouldBe expectedResult(0).names
    schedulerService.getAllDatesAndUsers(1).names shouldBe expectedResult(1).names
  }

  it should "return all users - negative" in {
    // Sanity check
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    val expectedResult = Array(
      UserData(LocalDate.parse("2021-10-28", formatter), Array("aaa", "bbb")),
      UserData(LocalDate.parse("2021-10-29", formatter), Array("aaa", "bbb"))
    )
    schedulerService.getAllDatesAndUsers(0).names should not be expectedResult(0).names
    schedulerService.getAllDatesAndUsers(1).names should not be expectedResult(1).names
  }

  it should "add user" in {

  }

}
