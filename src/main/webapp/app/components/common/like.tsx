import React, {Component} from 'react'
import "@fortawesome/react-fontawesome"


export default class Like extends React.Component<{ liked:boolean }>{

  render() {
    let classes = "fa fa-heart";
    if(!this.props.liked) {
      classes += "-o";
    }
    return (<i className={classes}></i>);
  }

}
