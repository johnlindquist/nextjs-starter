import React, { Component } from "react";
import { echo } from "@Util/echo";

export class ContactForm extends Component {
  handleSubmit = async () => {
    event.preventDefault();
  };


  handleChange = (event) => {
    const stateKey = event.target.getAttribute("id");
    const val = event.target.value;
    const st = {};
    st[stateKey] = val;
    this.setState(st);
    echo(this.state);
  };

  render() {
    return (
      <>
        <div className='w-full md:w-3/5 inline-block'>
          <form onSubmit={this.handleSubmit}>
            <div className='inline-block pr-3 sm:pr-5 w-1/2 mb-4'>
              <label className='uppercase block mb-1' htmlFor="fname">
                First name
              </label>
              <input className='form-input w-full' type="text" id="fname" onChange={this.handleChange} required={true} />
            </div>
            <div className='inline-block w-1/2 mb-4'>
              <label className='uppercase block mb-1' htmlFor="lname">
                Last name
              </label>
              <input className='form-input w-full' type="text" id="lname" onChange={this.handleChange} required={true} />
            </div>
            <div className='mb-4'>
              <label className='uppercase block mb-1' htmlFor="email">
                Email
              </label>
              <input className='form-input w-full' type="email" id="email" onChange={this.handleChange} required={true} />
            </div>
            <div className='mb-4'>
              <label className='uppercase block mb-1' htmlFor="message">
                Message
              </label>
              <textarea className='form-input w-full h-64' id="message" onChange={this.handleChange} required={true} />
            </div>
            <div className='text-right mb-4'>
              <button className="btn btn-blue font-bold" type="submit">Send Message</button>
            </div>
          </form>
        </div>

      </>
    );
  }
}
