import { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";

export default () => {
  const { notify } = useContext(NotificationContext);
  return { notify };
};
