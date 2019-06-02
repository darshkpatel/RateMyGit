import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

class StatsSingle extends Component {

    render() {
        console.log(`Received username `,this.props.username, `from props` )
        if (typeof (this.props.username) != "undefined"){
            return (
                <Query
                    query={gql`
    {
    rateLimit {
    limit
    cost
    remaining
    resetAt
  }
  user(login: ${this.props.username}) {
    name,
    url,
    createdAt,
    followers{totalCount},
    repositoriesContributedTo{totalCount}
    repositories(first:100 ){
      totalCount,
    	edges{
      node{
        forkCount,
        nameWithOwner,
        issues{totalCount},
        pullRequests{totalCount},
        stargazers{totalCount},
        languages(first:1) {
          edges {
            node {
              name
               }
             }
           }
         }
   	   }
     }
  }
}
    `}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) { console.log(error); return <p>Error :(</p>; }
                        console.log(JSON.stringify(data, null, '\t'))
                        return null
                    }}
                </Query>
            )
        }
    
// If no username is provided in props return null 
        else{
            return null
        }

    }
}

export default StatsSingle;