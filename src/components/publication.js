import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';

import { initialHeader, initialPhone } from '../constants/initial-state';

import { SecondaryBtn } from './buttons';
import Dialog from './dialog';

const Publication = ({
  checkPaidService,
  checkTitle,
  descript,
  email,
  onPaidService,
  header,
  images,
  paidService,
  phone,
  toggleTab,
}) => {
  const onClickPrevTab = () => toggleTab(3);

  return (
    <>
      <ul className="clear-list-style">
        {paidService.map(({ number, checked }) => (
          <li key={`${number}_checkbox`}>
            <Label check className="service-mg">
              <Input
                className="checkbox"
                defaultChecked={checked}
                name={number}
                onChange={onPaidService}
                type="checkbox"
              />{' '}
              <span className="label-checkbox no-text-transform">
                Paid service {number}
              </span>
            </Label>
          </li>
        ))}
      </ul>
      <SecondaryBtn
        className="half-of-width-btn service-btn left-btn label-mg"
        onClick={onClickPrevTab}
      >
        Prev
      </SecondaryBtn>
      <Dialog
        checkPaidService={checkPaidService}
        checkTitle={checkTitle}
        descript={descript}
        email={email}
        header={header.value}
        images={images}
        phone={phone.value}
      />
    </>
  );
};

Publication.propTypes = {
  checkTitle: PropTypes.string,
  descript: PropTypes.string,
  email: PropTypes.string,
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  onPaidService: PropTypes.func,
  toggleTab: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data_url: PropTypes.string,
    }),
  ),
  paidService: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  checkPaidService: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};

Publication.defaultProps = {
  checkTitle: 'OFF',
  descript: '',
  email: '',
  header: initialHeader,
  phone: initialPhone,
  onPaidService: () => {},
  toggleTab: () => {},
  images: [],
  paidService: [],
  checkPaidService: [],
};

export default Publication;
