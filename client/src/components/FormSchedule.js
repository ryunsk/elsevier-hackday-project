import React from 'react';
import { Header, Form, Icon } from 'semantic-ui-react'


class FormSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', date: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({ name: event.target.value, date: event.target.value });
    // }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.props.onAddingName([[this.state.date, [this.state.name]]])
        alert(this.state.name + ' has been added to the table.');
        event.preventDefault();
        this.setState({ name: '', date: '' })
    }

    render() {
        // { console.log(this.state.resultDateAndName.concat([['3333-10-29', ['aaaa', 'bbbb']]])) }

        const resultDateAndName = this.props.resultDateAndName
        return (
            <div>
                <Header as='h3' icon textAlign='center'>
                    <Icon name='calendar alternate outline' circular />
                    <Header.Content>When are you in or away?</Header.Content>
                </Header>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} />
                        <Form.Input fluid label='Date' placeholder='Date' name='date' value={this.state.date} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Button >Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default FormSchedule;