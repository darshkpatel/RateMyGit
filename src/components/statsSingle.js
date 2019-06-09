import React, { Component } from 'react';
import { Query } from "react-apollo";
import { statsQuery } from "../graphqlQueries"
import { collectStats } from "../processData"
import StatsTable from './statsTable'

class StatsSingle extends Component {
  render() {
    console.log(`Received username `, this.props.username, `from props`)
    if (typeof (this.props.username) != "undefined") {
      return (
        <Query query={statsQuery(this.props.username)} >
          {({ loading, error, data, fetchMore }) => {
            if (loading) { return <p>Loading...</p>; }
            if (error) { console.log(error); return <p>Error: {error}</p>; }
            else {
              const stats = collectStats(data)
              console.log(JSON.stringify(stats, null, '\t'))
              return <StatsTable stats={stats} />
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