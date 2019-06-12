import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import { Input,Button } from "antd";
import { Row, Col, message } from 'antd';

class ProfileTextbox extends Component {
  constructor(props){
    super(props);
    
    
    this.state = {
      showElements: this.displayElements,
    };
    
    this.displayElements = [];
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  
  onSubmit = input_text => {
    const usernameRegex = /^([a-z\d]+-)*[a-z\d]+$/ig; //Regex for valid github username
    
    //Removes Existing 'Invalid Username' error if present 
    this.displayElements = this.displayElements.filter((obj)=>obj.key!=="invalid_err")
    
    //Check if github username is valid 
    if(usernameRegex.test(input_text)){

      //Pushes Stats Component to display if user isn't already displayed
      if(!this.displayElements.some((obj)=>obj.key===input_text))
      this.displayElements.push(<Col xs={20} md={7} lg={7} xl={7} key={input_text}><StatsSingle username = {input_text} /></Col>)
    }

    else{ // If Username is invalid
    
      //Pushes Error Component
      // this.displayElements.push(
      // <Col span={8} key="invalid_err">
      // <p>Username {input_text} is not a valid github username </p>
      // </Col>
      // )
      message.warning(`${input_text} is not a valid github username` );
      
    }
    this.setState({showElements:this.displayElements})
  };

    render() {
      
      return (
  <div >
       <Row type="flex" justify="center" style={{padding:40}}>
         <Col md={10} lg={10} xl={10} xs={{span:19}} gutter={24}>

      <Input.Search
      placeholder="Github Username"
      enterButton={ <Button type="primary" icon="github">
      Search
    </Button>}
      size="large"
      onSearch={value => this.onSubmit(value)} 
      />
      </Col>
      </Row>

      <Row type="flex" justify="center" gutter={24} style={{paddingBottom:20}}>
        {this.displayElements}
      </Row>

  </div>
      );
    }
  }

  export default ProfileTextbox;