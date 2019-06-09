import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from "@kiwicom/orbit-components/lib/Button";
class ProfileTextbox extends Component {
  constructor(props){
    super(props);
    this.displayElements = [];
    this.state = {
      textbox_username:"",
      showElements: this.displayElements,
      search_username:""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = event => {
    this.setState({ textbox_username: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const usernameRegex = /((?!.*(-){2,}.*)[a-z0-9][a-z0-9-]{0,38}[a-z0-9])/ig;

    if(usernameRegex.test(this.state.textbox_username)){
      this.displayElements.push(<StatsSingle username = {this.state.textbox_username} key={this.state.textbox_username}/>)
      this.setState({showElements:this.displayElements})
      console.log(this.displayElements)
    }
  };

    render() {
      
      return (
        <React.Fragment>

      <form onSubmit={this.onSubmit}>
        {/* <label htmlFor="username">
          GitHub username
        </label> */}


          Enter your github username to check score

        <InputField
          id="username"
          type="text"
          onChange={this.onChange}
          style={{ width: '300px' }}
          value={this.state.textbox_username}
          placeholder="Github Username"
          />
        <Button submit="true" >Search</Button>
      </form>

      <div>
        {this.displayElements}
      </div>
      </React.Fragment>
      );
    }
  }

  export default ProfileTextbox;