"use client"

import { useState } from "react";
// import Form from "next/form";
import Dropdown from '../components/Utils/Dropdown';

import { options, handleOptionSelect } from "../../data/dropdownOptions"

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async e => {
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form);

    formData.append("service", selectedService);

    try {
      const response = await fetch("https://formspree.io/f/xyyvpdbp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Form successfully submitted. Well get back to you soon");
        form.reset();
        setSelectedService("");
      } else {
        setStatus("Oops! There was a problem submitting your form. :(");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form. :(")
    }
  };

  const handleServiceSelect = (option) => {
    setSelectedService(option);
    handleOptionSelect(option);
  };

  return (
    <>
      <form id="bk-pg-form" className="bk-form-container" onSubmit={handleSubmit} method="POST">
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
          <Dropdown options={options} onSelect={handleServiceSelect} selectedOption={selectedService} />
        </div>

        <div className="bk-field-group-full">
          <textarea cols={1} rows={2} name="details" form="bk-pg-form" className="bk-field bk-text-area" type="text" placeholder="I would like to create..." />
          <label htmlFor="details">Enter any additional details</label>
        </div>
        <input className="btn bk-form-submit-btn" type="submit" />
      </form >
      {status && <p className="bk-form-status" >{status}</p>}
    </>
  );
}
