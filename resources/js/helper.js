export const setLocalStorageItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageItem = key => {
    const data = localStorage.getItem(key) || null;
    return JSON.parse(data);
};
