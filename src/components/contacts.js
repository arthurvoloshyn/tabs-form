import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

import { initialPhone } from '../constants/initial-state';

import NavBtn from './nav-btn';

const Contacts = ({
  onChangeEmail,
  onChangePhone,
  onCheckReqField,
  phone: { value },
  prevTab,
}) => {
  const onClickNextTab = () => onCheckReqField(value);

  return (
    <>
      <FormGroup>
        <Label className="label" for="example-phone">
          Phone number*
        </Label>
        <Input
          id="example-phone"
          name="phone"
          onChange={onChangePhone}
          placeholder="Your phone number"
          required
          type="text"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label label-mg" for="example-email">
          Email
        </Label>
        <Input
          className="btn-mg"
          id="example-email"
          name="email"
          onChange={onChangeEmail}
          placeholder="Your email"
          type="text"
        />
      </FormGroup>
      <NavBtn onNext={onClickNextTab} onPrev={prevTab} />
    </>
  );
};

Contacts.propTypes = {
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  prevTab: PropTypes.func,
  onCheckReqField: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
};

Contacts.defaultProps = {
  phone: initialPhone,
  prevTab: () => {},
  onCheckReqField: () => {},
  onChangeEmail: () => {},
  onChangePhone: () => {},
};

export default Contacts;
