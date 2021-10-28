import React from 'react';
import { Icon, Table, Header } from 'semantic-ui-react'

const ScheduledTable = () =>
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
                <Table.Row>
                    <Table.Cell>2021-10-28</Table.Cell>
                    <Table.Cell>Steve, Ben, Martin</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2021-10-29</Table.Cell>
                    <Table.Cell>Steve, Ben, Bill</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
export default ScheduledTable;