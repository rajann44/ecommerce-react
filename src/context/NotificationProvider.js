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

  const closeButton = () => {
    setNotification({
      message: "Dummy message",
      triggerNotification: false,
    });
  };

  return (
    <NotificationContext.Provider
      value={{ notification, triggerNotification, closeButton }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
export const NotificationContext = createContext();
