import React from 'react';
import { Header, Form, Icon } from 'semantic-ui-react'


class FormSchedule extends React.Component {
    render() {
        return (
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
                Test: {this.props.inputName}, {this.props.inputDate}
            </div>
        )
    }
}
// const FormSchedule = (props) =>
//     <div>
//         <Header as='h3' icon textAlign='center'>
//             <Icon name='calendar alternate outline' circular />
//             <Header.Content>When are you in or away?</Header.Content>
//         </Header>

//         <Form>
//             <Form.Group widths='equal'>
//                 <Form.Input fluid label='Name' placeholder='Name' />
//                 <Form.Input fluid label='Date' placeholder='Date' />
//             </Form.Group>
//             <Form.Button>Submit</Form.Button>
//         </Form>
//         Test: {props.inputName}, {props.inputDate}
//     </div>

export default FormSchedule;