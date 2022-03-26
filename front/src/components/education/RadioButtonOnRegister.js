import React from "react";
import { Form } from "react-bootstrap";

function RadioButtonOnRegister({ position, setPosition }) {
  return (
    <Form.Group className="mb-3 mt-3">
      <Form.Check
        inline
        label="재학중"
        name="position"
        type="radio"
        id="inline-radio-1"
        value="재학중"
        defaultChecked={position === "재학중"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
      <Form.Check
        inline
        label="학사졸업"
        name="position"
        type="radio"
        id="inline-radio-2"
        value="학사졸업"
        defaultChecked={position === "학사졸업"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />

      <Form.Check
        inline
        label="석사졸업"
        name="position"
        type="radio"
        id="inline-radio-3"
        value="석사졸업"
        defaultChecked={position === "석사졸업"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />

      <Form.Check
        inline
        label="박사졸업"
        name="position"
        type="radio"
        id="inline-radio-3"
        value="박사졸업"
        defaultChecked={position === "박사졸업"}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
    </Form.Group>
  );
}

export default RadioButtonOnRegister;
