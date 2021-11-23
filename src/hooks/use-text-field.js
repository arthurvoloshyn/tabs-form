import { useState, useCallback } from 'react';

const useTextField = (initialTextField = '') => {
  const [textField, setTextField] = useState(initialTextField);

  const onChangeTextField = useCallback(e => setTextField(e.target.value), []);

  return [textField, onChangeTextField];
};

export default useTextField;
