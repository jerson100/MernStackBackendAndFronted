import { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";

export default () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "No puede acceder al contexto de la notificación, para ello debe estar contendio en el componente NotificationProvider"
    );
  }
  return { notify: context.notify };
};
