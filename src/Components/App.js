import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

const ip = '192.168.10.26';

// Making the App component
class App extends Component {
  constructor() {
    super()
    
    this.state = {
      endpoint: `http://${ip}:4001` // this is where we are connecting to with sockets
    }
  }

   // render method that renders in code if the state is updated
   render() {
    const socket = socketIOClient(this.state.endpoint);
  }
}

export default App;