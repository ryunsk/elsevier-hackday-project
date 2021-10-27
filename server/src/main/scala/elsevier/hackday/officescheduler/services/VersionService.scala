package elsevier.hackday.officescheduler.services

import elsevier.hackday.officescheduler.BuildInfo

case class Version(major: Int, minor: Int, patch: Int)

class VersionService {
  val version: String = BuildInfo.version
}
