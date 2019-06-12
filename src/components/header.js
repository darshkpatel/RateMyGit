import React,{Component} from 'react';
import '../App.css';
import { ReactComponent as Logo } from'../img/svg-banner.svg'

class Header extends Component{
  render(){
    return(
      <div class="headerStyle">
          {/* <img src = {logo} alt="logo"/> */}
          <Logo/>
      </div>
    );
  }
}

export default Header;
