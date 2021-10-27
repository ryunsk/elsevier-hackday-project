import React from 'react';
import Version from './components/Version';
import scheduler from './apis/Scheduler';
import ScheduledTable from './components/ScheduledTable';
import SchedulerMenu from './components/SchedulerMenu';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
class App extends React.Component {

  state = { serverVersion: null, clientVersion: null }

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

        <Calendar />

        {/* Calendar: Select multiple days */}
        <ScheduledTable />
        <Version serverVersion={this.state.serverVersion} clientVersion={this.state.clientVersion} />
      </Container>
    );
  }
}

export default App;
