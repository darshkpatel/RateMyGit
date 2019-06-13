import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import { Input,Button } from "antd";
import { Row, Col, message, notification } from 'antd';
import {connect} from 'react-redux';
import {addCard} from '../redux/actions/index'
class ProfileTextbox extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  
  onSubmit = input_text => {
    const usernameRegex = /^([a-z\d]+-)*[a-z\d]+$/ig; //Regex for valid github username
    
    //Check if github username is valid 
    if(usernameRegex.test(input_text)){

      //Pushes Stats Component to display if user isn't already displayed
      if(!this.props.cards.some((obj)=>obj.username===input_text)){
      let newCard = <Col xs={20} md={7} lg={7} xl={7} key={input_text} style={{paddingBottom:20}}>      <StatsSingle username = {input_text} />       </Col>
      this.props.addCard(newCard,input_text)
      }
    
      //Show notification to search another username if it's the first search
       if(this.props.cards.length===0){
          notification.info({
          message: 'Search for another username to compare scores',
        });
      }
      
  }

    else{ // If Username is invalid
      message.warning(`${input_text} is not a valid github username` );
    }

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

      <Row type="flex" justify="center" gutter={24}>

        {/* Returns an array of JSX objects to display */}
        {this.props.cards.reduce((acc,obj)=>[...acc,obj.card],[])}
      
      </Row>

  </div>
      );
    }
  }
  const mapStateToProps = state => ({
    cards: state.CardsReducer.cards
  });

  export default connect(mapStateToProps, {addCard})(ProfileTextbox);