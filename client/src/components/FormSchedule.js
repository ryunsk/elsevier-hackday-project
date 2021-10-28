import React from 'react';
import { Header, Form, Icon } from 'semantic-ui-react'



const FormSchedule = () =>
    <div>
        <Header as='h3' icon textAlign='center'>
            <Icon name='calendar alternate outline' circular />
            <Header.Content>When are you in or away?</Header.Content>
        </Header>

        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Name' placeholder='Name' />
                <Form.Input fluid label='Date' placeholder='Date' />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>
    </div>

export default FormSchedule;