import React from "react";
import './Request.css';



class Request extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div className='request__container'>
        <form method="post" enctype='mulitpart/form-data'>
          <label>
           First Name:
           
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <label>
           Last Name:
           
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <label>
           Shipping Address:
           
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <label>
           How can we help you?:
           
            <input type="textarea" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <div className='request__upload'>
          <label>
           Upload your file here.
           
           <i><h6>acceptable format(jpeg, png, pdf, jfif)</h6></i>
           
            <input type="file" accept='image/*,.pdf' onChange={this.handleChange} />
          </label>
          </div>
          
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default Request;