import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const ScheduledTable = () =>
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
export default ScheduledTable;