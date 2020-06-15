import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = ({}) => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    alerts !== null && (
      <div className={`alert alert-${alerts.type}`}>{alerts.msg}</div>
    )
  );
};

export default Alert;
