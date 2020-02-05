

import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './copmponents/IndecisionApp'

class Old{
  constructor(){
    this.name ="Mike"
  }
}
const old = new Old()
console.log(old);

class New{
  name='Jen'
}
const newS = new New();
console.log(newS);
 



  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
