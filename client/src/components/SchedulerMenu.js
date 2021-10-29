import React from 'react';
import { Menu, Modal, Button, Header, Image } from 'semantic-ui-react'

// state = { activeItem: 'home', value: null }
// handleItemClick = (e, { name }) => this.setState({ activeItem: name })
// const { activeItem } = this.state

class SchedulerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
        this.onClose = this.onClose.bind(this)
        this.onOpen = this.onOpen.bind(this)
    }
    onClose(e) {
        this.setState({ open: false })
    }
    onOpen(e) {
        this.setState({ open: true })
    }

    render() {
        return (
            <Menu pointing secondary>
                <Menu.Item header>Office Scheduler</Menu.Item>
                <Menu.Item as='a'
                    name='home'>Home</Menu.Item>
                <Modal
                    open={this.state.open}
                    onClose={this.onClose}
                    onOpen={this.onOpen}
                    trigger={<Menu.Item as='a' name='about'>About</Menu.Item>}
                >
                    <Modal.Header>About</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>About this app...</Header>
                            <p>
                                This app was created using React!
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color='yellow'
                            icon='checkmark'
                            onClick={this.onClose}
                        >
                            Close
                        </Button>
                    </Modal.Actions>
                </ Modal>
            </Menu >
        )
    }
}
export default SchedulerMenu;