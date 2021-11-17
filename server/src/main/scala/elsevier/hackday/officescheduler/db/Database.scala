package elsevier.hackday.officescheduler.db

import elsevier.hackday.officescheduler.model.Model.SingleUserData
import scalikejdbc._

object Database {


  def main(args: Array[String]): Unit = {
    // initialize JDBC driver & connection pool
    Class.forName("org.h2.Driver")
    // Connection pool should be initialized when starting your applications
    ConnectionPool.singleton("jdbc:h2:mem:hello", "user", "pass")

    // ad-hoc session provider on the REPL
    implicit val session = AutoSession

    val sqlSetup =
      sql"""
           DROP TABLE IF EXISTS BOOKINGS;
           CREATE TABLE BOOKINGS (date DATE, name VARCHAR);
             INSERT into BOOKINGS values ('2021-10-28', 'Steven');
            INSERT into BOOKINGS values ('2021-10-28', 'Jonathan');
           """.execute.apply()

    val users = DB readOnly { implicit session =>
      sql"select name from BOOKINGS".map(_.string(1)).list.apply()
    }
    println(users)
  }

}