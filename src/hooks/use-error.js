import { useState, useCallback } from 'react';

const useError = (initialError = false) => {
  const [error, setError] = useState(initialError);

  const toggleError = useCallback(() => setError(!error), [error]);

  const onCheckErrorImg = useCallback(
    errors => {
      // maxNumber is a prop from the library 'react-images-uploading';
      if (!errors.maxNumber) return;
      toggleError();
    },
    [toggleError],
  );

  return { error, onCheckErrorImg, toggleError };
};

export default useError;
