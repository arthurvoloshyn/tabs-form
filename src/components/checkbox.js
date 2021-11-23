import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

const Checkbox = ({ checked, checkTitle, setChecked }) => (
  <FormGroup check className="service-mg">
    <Label check className="label-mg">
      <Input
        className="checkbox"
        defaultChecked={checked}
        onChange={setChecked}
        type="checkbox"
      />{' '}
      <span className="label-checkbox">{checkTitle}</span>
    </Label>
  </FormGroup>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  checkTitle: PropTypes.string,
  setChecked: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  checkTitle: 'OFF',
  setChecked: () => {},
};

export default Checkbox;
