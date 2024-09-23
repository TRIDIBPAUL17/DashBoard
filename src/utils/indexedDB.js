// src/utils/indexedDB.js
const dbName = 'adminDashboardDB';
const storeName = 'items';

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

export const addItem = async (item) => {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  const request = store.add(item);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(item);
    request.onerror = (event) => reject(event.target.error);
  });
};

export const getItems = async () => {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readonly');
  const store = transaction.objectStore(storeName);
  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

export const updateItem = async (item) => {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  const request = store.put(item);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(item);
    request.onerror = (event) => reject(event.target.error);
  });
};

export const deleteItem = async (id) => {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  const request = store.delete(id);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(id);
    request.onerror = (event) => reject(event.target.error);
  });
};
