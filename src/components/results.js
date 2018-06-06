import React, { Component } from 'react' ;
import { connect } from 'react-redux';

class Results extends Component{
    constructor(props){
        super(props);
        this.votesAngularInPercent = this.votesAngularInPercent.bind(this);
        this.votesReactInPercent = this.votesReactInPercent.bind(this);
        this.votesVueJSInPercent= this.votesVueJSInPercent.bind(this);
    }
    votesAngularInPercent(){
        if(this.props.angular){
            return (this.props.angular/(this.props.angular + this.props.react + this.props.vueJS)* 100);
        }else {
            return 0 ;
        }
    }
    votesReactInPercent(){
        if(this.props.react){
            return (this.props.react/(this.props.angular + this.props.react + this.props.vueJS)* 100);
        }else {
            return 0 ;
        }
    }
    votesVueJSInPercent(){
        if(this.props.vueJS){
            return (this.props.vueJS/(this.props.angular + this.props.react + this.props.vueJS)* 100);
        }else {
            return 0 ;
        }
    }
    votesAngularInPercentStyle(){
        return {
            width: this.votesAngularInPercent() + '%'
        }
    }
    votesReactInPercentStyle(){
        return {
            width: this.votesReactInPercent() + '%'
        }
    }
    votesVueJSInPercentStyle(){
        return {
            width: this.votesVueJSInPercent() + '%'
        }
    }
    render(){
        return (
            <div>
                <span className="badge badge-primary">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped  progress-bar-animated bg-danger" style= {this.votesAngularInPercentStyle()}></div>
                </div>
                <span className="badge badge-primary">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style= {this.votesReactInPercentStyle()}></div>
                </div>
                <span className="badge badge-primary">VueJS: {this.votesVueJSInPercent().toFixed(2) + '%'}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger " style= {this.votesVueJSInPercentStyle()}></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    angular : state.angular,
    react : state.react,
    vueJS : state.vuejs
  });
export default connect(mapStateToProps)(Results);