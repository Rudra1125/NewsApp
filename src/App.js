
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}  country={'us'} category={'sports'}/>
        

      </div>
    )
  }
}

