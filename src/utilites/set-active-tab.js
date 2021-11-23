const firstPage = 1;

const setActiveTab = (
  isRequired,
  isRequiredIndex,
  { tabNumber, activeTab },
) => {
  if (!isRequired && tabNumber === activeTab - 1) {
    return { value: activeTab - 1 };
  }

  if (!isRequired && tabNumber !== firstPage && tabNumber !== isRequiredIndex) {
    return { error: true };
  }

  if (isRequired.length) return { value: tabNumber };

  return null;
};

export default setActiveTab;
