import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const FormError = () => (
    <Form error>
        <Form.TextArea name='Content' placeholder='Your thoughts here.' />
        <Message
        error
        header='Action Forbidden'
        content='Please fill out both fields before submitting.'
        />
        <Button>Submit</Button>
    </Form>
)

export default FormError