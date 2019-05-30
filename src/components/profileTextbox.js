import React, {Component} from 'react';
import {Form,InputGroup,FormControl, Button} from 'react-bootstrap';
class ProfileTextbox extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      alert('The value is: ' + this.input.value);
      e.preventDefault();
    }
  
    render() {
      return (
<Form>

    <Form.Label>Github Username</Form.Label>
    <InputGroup>

      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
      );
    }
  }


  export default ProfileTextbox;