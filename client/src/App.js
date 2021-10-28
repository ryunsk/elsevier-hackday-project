import React from 'react';
import Version from './components/Version';
import scheduler from './apis/Scheduler';
import ScheduledTable from './components/ScheduledTable';
import SchedulerMenu from './components/SchedulerMenu';
import SchedulerCalendar from './components/SchedulerCalendar';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
} from 'semantic-ui-react'
import FormSchedule from './components/FormSchedule';
class App extends React.Component {

  state = { serverVersion: null, clientVersion: null, inputName: "TestName", inputDate: "2021-10-28", resultDates: ["2021-10-28"], resultNames: ["Steve", "Jon"] }

  readServerVersion = async (term) => {
    const response = await scheduler.get('/version');

    const { version } = require('../package.json');

    this.setState({
      serverVersion: response.data,
      clientVersion: version
    });
  };

  componentDidMount() {
    this.readServerVersion();
  }

  render() {
    return (
      <Container>
        <SchedulerMenu />

        <FormSchedule
          inputName={this.state.inputName}
          inputDate={this.state.inputDate}
          resultNames={this.state.resultNames}
          resultDates={this.state.resultDates} />

        <ScheduledTable
          inputName={this.state.inputName}
          inputDate={this.state.inputDate}
          resultNames={this.state.resultNames}
          resultDates={this.state.resultDates} />

        List of Dates: {this.state.resultDates}
        <br />
        List of Names: {this.state.resultNames}
        <Version
          serverVersion={this.state.serverVersion}
          clientVersion={this.state.clientVersion} />

      </Container>
    );
  }
}

export default App;
