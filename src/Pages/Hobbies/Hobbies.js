import React from "react"
import { useState } from "react"
import HobbyCard from "../../Components/HobbyCard/HobbyCard"

const Hobbies = () => {
  const cardsDataHobbiesList = [
    {
      rotation: -3,
      image: "./img/hobbies/friends/friends_circle.jpeg",
      title: "Kamarádi",
      text: "",
      weblink: "",
    },
    {
      rotation: 2,
      image: "./img/hobbies/animals/horse_riding.jpg",
      title: "Zvířata",
      text: "",
      weblink: "https://www.google.com",
    },
    {
      rotation: -3,
      image: "./img/hobbies/sign_language/terelj_sign_language.jpg",
      title: "Znakový jazyk",
      text: "",
      weblink: "",
    },
    {
      rotation: 3,
      image: "./img/hobbies/music/happy_mandolin.png",
      title: "Hudba",
      text: "",
      weblink: "https://www.google.com",
    },
    {
      rotation: -2,
      image: "../img/hobbies/snowboard/snowboarding.jpg",
      title: "Snowboard",
      text: "",
      weblink: "https://www.google.com",
    },
    {
      rotation: 2,
      image: "./img/computer.png",
      title: "Zkouska",
      text: "Jen tak info",
      weblink: "https://www.google.com",
    },
  ]

  return (
    <div className="container">
      <h1 className="display-3 mt-5 text-center text-primary text-shadow">
        Koníčky
      </h1>
      <br />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-1">
        {cardsDataHobbiesList.map((card, index) => (
          <HobbyCard
            key={index}
            rotation={card.rotation}
            image={card.image}
            title={card.title}
            text={card.text}
            weblink={card.weblink}
          />
        ))}
      </div>
    </div>
  )
}

export default Hobbies
