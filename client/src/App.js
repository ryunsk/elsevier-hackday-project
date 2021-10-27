import React from 'react';
import Version from './components/Version';
import scheduler from './apis/Scheduler';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Menu,
} from 'semantic-ui-react'
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
        <Menu pointing secondary>
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            Careers
          </Menu.Item>
        </Menu>

        <Version serverVersion={this.state.serverVersion} clientVersion={this.state.clientVersion} />
      </Container>

    );
  }
}

export default App;
