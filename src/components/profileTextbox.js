import React, {Component} from 'react';
import StatsSingle from './statsSingle';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from "@kiwicom/orbit-components/lib/Button";
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
          value={this.state.username}
          placeholder="Github Username"
          />
        <Button submit="true" >Search</Button>
      </form>

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