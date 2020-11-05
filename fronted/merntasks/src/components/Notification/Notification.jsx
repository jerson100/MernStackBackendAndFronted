import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faSkull,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./notification.scss";

// const Notification = memo(
//   ({
//     show,
//     message,
//     handleClose,
//     automaticClose,
//     time,
//     location = { x: "right", y: "top" },
//   }) => {
//     useEffect(() => {
//       const idTimeOut = setTimeout(() => {
//         handleClose(false);
//       }, time);
//       console.log("montado...");
//       return () => {
//         console.log("desmontaje");
//         clearTimeout(idTimeOut);
//       };
//     }, [automaticClose]);

//     let notificationLocationClassName = "",
//       x1 = 0;

//     if (location.x === "right") {
//       notificationLocationClassName = "notification--axis-x-right";
//       x1 = "100%";
//     } else {
//       notificationLocationClassName = "notification--axis-x-left";
//       x1 = "-100%";
//     }

//     if (location.y === "top") {
//       notificationLocationClassName += " notification--axis-y-top";
//     } else {
//       notificationLocationClassName += " notification--axis-y-bottom";
//     }

//     const variants = {
//       init: {
//         x: x1,
//       },
//       open: {
//         x: 0,
//       },
//     };
//     return (
//       <AnimatePresence>
//         {show && (
//           <motion.div
//             key="notification"
//             className={`notification ${notificationLocationClassName}`}
//             variants={variants}
//             initial="init"
//             animate="open"
//             exit="init"
//           >
//             <div className="notification__content">
//               <p>{message}</p>
//               <span
//                 className="notification__close"
//                 onClick={(e) => handleClose && handleClose(e)}
//               >
//                 x
//               </span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     );
//   }
// );

const getIcon = (type) => {
  if (type === "warning") {
    return { icon: faExclamation, colorIcon: "yellow" };
  } else if (type === "error") {
    return { icon: faSkull, colorIcon: "darkred" };
  }
  return { icon: faCheck, colorIcon: "#00ff2b" };
};

const Notification = ({ id, type, title, description, remove, handleMore }) => {
  const { icon, colorIcon } = getIcon(type);

  const handleClose = () => {
    remove && remove();
  };

  const _handleMore = () => {
    handleMore && handleMore();
  };

  return (
    <motion.div
      className="notification"
      initial={{ x: "100%", opacity: 0, scale: 0.8 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: "100%", opacity: 0, scale: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      positionTransition
    >
      <div className="notification__body">
        <FontAwesomeIcon
          icon={icon}
          size="2x"
          style={{ color: colorIcon, height: "1.3em" }}
          className="notification__icon"
        />
        <div>
          <p className="notification__title">{title}</p>
          <p className="notification__description">{description}</p>
        </div>
      </div>
      <div className="notification__buttons">
        <button className="notification__btn" onClick={handleClose}>
          close
        </button>
        {handleMore && (
          <button className="notification__btn" onClick={_handleMore}>
            more...
          </button>
        )}
      </div>
    </motion.div>
  );
};

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["success", "error", "warning"]),
  handleMore: PropTypes.func,
};

Notification.defaultProps = {
  handleClose: null,
  automaticClose: true,
  time: 5000,
  type: "success",
  description: "",
  title: "Insert title",
};

export default Notification;
