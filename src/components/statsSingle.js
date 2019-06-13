import React, { Component } from 'react';
import { Query } from "react-apollo";
import { statsQuery } from "../graphqlQueries"
import { collectStats } from "../processData"
import StatsTable from './statsTable'
import {Card, Statistic, Button,Row,Col, notification}from "antd";
import {connect} from 'react-redux';
import {deleteCard} from '../redux/actions/index'
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
               this.props.cards[this.props.cards.findIndex((obj)=>obj.username===this.props.username)].error=true
               console.log(this.props.cards[this.props.cards.findIndex((obj)=>obj.username===this.props.username)], "Error Set True")
               return( 
               <Card title={`Username "${this.props.username}" Not Found`} bordered={true}>
                 Please check if {this.props.username} is a valid github username
                 <br />
                 <Button icon="delete" style={{color:"red", marginTop:10}} block onClick={(event)=>{this.props.deleteCard(this.props.username)}}>
                  Remove
                  </Button>
                </Card>
                    )
              } //Display Error
            else {
              const stats = collectStats(data)// Collect stats form all repos to a dictionary
              return (
                // Stats Card  
                
                <Card title={stats.name!=null?`Github Score for ${stats.name}`:`Github Score for ${this.props.username}`}
                      bordered={true}
                      extra={<Statistic value={stats.score} />}>
                
                  <StatsTable stats={stats} />
                  <Row type="flex" justify="space-between">
                  <Col>
                  <Button icon="delete" style={{color:"red", marginTop:10}} onClick={(event)=>{this.props.deleteCard(this.props.username)}}>
                  Remove
                  </Button>
                  </Col>
                  <Col>
                  <Button type="primary" style={{marginTop:10}} onClick={(event)=>{notification.info({message: 'Detailed Profile Statistics Coming Soon'});}}>
                  Show Stats
                  </Button>
                  </Col>
                  </Row>
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
const mapStateToProps = state => ({
  cards: state.CardsReducer.cards
});

export default connect(mapStateToProps, {deleteCard})(StatsSingle);