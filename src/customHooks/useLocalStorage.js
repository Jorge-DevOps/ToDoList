import React from "react";

// Custom Hook that save array in Local Storage
function useLocalStorage(itemName, initialValue) {
  // Guardamos el estado del array en una variable, con useState
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Consultamos si existe informacion para ese item
        const localStorageItem = localStorage.getItem(itemName);
        // Variable para pasear de texto (Local Storage) a JSON
        let parsedItem;
        // Validamos la variable localStorageItem es (null, undefined, "")
        if (!localStorageItem) {
          // si es asi entonces creamos un objeto LOCAL STORAGE (data, tipo de dato)
          localStorage.setItem(itemName, initialValue);
          // Asignamos array vacio
          parsedItem = initialValue;
        } else {
          // Si no es asi convertimos el texto a JSON (Array)
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
