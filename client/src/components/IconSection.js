import React from "react";
import "./styles/IconSection.scss";

// Icons
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

const bookItems = [
  'Wskaźnikowe (wstępne) zastawienia kosztów dla planowanych inwestycji',
  'Przedmiary robót dla planowanych inwestycji czy prac remontowych - na podstawie dokumentacji lub z pomiarów na placu budowy',
  'Kosztorysy inwestorskie metodą uproszczoną lub szczegółową na podstawie dokumentacji technicznej lub z przedmiarami na placu budowy'
];

const buildItems = [
  'Budownictwo ogólne, mieszkaniowe, przemysłowe, komunalne, rolnicze',
  'Obiekty drogowe, Obiekty sportowe, Konstrukcje stalowe',
  'Instalacje wewnętrzne wodociągowe, kanalizacyjne, gazowe i centralnego ogrzewania',
  'Instalacje technologiczne, automatyka ze szczegółowymi pomiarami na placu budowy'
]

const IconSection = ({ iconSectionTitle, iconType }) => {
  return (
    <div className="iconSection">
      {iconType === 'book' ? <ImportContactsOutlinedIcon className="iconSection__icon" /> : <BuildOutlinedIcon className="iconSection__icon" />}
      <h2 className="iconSection__header">{iconSectionTitle}</h2>
       <ul className="iconSection__list">
        {iconType === 'book' ? bookItems.map(book => (
          <li key={book} className="iconSection__list__item">
            {book}
          </li>
        )) : buildItems.map(build => (
          <li key={build} className="iconSection__list__item">
            {build}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconSection;
