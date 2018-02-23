/*
    ./client/components/App.jsx
*/

import React from 'react';

import '../css/style.css'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      filterText: '',
      filterText2: ''
    }
  }

  filterList = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }} id="app">
        <input type='text' placeholder='Start Typing' value={this.state.filterText} onChange={this.filterList} autoFocus ></input>
      </div>);
  }

}

// JSON
var DATA = [{
  "title": "Binding",
  "tags": "Binding Hiding Miding Sliding SAVE",
  "content": "This is the binding content area where information about binding is shown"
}, {
  "title": "Constant",
  "tags": "Math bath slather calf save",
  "content": "This is the Constant content area where information about Constant is shown"
}, {
  "title": "Numbers",
  "tags": "Happy birthday sir and maam",
  "content": "This is the Numbers content area where information about Numbers is shown"
}];