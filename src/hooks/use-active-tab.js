import { useState, useCallback } from 'react';

const useActiveTab = (initialActiveTab = 1) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const nextTab = useCallback(() => setActiveTab(activeTab + 1), [activeTab]);
  const prevTab = useCallback(() => setActiveTab(activeTab - 1), [activeTab]);

  const toggleTab = useCallback(tab => activeTab !== tab && setActiveTab(tab), [
    activeTab,
  ]);

  return {
    activeTab,
    nextTab,
    prevTab,
    toggleTab,
  };
};

export default useActiveTab;
