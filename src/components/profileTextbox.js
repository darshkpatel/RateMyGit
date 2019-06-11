import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import { Input,Button } from "antd";
import { Row, Col } from 'antd';

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
      this.displayElements.push(<Col span={7}><StatsSingle username = {input_text} key={input_text}/></Col>)
      console.log(this.displayElements)
    }

    else{ // If Username is invalid
    
      //Pushes Error Component
      this.displayElements.push(
      <Col span={8} key="invalid_err">
      <p>Username {input_text} is not a valid github username </p>
      </Col>
      )
    }
    this.setState({showElements:this.displayElements})
  };

    render() {
      
      return (
  <div style={{flexFlow:"column", height:"100%"}}>
       <Row type="flex" justify="center">
      <Input.Search
      placeholder="Github Username"
      enterButton={ <Button type="primary" icon="github">
      Search
    </Button>}
      size="large"
      onSearch={value => this.onSubmit(value)} 
      style={{ margin:50, width:"50%",}}
      />
      </Row>

      <Row type="flex" justify="center" gutter={24}>
        {this.displayElements}
      </Row>

  </div>
      );
    }
  }

  export default ProfileTextbox;