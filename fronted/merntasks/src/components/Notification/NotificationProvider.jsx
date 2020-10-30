import { AnimatePresence } from "framer-motion";
import React, { useCallback, useState } from "react";
import ReactDom from "react-dom";
import { v1 } from "uuid";
import Notification from "./Notification";
import NotificationContainer from "./NotificationContainer";

export const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setnotifications] = useState([]);
  const notify = useCallback(
    ({ type, title, description, handleMore, time = 2000 }) => {
      const id = v1();

      const deleteCurrentNotification = () => {
        setnotifications((prev) => prev.filter((n) => n.id !== id));
      };

      const newNotification = {
        id,
        type,
        title,
        description,
        handleMore: handleMore,
        remove: deleteCurrentNotification,
      };

      setnotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);

      setTimeout(deleteCurrentNotification, time);
    },
    []
  );

  //   console.log(notifications);
  return (
    <>
      <NotificationContext.Provider value={{ notify }}>
        {children}
      </NotificationContext.Provider>
      {ReactDom.createPortal(
        <NotificationContainer>
          <AnimatePresence>
            {notifications.map((n) => (
              <Notification key={n.id} {...n} />
            ))}
          </AnimatePresence>
        </NotificationContainer>,
        document.body
      )}
    </>
  );
};

export default NotificationProvider;
