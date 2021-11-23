import { useState, useCallback } from 'react';

const useTextReqField = initialTextReqField => {
  const [textReqField, setTextReqField] = useState(initialTextReqField);

  const onChangeTextReqField = useCallback(e => {
    e.persist();
    setTextReqField(prevState => ({ ...prevState, value: e.target.value }));
  }, []);

  return [textReqField, onChangeTextReqField];
};

export default useTextReqField;
