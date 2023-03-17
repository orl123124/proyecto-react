/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greeting extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      age: 29
    }
  }   

  render() {
    return (
      <div>
      hola  tu nombre es {this.props.name} y tu edad es {this.state.age}
          <div>
            <button onClick={this.birthday}>cumplir +1</button>
          </div>
      </div>
    )
  }


  birthday = () =>{
      this.setState(prevState => {
        
        console.log("prev "+ prevState.age);
       //{ age : prevState +1 }
            
      
        
      })
  }

}


Greeting.propTypes = {
     name: PropTypes.string,
};
