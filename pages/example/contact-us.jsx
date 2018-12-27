import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { ContactForm } from "@Components/example/contact/contact-form";

export default class ContactUs extends Component {


  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className="bg-white shadow p-8">
                <h2 className='text-center text-xl mb-3 uppercase font-thin'>GET IN TOUCH</h2>
                <h3 className='text-center text-3xl mb-2'>Let{"'"}s Chat</h3>
                <ContactForm />
                <div className='w-full md:w-2/5 inline-block md:pl-20 align-top leading-loose'>
                  <h2>Contact Information</h2>
                  <div>
                    <i className='fa fa-map-marker' /> 198 West 21th Street, Suite 721 New York NY 10016
                  </div>
                  <div>
                    <i className='fa fa-envelope' /> info@domain.com
                  </div>
                  <div>
                    <i className='fa fa-phone' /> +123 456 7890
                  </div>
                  <div className='p-8' />
                  <h2>Feedback</h2>
                  <div>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                </div>
              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
