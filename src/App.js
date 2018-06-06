import React, { Component } from 'react';
import './App.css';
import { voteAngular, voteReact, voteVueJS } from './actions/index' ;
import {connect } from 'react-redux';
import Results from './components/results';
class App extends Component { 
  constructor(props){
    super(props);
    this.handleVoteAngular = this.handleVoteAngular.bind(this);
    this.handleVoteReact = this.handleVoteReact.bind(this);
    this.handleVoteVueJS= this.handleVoteVueJS.bind(this) ;
  }
  handleVoteAngular(){
    this.props.voteAngular();
  }
  handleVoteReact(){
    this.props.voteReact();
  }
  handleVoteVueJS(){
    this.props.voteVueJS();
  }
  render() {
    return (
      <div>
          <div className="jumbotron" style={{'textAlign': 'center'}}>
           <h2>What is your favorite frond-end framework 2017</h2>
           <h4>Click on the logos below to vote!</h4>
            <div className ='row' >
                <div className='col-md-4 '>
                  <img src='download.png' height="80" alt="Angular" onClick={this.handleVoteAngular}/>
                </div>
                <div className='col-md-4 '>
                  <img src='download (1).png' height="80" alt="React" onClick={this.handleVoteReact}/>  
                </div>
                <div className='col-md-4 '>
                   <img src='download (2).png' height='80' alt="VueJS" onClick= {this.handleVoteVueJS}/> 
                </div>
            </div>
      </div>
      <hr/>
      <Results/>
    </div>  
    );
  }
}
const mapStateToProps = (state) => ({
  angular : state.angular,
  react : state.react,
  vueJS : state.vuejs
});
const mapActionsToProps = ({
  voteAngular: voteAngular,
  voteReact : voteReact,
  voteVueJS: voteVueJS
})
export default connect(mapStateToProps,mapActionsToProps)(App);
