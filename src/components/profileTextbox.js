import React, {Component} from 'react';
import StatsSingle from './statsSingle';


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
        <label htmlFor="username">
          GitHub username
        </label>
        <input
          id="username"
          type="text"
          onChange={this.onChange}
          style={{ width: '300px' }}
          value={this.state.username}
          placeholder="Github Username"
          />
        <button type="submit">Search</button>
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