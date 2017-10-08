import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Empty(props) {
    return (
      <h3>Welcome to the main content schtuff!</h3>
    )
}

function Resume(props) {
  return (
    <h3>I'm the resume!</h3>
  )
}

function About(props) {
  return (
    <h3>I'm the about!</h3>
  )
}

function Other(props) {
  return (
    <h3>I'm the other!</h3>
  )
}

class Content extends React.Component {
  constructor (props){
    super(props);
    this.state = {contentType: props.contentType};
    this.displayResume = this.displayResume.bind(this);
    this.displayAbout = this.displayAbout.bind(this);
    this.displayOther = this.displayOther.bind(this);
  }

  displayResume(e){
    e.preventDefault();
    this.setState(prevState => (
      prevState.contentType=='resume' ? {contentType: 'none'} : {contentType: 'resume'})
    )
  }
  
  displayAbout(e){
    e.preventDefault();
    this.setState(prevState => (
      prevState.contentType=='about' ? {contentType: 'none'} : {contentType: 'about'})
    )
  }
  
  displayOther(e){
    e.preventDefault();
    this.setState(prevState => (
      prevState.contentType=='other' ? {contentType: 'none'} : {contentType: 'other'})
    )
  }

  render(){
    let content = null;
    switch (this.state.contentType) {
      case 'empty':
      content = <Empty />
      break;
      case 'about':
      content = <About />
      break;
      case 'resume':
      content = <Resume />
      break;
      case 'other':
      content = <Other />
      break;
    }
    return (
      <div class="content">
        <a onClick={this.displayResume}>
          <h2>Resume</h2>
        </a>
        <a onClick={this.displayAbout}>
          <h2>About</h2>
        </a>
        <a onClick={this.displayOther}>
          <h2>More Stuff</h2>
        </a>
        { content }
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <a>You found a place!</a>
        </h1>
        <Content contentType='empty' />
      </div>
    )
  }
}


export default App;
