import React, { Component } from 'react';
import { Query } from "react-apollo";
import { statsQuery } from "../graphqlQueries"
import { collectStats } from "../processData"
import StatsTable from './statsTable'
import {Card}from "antd";

class StatsSingle extends Component {

  render() {
    //Sanity check
    if (typeof (this.props.username) != "undefined") {

      return (
        //Graphql Query for User Stats
        <Query query={statsQuery} variables={{ username: this.props.username }} >
          {({ loading, error, data, fetchMore }) => {
            if (loading) { return <p>Loading...</p>; } // Loader
            if (error) { console.log(JSON.stringify(error)); return <p>Error: {error.graphQLErrors[0].message}</p>; } //Display Error
            else {

              const stats = collectStats(data)// Collect stats form all repos to a dictionary
              console.log(stats, null, '\t')
              return (
                // Stats Card  
                <Card title={`Github Score for ${stats.name}`} bordered={false} style={{ width: 300 }}>
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