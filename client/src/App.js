import React from 'react';
import Version from './components/Version';
import scheduler from './apis/Scheduler';
import ScheduledTable from './components/ScheduledTable';
import SchedulerMenu from './components/SchedulerMenu';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
} from 'semantic-ui-react'
import FormSchedule from './components/FormSchedule';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverVersion: null, clientVersion: null, resultDateAndName: [['2021-10-28', ['Steve', 'Jon']], ['2021-10-29', ['Annie', 'Shane']]]
    }
    this.handleNameAddition = this.handleNameAddition.bind(this)
  }

  handleNameAddition(e) {
    this.setState({ resultDateAndName: this.state.resultDateAndName.concat(e) })
  }


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
          resultDateAndName={this.state.resultDateAndName}
          onAddingName={this.handleNameAddition}
        />

        App.js Test: List of Dates: {this.state.resultDateAndName.map(x => x[0]).join(", ")}
        <br />
        App.js Test: List of Names: {this.state.resultDateAndName.map(x => x[1].join(", ")).join(", ")}
        <br />
        {console.log(this.state.resultDateAndName.concat([['3333-10-29', ['aaaa', 'bbbb']]]))}


        <ScheduledTable
          resultDateAndName={this.state.resultDateAndName}
        />

        <Version
          serverVersion={this.state.serverVersion}
          clientVersion={this.state.clientVersion} />

      </Container>
    );
  }
}

export default App;
