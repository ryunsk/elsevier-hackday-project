# Office Scheduler App

- https://els-hackday.herokuapp.com/index.html
- Hackday app using React and Http4s to show table of dates and names corresponding to people in the office in particular days.

## Deploying

- `make deploy`
- Browse to the [index.html](https://els-hackday.herokuapp.com/index.html) page on Heroku

## Limitations

- Server version number needs updating manually; client version number updates
  automatically when redeploying

## Tech stack

- React frontend
- Http4s for HTTP backend server
- Doobie to connect the database
- H2 in-memory database
  - https://o7planning.org/11895/install-h2-database-and-use-h2-console

## TODO

- Flyway for database versioning
- Configuration file
