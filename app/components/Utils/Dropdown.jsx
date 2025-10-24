"use client"

import { useState } from "react";
import Button from "./Button";

export default function Dropdown({ options, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleToggle = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen);
    }

    const handleOptionClicked = option => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    }

    return (
        <div className="dropdown-container">
            <Button className={`dropdown-btn`} msg={selectedOption ? selectedOption.label : "Select an option"} onClick={handleToggle} >
            </Button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map(option => (
                        <li key={option.value} onClick={() => handleOptionClicked(option)} className="dropdown-item" >{option.label}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}