import React from 'react';
import { Header, Form, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";

class FormSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', date: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.name === '') {
            Swal.fire(
                'Name field is empty!',
                'Tip: You can press Space or Enter to close this window',
                'error'
            )
        } else if (this.state.date === '') {
            Swal.fire(
                'Date field is empty!',
                'Tip: You can press Space or Enter to close this window',
                'error'
            )
        } else {
            this.props.onAddingName([[this.state.date, [this.state.name]]])
            Swal.fire(
                this.state.name + ' has been added to the table.',
                'Tip: You can press Space or Enter to close this window',
                'success'
            )
            event.preventDefault();
            this.setState({ name: '', date: '' })
        }
    }

    render() {
        return (
            <div>
                <Header as='h3' icon textAlign='center'>
                    <Icon name='calendar alternate outline' circular />
                    <Header.Content>When are you in or away?</Header.Content>
                </Header>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} />
                        <Form.Input fluid label='Date' placeholder='YYYY-MM-DD, Example: 2020-11-19' name='date' value={this.state.date} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Button >Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default FormSchedule;