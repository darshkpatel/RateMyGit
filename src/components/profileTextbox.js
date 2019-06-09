import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from "@kiwicom/orbit-components/lib/Button";
class ProfileTextbox extends Component {
  constructor(props){
    super(props);
    
    
    this.state = {
      textbox_username:"",
      showElements: this.displayElements,
      search_username:""
    };
    
    this.displayElements = [];
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = event => {
    this.setState({ textbox_username: event.target.value });
  };
  
  onSubmit = event => {
    event.preventDefault();
    const usernameRegex = /^([a-z\d]+-)*[a-z\d]+$/ig; //Regex for valid github username
    
    //Removes Existing 'Invalid Username' error if present 
    this.displayElements = this.displayElements.filter((obj)=>obj.key!=="invalid_err")
    
    //Check if github username is valid 
    if(usernameRegex.test(this.state.textbox_username)){

      //Pushes Stats Component to display if user isn't already displayed
      if(!this.displayElements.some((obj)=>obj.key===this.state.textbox_username))
      this.displayElements.push(<StatsSingle username = {this.state.textbox_username} key={this.state.textbox_username}/>)
    
    }

    else{ // If Username is invalid
    
      //Pushes Error Component
      this.displayElements.push(
      <React.Fragment key="invalid_err">
      <p>Username {this.state.textbox_username} is not a valid github username </p>
      </React.Fragment>
      )
    }
    this.setState({showElements:this.displayElements})
  };

    render() {
      
      return (
        <React.Fragment>

      <form onSubmit={this.onSubmit}>
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