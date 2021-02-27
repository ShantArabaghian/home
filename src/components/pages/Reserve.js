import React, { Component } from 'react';import '../../App.css';
import './Contact.css';
export default class Contact extends Component {
  state={
    name: '',
    lastname:'',
    reserve:'',
    sent:false
  }
  handleName=(e)=>{
    this.setState({name:e.target.value})
  }
  
  handleLastname=(e)=>{
    this.setState({lastname:e.target.value})
  }
  
  handleReserve=(e)=>{
    this.setState({reserve:e.target.value})
  }
  option=()=>{
    let options=[]
    for(let i=1; i<=24; i++){ 
      options.push(<option value={i}>{i}</option>)
  }
  return options;
  }
  render(){
      return (
        
        <div className="contact-form">
         
        <p>Reserve a Table</p>
        <div>
        <form>
        <label>Name</label>
        <input type="text"
         id="fname" 
         name="firstname"
          placeholder="First name.." 
          value={this.state.name}
          onChange={this.handleName}
          />
        
        <input type="text" id="lname" name="lastname" placeholder="Last name.."  value={this.state.lastname} 
          onChange={this.handleLastname}/>
    
    
        <label>How many people are you ?</label>
        <select 
        value={this.state.reserve} 
          onChange={this.handleReserve}
          >
            {this.option()}
            </select>
            <label>Select Date and Time</label>
            <input type="date" id="start" name="trip-start"
       value="Today"
       min="2021-01-01" max="2022-01-01"/>
       <input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/><span><small>We are open from 12AM to 12PM</small></span>

<br/>
     <br/>
        <input type="submit" value="Send" />
        </form>
        </div>
        </div>
        
      );
      
    }
  }
