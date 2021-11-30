import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

import { initialHeader } from '../constants/initial-state';

import { PrimaryBtn } from './buttons';
import Checkbox from './checkbox';

const Information = ({
  checked,
  checkTitle,
  onChangeDescript,
  onChangeHeader,
  onCheck,
  onCheckReqField,
  header: { value },
}) => {
  const onClickNextTab = () => onCheckReqField(value);

  return (
    <>
      <FormGroup>
        <Label className="label" for="example-header">
          Header*
        </Label>
        <Input
          id="example-header"
          name="header"
          onChange={onChangeHeader}
          placeholder="Your header"
          required
          type="text"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label label-mg" for="example-text">
          Description
        </Label>
        <Input
          id="example-text"
          name="text"
          onChange={onChangeDescript}
          placeholder="Your description"
          type="textarea"
        />
      </FormGroup>
      <Checkbox
        checked={checked}
        checkTitle={checkTitle}
        setChecked={onCheck}
      />
      <PrimaryBtn className="full-width-btn label-mg" onClick={onClickNextTab}>
        Next
      </PrimaryBtn>
    </>
  );
};

Information.propTypes = {
  checked: PropTypes.bool,
  checkTitle: PropTypes.string,
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  onChangeDescript: PropTypes.func,
  onChangeHeader: PropTypes.func,
  onCheck: PropTypes.func,
  onCheckReqField: PropTypes.func,
};

Information.defaultProps = {
  checked: false,
  checkTitle: 'OFF',
  header: initialHeader,
  onChangeDescript: () => {},
  onChangeHeader: () => {},
  onCheck: () => {},
  onCheckReqField: () => {},
};

export default Information;
