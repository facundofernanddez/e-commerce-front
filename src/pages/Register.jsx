export const Register = () => {
  return (
    <>
      <Form className="m-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>

        <Button className="mt-2 mx-2" variant="primary">
          Register
        </Button>
      </Form>
    </>
  );
};
