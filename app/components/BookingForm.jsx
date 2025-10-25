"use client"

import Form from "next/form";
import Dropdown from '../components/Utils/Dropdown';

import { options, handleOptionSelect } from "../../data/dropdownOptions"

export default function BookingForm() {
  const stopRefresh = e => e.preventDefault();

  return (
    <Form id="bk-pg-form" className="bk-form-container" action="/">
      <h2 className="bk-form-title" >Book a Music Service</h2>

      <div className="bk-field-row">
        <div className="bk-field-group">
          <input name="first" className="bk-field" type="text" placeholder="John" />
          <label htmlFor="first">Enter your first name</label>
        </div>
        <div className="bk-field-group">
          <input name="last" className="bk-field" type="text" placeholder="Smith" />
          <label htmlFor="last">Enter your last name</label>
        </div>
      </div>

      <div className="bk-field-row">
        <div className="bk-field-group">
          <input name="email" className="bk-field" type="email" placeholder="123gimmickstreet@cmail.com" />
          <label htmlFor="email">Enter your email</label>
        </div>
        <Dropdown options={options} onSelect={handleOptionSelect} />
      </div>

      <div className="bk-field-group-full">
        <textarea cols={1} rows={2} name="details" form="bk-pg-form" className="bk-field bk-text-area" type="text" placeholder="I would like to create..." />
        <label htmlFor="details">Enter any additional details</label>
      </div>
      <input onClick={stopRefresh} className="btn bk-form-submit-btn" type="submit" />
    </Form >
  );
}
