import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryBtn, SecondaryBtn } from './buttons';

const NavBtn = ({ onNext, onPrev }) => (
  <>
    <SecondaryBtn
      className="half-of-width-btn left-btn label-mg"
      onClick={onPrev}
    >
      Prev
    </SecondaryBtn>
    <PrimaryBtn className="half-of-width-btn label-mg" onClick={onNext}>
      Next
    </PrimaryBtn>
  </>
);

NavBtn.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

NavBtn.defaultProps = {
  onNext: () => {},
  onPrev: () => {},
};

export default NavBtn;
