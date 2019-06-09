import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components/lib/Table";

class StatsTable extends Component {
render(){
return(
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
              {this.props.stats['followers']}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Repositories in profile
            </TableCell>
            <TableCell>
              {this.props.stats['total_repos']}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Total Forks of your Repositories
            </TableCell>
            <TableCell>
              {this.props.stats['forks']}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Total Stars on your repositories
            </TableCell>
            <TableCell>
              {this.props.stats['stars']}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Total Pull Requests on your repositories
            </TableCell>
            <TableCell>
              {this.props.stats['prs']}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Total watchers of your repositories
            </TableCell>
            <TableCell>
              {this.props.stats['watchers']}
            </TableCell>
          </TableRow>


        </TableBody>
      </Table>
        )
    }
}

export default StatsTable