import React, { useState } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

// state = { activeItem: 'home', value: null }
// handleItemClick = (e, { name }) => this.setState({ activeItem: name })
// const { activeItem } = this.state
const SchedulerMenu = () =>
    <Menu pointing secondary>
        <Menu.Item header>Office Scheduler</Menu.Item>
        <Menu.Item as='a'
            name='home'
        >Home</Menu.Item>
        <Menu.Item as='a'
            name='schedule'
        >Schedule</Menu.Item>
    </Menu>


export default SchedulerMenu;