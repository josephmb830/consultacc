// src/components/FilterDropdown.js
import React from 'react';
import { Form } from 'react-bootstrap';

const FilterDropdown = ({ label, options, defaultOption }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" defaultValue={defaultOption}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default FilterDropdown;