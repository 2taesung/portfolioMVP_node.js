import React from "react";
import { Form } from "react-bootstrap";

function RadioButtonOnRegister({ position, setPosition }) {
  return (
    <Form.Group className="mb-3">
      <Form.Check
        inline
        label="학사중"
        name="position"
        type="radio"
        id="inline-radio-1"
        value="학사중"
        defaultChecked={position === "학사중"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
      <Form.Check
        inline
        label="석사중"
        name="position"
        type="radio"
        id="inline-radio-2"
        value="석사중"
        defaultChecked={position === "석사중"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />

      <Form.Check
        inline
        label="박사중"
        name="position"
        type="radio"
        id="inline-radio-3"
        value="박사중"
        defaultChecked={position === "박사중"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
    </Form.Group>
  );
}

export default RadioButtonOnRegister;
