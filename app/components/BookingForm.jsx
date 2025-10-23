"use client"

import Form from "next/form";
import Button from "./Utils/Button";
import Dropdown from '../components/Utils/Dropdown';

import { options, handleOptionSelect } from "../../data/dropdownOptions"

export default function BookingForm() {

  return (
    <Form className="bk-form-container" action="/">
      <input name="name" type="text" />
      <input type="text" />
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <input type="text" />
      <Button msg={"Submit"}></Button>
    </Form>
  );
}
