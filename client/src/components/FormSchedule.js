import React from 'react';
import { Header, Form, Icon } from 'semantic-ui-react'


class FormSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', date: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value, date: event.target.value });
    }

    handleSubmit(event) {
        this.props.onAddingName(this.state.name)
        alert(this.state.name + ' has been added to the table.');
        event.preventDefault();
        this.setState({ name: '' }) // Empty out text field after typing it in
    }

    render() {
        const resultNames = this.props.resultNames
        return (
            <div>
                <Header as='h3' icon textAlign='center'>
                    <Icon name='calendar alternate outline' circular />
                    <Header.Content>When are you in or away?</Header.Content>
                </Header>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                        <Form.Input fluid label='Date' placeholder='Date' />
                    </Form.Group>
                    <Form.Button >Submit</Form.Button>
                </Form>
                Test input Name: {this.state.name}
                <br />
                Test input Date: "{this.state.date}"
                <br />
                Test List of Names (Should be the same as below): {resultNames}
            </div>
        )
    }
}

export default FormSchedule;