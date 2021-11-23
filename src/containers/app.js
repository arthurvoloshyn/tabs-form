import React, { useCallback, useMemo } from 'react';
import { TabContent } from 'reactstrap';

import tabs from '../constants/tabs-for-nav';
import { initialHeader, initialPhone } from '../constants/initial-state';

import getWarning from '../utilites/get-warning';
import changeTab from '../utilites/change-tab';

import useActiveTab from '../hooks/use-active-tab';
import useTextField from '../hooks/use-text-field';
import useTextReqField from '../hooks/use-text-req-field';
import useChecked from '../hooks/use-checked';
import useError from '../hooks/use-error';
import useImages from '../hooks/use-images';
import usePaidService from '../hooks/use-paid-service';

import Navigation from '../components/nav-tabs';
import Sections from './sections';

import '../styles/app.css';

const App = () => {
  const { activeTab, nextTab, prevTab, toggleTab } = useActiveTab();
  const [header, onChangeHeader] = useTextReqField(initialHeader);
  const [phone, onChangePhone] = useTextReqField(initialPhone);
  const [descript, onChangeDescript] = useTextField();
  const [email, onChangeEmail] = useTextField();
  const { checked, onCheck, checkTitle } = useChecked();
  const { error, onCheckErrorImg, toggleError } = useError();
  const [images, onChangeImg] = useImages();
  const { checkPaidService, paidService, onPaidService } = usePaidService();

  const maxCountOfImages = 5;

  const onCheckReqField = useCallback(
    param => {
      if (!param) toggleError();
      if (param.length) nextTab();
      return null;
    },
    [nextTab, toggleError],
  );

  const warning = useMemo(() => getWarning(header.value, phone.value), [
    header,
    phone,
  ]);

  const onChangeActiveTab = useCallback(
    index => {
      const { value, error } = changeTab(activeTab, header, phone, index);
      if (error) toggleError();
      if (value) toggleTab(value);
    },
    [activeTab, header, phone, toggleError, toggleTab],
  );

  const checkedProps = useMemo(
    () => ({ checked, checkTitle, onCheck, onCheckReqField }),
    [checked, checkTitle, onCheck, onCheckReqField],
  );

  const informationProps = useMemo(
    () => ({ ...checkedProps, onChangeDescript, onChangeHeader, header }),
    [checkedProps, onChangeDescript, onChangeHeader, header],
  );

  const contactsProps = useMemo(
    () => ({ onChangeEmail, onChangePhone, onCheckReqField, phone, prevTab }),
    [onChangeEmail, onChangePhone, onCheckReqField, phone, prevTab],
  );

  const imagesProps = useMemo(
    () => ({ onChangeImg, onCheckErrorImg, images, maxCountOfImages }),
    [onChangeImg, onCheckErrorImg, images, maxCountOfImages],
  );

  const photosProps = useMemo(
    () => ({ ...imagesProps, error, toggleError, toggleTab, warning }),
    [imagesProps, error, toggleError, toggleTab, warning],
  );

  const outputProps = useMemo(
    () => ({ checkTitle, descript, email, header, images, paidService, phone }),
    [checkTitle, descript, email, header, images, paidService, phone],
  );

  const publicationProps = useMemo(
    () => ({ ...outputProps, checkPaidService, onPaidService, toggleTab }),
    [outputProps, checkPaidService, onPaidService, toggleTab],
  );

  return (
    <div className="wrapper">
      <Navigation
        activeTab={activeTab}
        onChangeActiveTab={onChangeActiveTab}
        tabs={tabs}
      />
      <TabContent activeTab={activeTab} className="tab-card">
        <Sections
          contactsProps={contactsProps}
          informationProps={informationProps}
          photosProps={photosProps}
          publicationProps={publicationProps}
        />
      </TabContent>
    </div>
  );
};

export default App;
