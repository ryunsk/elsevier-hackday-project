import java.sql.{Connection, DriverManager}

object SimpleConnection {
  def main(args: Array[String]) {
    val driver = "org.h2.Driver" // driver classname
    val url = "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1" // connect URL
    val username = "sa"
    val password = ""

    // there's probably a better way to do this
    var connection: Connection = null

    try {
      // make the connection
      Class.forName(driver)
      connection = DriverManager.getConnection(url, username, password)

      // create the statement, and run the select query
      val statement = connection.createStatement()
      val resultSet = statement.executeQuery("SELECT date, name FROM USERS")
      while (resultSet.next()) {
        val date = resultSet.getString("date")
        val name = resultSet.getString("name")
        println("date, name = " + date + ", " + name)
      }
    } catch {
      case e => e.printStackTrace
    }
    connection.close()
  }

}
