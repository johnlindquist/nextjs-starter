import React from "react";
import { Component } from "@Components/framework";
import { Image } from "@Components/image";
import { Row2Item } from "@Components/example/about/row2-item";

export class RowTwo extends Component {
  render() {
    return (
      <>
        <h2 className='text-center text-xl mb-3 uppercase font-thin'>Team</h2>
        <h3 className='text-center text-3xl mb-2'>The leadership</h3>

        <div className="mb-6 grid md:grid-gap-4 md:grid-columns-2 lg:grid-columns-4">
          <Row2Item Image={<Image src={"/static/img/example/person_1.jpg"} alt={"Greg Wolf"} />} heading={"Greg Wolf"} />
          <Row2Item Image={<Image src={"/static/img/example/person_2.jpg"} alt={"Matt Anderson"} />} heading={"Matt Anderson"} />
          <Row2Item Image={<Image src={"/static/img/example/person_3.jpg"} alt={"Nick Patterson"} />} heading={"Nick Patterson"} />
          <Row2Item Image={<Image src={"/static/img/example/person_4.jpg"} alt={"Dave Fleming"} />} heading={"Dave Fleming"} />
          <Row2Item Image={<Image src={"/static/img/example/person_4.jpg"} alt={"Dave Fleming"} />} heading={"Dave Fleming"} />
          <Row2Item Image={<Image src={"/static/img/example/person_2.jpg"} alt={"Matt Anderson"} />} heading={"Matt Anderson"} />
          <Row2Item Image={<Image src={"/static/img/example/person_3.jpg"} alt={"Nick Patterson"} />} heading={"Nick Patterson"} />
          <Row2Item Image={<Image src={"/static/img/example/person_1.jpg"} alt={"Greg Wolf"} />} heading={"Greg Wolf"} />

        </div>
      </>
    );
  }
}
