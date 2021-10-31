import React from 'react';
import { Icon, Table, Header } from 'semantic-ui-react'
import scheduler from '../apis/Scheduler';

class ScheduledTable extends React.Component {
    // GET dates and name as JSON
    // decode json into string

    constructor(props) {
        super(props);
        this.state = {
            tableData: [['2000-01-01', ['CCC', 'DDD']]]
        }
    }

    readDateAndName = async (term) => {
        const arr = [['2000-01-01', ['AAA', 'BBB']]]

        scheduler.get('/users')
            .then(console.log("Response data is: "))
            .then(response => {
                Object.keys(response.data).map(key => arr.push([response.data[key].date, response.data[key].names]));
                this.setState({ tableData: arr })
            })
            // .then(this.setState({ tableData: arr }))
            .then(console.log(arr))
            .then(console.log(this.state.tableData))

        // const response = await scheduler.get('/users')
        // this.setState({
        //     tableData: Object.keys(response.data).map(key => [response.data[key].date, response.data[key].names])
        // })
    };

    componentDidMount() {
        this.readDateAndName();
    }

    renderDataAsTable2() {
        this.state.tableData.map((ourData) => {
            console.log("TABLE DATA")
            console.log(ourData)
            return (
                <Table.Row>
                    <Table.Cell>{ourData[0]}</Table.Cell>
                    <Table.Cell>{ourData[1].join(", ")}</Table.Cell>
                </Table.Row>
            )
        })
    }

    renderDataAsTable() {
        return this.props.resultDateAndName.map((ourData) => {
            return (
                <Table.Row>
                    <Table.Cell>{ourData[0]}</Table.Cell>
                    <Table.Cell>{ourData[1].join(", ")}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <div>
                <Header as='h3' icon textAlign='center'>
                    <Icon name='table' circular />
                    <Header.Content>Results</Header.Content>
                </Header>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>List of people booked</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderDataAsTable()}
                        {this.renderDataAsTable2()}

                        <Table.Row>
                            <Table.Cell>Static test</Table.Cell>
                            <Table.Cell>Static test</Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
                "Text data"
                {this.state.tableData}
            </div>
        )
    }
}
export default ScheduledTable;