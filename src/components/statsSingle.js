import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { collectStats } from "../processData"
import Card, { CardHeader } from "@kiwicom/orbit-components/lib/Card";
import Table, { TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components/lib/Table";

class StatsSingle extends Component {




    render() {
        console.log(`Received username `,this.props.username, `from props` )
        if (typeof (this.props.username) != "undefined"){
            return (
                <Query  query={  gql`
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
                login,
                createdAt,
                followers{totalCount},
                repositoriesContributedTo{totalCount}
                repositories(first:100 ){
                  totalCount,
                    edges{
                  node{
                    forkCount,
                    nameWithOwner,
                    watchers{totalCount},
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
                ` } >
                    {({ loading, error, data, fetchMore }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) { console.log(error); return <p>Error :(</p>; }
                        const stats = collectStats(data)
                        console.log(JSON.stringify(stats, null, '\t'))
                        return(
                          <Card>
                            <CardHeader title = "Your Github Stats "/>

                            <Table compact="true" >
                              <TableHead>
                                <TableRow>
                                  <TableCell>
                                    Metric
                                  </TableCell>
                                  <TableCell>
                                    Count
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>

                                
                                <TableRow>
                                  <TableCell>
                                    Followers
                                  </TableCell>
                                  <TableCell>
                                    {stats['followers']}
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell>
                                    Repositories contributed to
                                  </TableCell>
                                  <TableCell>
                                    {stats['repos_contributed']}
                                  </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                  <TableCell>
                                    Repositories in profile
                                  </TableCell>
                                  <TableCell>
                                    {stats['total_repos']}
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell>
                                    Total Forks of your Repositories
                                  </TableCell>
                                  <TableCell>
                                    {stats['forks']}
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell>
                                    Total Stars on your repositories
                                  </TableCell>
                                  <TableCell>
                                    {stats['stars']}
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell>
                                    Total Pull Requests on your repositories
                                  </TableCell>
                                  <TableCell>
                                    {stats['prs']}
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell>
                                    Total watchers of your repositories
                                  </TableCell>
                                  <TableCell>
                                    {stats['watchers']}
                                  </TableCell>
                                </TableRow>
                      

                              </TableBody>
                            </Table>
                          </Card>
                        )
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