import setActiveTab from './set-active-tab';

const changeTab = (activeTab, header, phone, index) => {
  const { value: valueReqHeader, index: idReqHeader } = header;
  const { value: valueReqPhone, index: idReqPhone } = phone;

  const tabNumber = index + 1;
  const baseActiveTabAttrs = { tabNumber, activeTab };

  if (activeTab === idReqHeader && tabNumber === idReqHeader) {
    return { value: idReqHeader };
  }

  if (activeTab === idReqPhone && tabNumber === idReqPhone) {
    return { value: idReqPhone };
  }

  if (
    valueReqHeader &&
    !valueReqPhone &&
    tabNumber !== idReqHeader &&
    tabNumber !== idReqPhone
  ) {
    return { value: idReqPhone, error: true };
  }

  if (activeTab === idReqPhone) {
    return setActiveTab(valueReqPhone, idReqPhone, baseActiveTabAttrs);
  }

  if (activeTab === idReqHeader) {
    return setActiveTab(valueReqHeader, idReqHeader, baseActiveTabAttrs);
  }

  if (activeTab !== idReqPhone && activeTab !== idReqHeader) {
    return { value: tabNumber };
  }

  if (valueReqHeader && valueReqPhone) {
    return { value: idReqHeader };
  }

  return null;
};

export default changeTab;
