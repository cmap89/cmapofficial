"use client"

import Form from "next/form";
import Button from "./Utils/Button";
import Dropdown from '../components/Utils/Dropdown';

import { options, handleOptionSelect } from "../../data/dropdownOptions"

export default function BookingForm() {
  const stopRefresh = e => e.preventDefault();

  return (
    <Form id="bk-pg-form" className="bk-form-container" action="/">
      <h2 className="bk-form-title" >Book a Music Service</h2>
      <div className="bk-field-group">
        <input name="first" className="bk-field" type="text" placeholder="First Name" />
        <label htmlFor="first">Enter your first name.</label>
      </div>
      <input className="bk-field" type="text" placeholder="Last Name" />
      <input className="bk-field" type="email" placeholder="Email" />
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <textarea form="bk-pg-form" className="bk-field bk-text-area" type="text" placeholder="Tell me more about your request." />
      <input onClick={stopRefresh} className="btn bk-form-submit-btn" type="submit" />
      {/* <Button msg={"Submit"}></Button> */}
    </Form>
  );
}
