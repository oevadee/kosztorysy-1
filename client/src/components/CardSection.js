import React, { useState } from "react";
import "./styles/CardSection.scss";

// Components
import Button from "../components/Button";

const cards = {
  card1: {
    header:
      "Dostarczone kosztorysantowi dokumenty potrzebne do sporządzenia kosztorysu:",
    listText: [
      "Przedmiar robót (wersja papierowa, wersja elektroniczna z programu kosztorysowego)",
      "Dokumentacja projektowa",
      "Obmiar lub przedmiar opracowuje kosztorysant z pomiarów na placu budowy",
      "Jeśli nie ma żadnych dokumentów - kosztorysant ustala zakres prac w oparciu o ustne wyjaśnienia zlecającego i dobiera odpowiednie pozycje kosztorysu",
    ],
  },
  card2: {
    header:
      "Jeśli nie ma żadnych dokumentów - kosztorysant ustala zakres prac w oparciu o ustne wyjaśnienia zlecającego i dobiera odpowiednie pozycje kosztorysu",
    listText: [
      "Przedmiar robót (wersja papierowa, wersja elektroniczna z programu kosztorysowego)",
      "Dokumentacja projektowa",
      "Obmiar lub przedmiar opracowuje kosztorysant z pomiarów na placu budowy",
      "Kosztorysy powykonawcze wykonujemy na podstawie dostarczonej dokumentacji, z możliwością jej weryfikacji w terenie.",
    ],
  },
  card3: {
    header:
      "Jeśli nie ma żadnych dokumentów - kosztorysant ustala zakres prac w oparciu o ustne wyjaśnienia zlecającego i dobiera odpowiednie pozycje kosztorysu",
    listText: [
      "Przedmiar robót (wersja papierowa, wersja elektroniczna z programu kosztorysowego)",
      "Obmiar lub przedmiar opracowuje kosztorysant z pomiarów na placu budowy",
      "Kosztorysy powykonawcze wykonujemy na podstawie dostarczonej dokumentacji, z możliwością jej weryfikacji w terenie.",
    ],
  },
};

const cardsArr = [cards.card1, cards.card2, cards.card3];

const CardSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(1);

  return (
    <div className="cardSection">
      <div className="cardSection__buttons">
        <Button
          type={currentCardIndex === 0 ? "secondary-full" : "secondary"}
          text="SKALA INWESTYCJI"
          onClick={() => {
            setCurrentCardIndex(0);
          }}
        />
        <Button
          type={currentCardIndex === 1 ? "secondary-full" : "secondary"}
          text="DOSTARCZONE DOKUMENTY"
          onClick={() => setCurrentCardIndex(1)}
        />
        <Button
          type={currentCardIndex === 2 ? "secondary-full" : "secondary"}
          text="TERMIN WYKONANIA"
          onClick={() => setCurrentCardIndex(2)}
        />
      </div>
      <div className="cardSection__card">
        <h2 className="cardSection__card__header">
          {cardsArr[currentCardIndex].header}
        </h2>
        <ul className="cardSection__card__list">
          {cardsArr[currentCardIndex].listText.map((item) => (
            <li className="cardSection__card__listItem" key={item}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardSection;
