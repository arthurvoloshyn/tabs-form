import { useState, useCallback } from 'react';

const useChecked = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked);

  const onCheck = useCallback(() => setChecked(!checked), [checked]);

  const checkTitle = checked ? 'ON' : 'OFF';

  return { checked, onCheck, checkTitle };
};

export default useChecked;
