import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import { Input,Button } from "antd";
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
  
  onSubmit = input_text => {
    const usernameRegex = /^([a-z\d]+-)*[a-z\d]+$/ig; //Regex for valid github username
    
    //Removes Existing 'Invalid Username' error if present 
    this.displayElements = this.displayElements.filter((obj)=>obj.key!=="invalid_err")
    
    //Check if github username is valid 
    if(usernameRegex.test(input_text)){

      //Pushes Stats Component to display if user isn't already displayed
      if(!this.displayElements.some((obj)=>obj.key===input_text))
      this.displayElements.push(<StatsSingle username = {input_text} key={input_text}/>)
    
    }

    else{ // If Username is invalid
    
      //Pushes Error Component
      this.displayElements.push(
      <React.Fragment key="invalid_err">
      <p>Username {input_text} is not a valid github username </p>
      </React.Fragment>
      )
    }
    this.setState({showElements:this.displayElements})
  };

    render() {
      
      return (
     <div style={{ background: '#ECECEC', padding: '30px', height:'100vh',display: 'flex',justifyContent:'center', margin:0 }}>
      <Input.Search
      placeholder="Github Username"
      enterButton={ <Button type="primary" icon="github">
      Search
    </Button>}
      size="large"
      onSearch={value => this.onSubmit(value)} 
      style={{ margin:50, width:"50%",}}
      />
      <div>
        {this.displayElements}
      </div>
  </div>
      );
    }
  }

  export default ProfileTextbox;