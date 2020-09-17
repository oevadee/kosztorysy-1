import React from "react";
import "./styles/IconSection.scss";

// Icons
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';

const IconSection = ({ iconSectionTitle }) => {
  return (
    <div className="iconSection">
      <ImportContactsOutlinedIcon className="iconSection__icon" />
      <h2 className="iconSection__header">{iconSectionTitle}</h2>
       <ul className="iconSection__list">
        <li className="iconSection__list__item">
          Wskaźnikowe (wstępne) zastawienia kosztów dla planowanych inwestycji
        </li>
        <li className="iconSection__list__item">
          Przedmiary robót dla planowanych inwestycji czy prac remontowych - na
          podstawie dokumentacji lub z pomiarów na placu budowy
        </li>
        <li className="iconSection__list__item">
          Kosztorysy inwestorskie metodą uproszczoną lub szczegółową na
          podstawie dokumentacji technicznej lub z przedmiarami na placu budowy
        </li>
      </ul>
    </div>
  );
};

export default IconSection;
