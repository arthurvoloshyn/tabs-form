import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';

import { SecondaryBtn } from './buttons';

const Error = ({ error, toggleError, warning }) => (
  <Modal className="error-dialog" isOpen={error} toggle={toggleError}>
    <div className="card-pd">
      <ModalBody className="display-flex">
        <span className="warning-text">{warning}</span>
        <SecondaryBtn className="error-btn" onClick={toggleError}>
          Okay
        </SecondaryBtn>
      </ModalBody>
    </div>
  </Modal>
);

Error.propTypes = {
  error: PropTypes.bool,
  toggleError: PropTypes.func,
  warning: PropTypes.string,
};

Error.defaultProps = {
  error: false,
  toggleError: () => {},
  warning: '',
};

export default Error;
