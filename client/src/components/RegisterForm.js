import {Form, Button} from 'react-bootstrap/'

function RegisterForm() {
  return (
    <div className='m-5 vh-100 row justify-content-center align-items-center'>
    <Form >
      <Form.Group  className='mb-4'controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="ConfirmPassword" placeholder="ConfirmPassword" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default RegisterForm
