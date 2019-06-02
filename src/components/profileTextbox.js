import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import {Form, Input, Button, FormTitle} from './componentStyles';
class ProfileTextbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      showStats: false
    };
  }
  onChange = event => {
    this.setState({ ...this.state, username: event.target.value });
  };

  onSubmit = event => {
    this.setState({showStats:true})
    console.log("Changed state showStats to true")
    event.preventDefault();
  };

    render() {
      
      return (
        <React.Fragment>

      <Form onSubmit={this.onSubmit}>
        {/* <label htmlFor="username">
          GitHub username
        </label> */}

        <FormTitle>
          Enter your github username to check score
        </FormTitle>
        <Input
          id="username"
          type="text"
          onChange={this.onChange}
          style={{ width: '300px' }}
          value={this.state.username}
          placeholder="Github Username"
          />
        <Button type="submit">Search</Button>
      </Form>

      <div>
        {console.log("showStats Var:",this.state.showStats )}
        {
        this.state.showStats===true && <StatsSingle username = {this.state.username} />
        }
      </div>
      </React.Fragment>
      );
    }
  }

  export default ProfileTextbox;