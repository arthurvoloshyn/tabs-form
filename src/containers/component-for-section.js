import React from 'react';

import Information from '../components/information';
import Contacts from '../components/contacts';
import Photos from '../components/photos';
import Publication from '../components/publication';

const componentForSection = (key, props) => {
  switch (key) {
    case 'Information':
      return <Information {...props} />;
    case 'Contacts':
      return <Contacts {...props} />;
    case 'Photos':
      return <Photos {...props} />;
    case 'Publication':
      return <Publication {...props} />;
    default:
      return null;
  }
};

export default componentForSection;
