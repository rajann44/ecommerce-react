import React, { createContext, useState } from "react";

const NotificationProvider = (props) => {
  const [notification, setNotification] = useState({
    message: "Dummy message",
    triggerNotification: false,
  });

  const triggerNotification = (message) => {
    setNotification({
      message: message,
      triggerNotification: true,
    });
    setTimeout(function () {
      setNotification({
        message: "Dummy message",
        triggerNotification: false,
      });
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notification, triggerNotification }}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
export const NotificationContext = createContext();
