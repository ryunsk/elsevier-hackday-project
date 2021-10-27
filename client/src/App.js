import React from 'react';
import Version from './components/Version';
import scheduler from './apis/Scheduler';
import ScheduledTable from './components/ScheduledTable';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
class App extends React.Component {

  state = { serverVersion: null, clientVersion: null, activeItem: 'home', value: null }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
    const { activeItem } = this.state
    return (
      <Container>
        <Menu pointing secondary>
          <Menu.Item as='a'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item as='a'
            name='schedule'
            active={activeItem === 'schedule'}
            onClick={this.handleItemClick}>
            Schedule
          </Menu.Item>
        </Menu>

        <Calendar />

        {/* Calendar: Select multiple days */}
        <ScheduledTable />
        <Version serverVersion={this.state.serverVersion} clientVersion={this.state.clientVersion} />
      </Container>
    );
  }
}

export default App;
