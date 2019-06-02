import React,{Component} from 'react';
import '../App.css';
import {Wrapper, Title} from './componentStyles'

class Header extends Component{
  render(){
    return(
      <Wrapper>
        <Title>
          Rate My Github
        </Title>
      </Wrapper>
    );
  }
}

export default Header;
