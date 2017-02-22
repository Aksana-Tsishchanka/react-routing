export const isLocalStorageAvailable = () => {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

export const hasLocalStorageItem = (itemKey) => {
  if (isLocalStorageAvailable()) {
    return window.localStorage && !!window.localStorage.getItem(itemKey);
  }
  return false;
};

export const setLocalStorageItem = (itemKey, value) => {
  if (isLocalStorageAvailable()) {
    window.localStorage.setItem(itemKey, value);
    return true;
  }
  return false;
};

export const deleteLocalStorageItem = (itemKey) => {
  if (hasLocalStorageItem(itemKey)) {
    window.localStorage.removeItem(itemKey);
    return true;
  }
  return false;
};
