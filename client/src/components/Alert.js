import React from "react";
import './styles/Alert.scss';

// Icons
import WarningIcon from "@material-ui/icons/WarningOutlined";

const Alert = ({ text = 'Uwaga twój plik jest za duży' }) => {
  return (
    <div className="alert">
      <WarningIcon />
      <h3>{text}</h3>
    </div>
  );
};

export default Alert;
