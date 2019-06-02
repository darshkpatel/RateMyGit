import React, {Component} from 'react';
import axios from 'axios';
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
    // fetch data
    // console.log("Submitted", this.state.username)
    // axios.get('https://api.myjson.com/bins/fsg77')
    // .then(resp=>{
    //   console.log(resp)
    //   this.setState({...this.state, data: resp.data, isFetched:true})
    // })
    // .catch(err=>{console.log(err)})

    this.setState({showStats:true})
    console.log("Set state true ")
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