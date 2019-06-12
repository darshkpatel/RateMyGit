import React, { Component } from 'react';
import {Table} from "antd";

class StatsTable extends Component {
constructor(props){

  super(props);
  
    //Data for table 
    const columns = [
      {
        title: 'Metric',
        dataIndex: 'metric',
      },
      {
        title: 'Value',
        dataIndex: 'value',
      },
    ];
  
    const data = [
      {
        key: '1',
        metric: 'Followers',
        value:props.stats['followers'] 
      },
      {
        key: '2',
        metric: 'Public Repositories',
        value:props.stats['total_repos'] 
      },
      {
        key: '3',
        metric: 'Total Forks on repositories',
        value:props.stats['forks'] 
      },
      {
        key: '4',
        metric: 'Total Stars on repositories',
        value:props.stats['stars'] 
      },
      {
        key: '5',
        metric: 'Total Pull Requests on repositories',
        value:props.stats['prs'] 
      },
      {
        key: '6',
        metric: 'Total watchers of repositories',
        value:props.stats['watchers'] 
      },
      {
        key: '7',
        metric: 'Contributions in the last year',
        value:props.stats['contributions'] 
      },

    ];

    this.state={columns:columns,data:data}
  }

render(){
return(
  <Table columns={this.state.columns} dataSource={this.state.data} pagination={false}  />
        )
    }
}



export default StatsTable