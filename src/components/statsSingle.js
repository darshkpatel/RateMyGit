import React, { Component } from 'react';
import { Query } from "react-apollo";
import { statsQuery } from "../graphqlQueries"
import { collectStats } from "../processData"
import StatsTable from './statsTable'
import {Card, Statistic}from "antd";

class StatsSingle extends Component {

  render() {
    //Sanity check
    if (typeof (this.props.username) != "undefined") {

      return (
        //Graphql Query for User Stats
        <Query query={statsQuery} variables={{ username: this.props.username }} >
          {({ loading, error, data, fetchMore }) => {
            if (loading) { 
               return(
                <Card title={`Github Score for "${this.props.username}"`} bordered={true} loading={true}/>
            )
            } // Loader
            if (error) {
               console.log(JSON.stringify(error));
               return <Card title={`Username "${this.props.username}" Not Found`} bordered={true}>Please check if {this.props.username} is a valid github username </Card>
               
            
            
            } //Display Error
            else {
              const stats = collectStats(data)// Collect stats form all repos to a dictionary
              return (
                // Stats Card  
                
                <Card title={stats.name!=null?`Github Score for ${stats.name}`:`Github Score for ${this.props.username}`}
                      bordered={true}
                      extra={<Statistic value={stats.score} />}>
                
                  <StatsTable stats={stats} />
                </Card>
              )
            }
          }
          }
        </Query>
      )
    }
    // If no username is provided in props return null 
    else {
      return null
    }

  }


}

export default StatsSingle;