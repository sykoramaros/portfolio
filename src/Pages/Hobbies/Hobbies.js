import React from "react"
import HobbyCard from "../../Components/HobbyCard/HobbyCard"

const Hobbies = () => {
  const cardsDataHobbiesList = [
    {
      rotation: -3,
      image: "./img/hobbies/friends/friends_circle.jpeg",
      title: "Kamarádi",
      backText: "Ve svém volnu rád trávím čas s neslyšícími kamarády",
    },
    {
      rotation: 2,
      image: "./img/hobbies/animals/horse_riding.jpg",
      title: "Zvířata",
      backText: "Rád jezdím na koních a celkově si zvířecí společnost užívám🐾",
    },
    {
      rotation: -3,
      image: "./img/hobbies/sign_language/terelj_sign_language.jpg",
      title: "Cizí jazyk",
      backText: "Učím se rád novým jazykům (i těm neprogramovým😊)",
    },
    {
      rotation: 3,
      image: "./img/hobbies/music/happy_mandolin.png",
      title: "Hudba",
      backText: "Rád poslouchám hudbu a hraju na mandolínu",
    },
    {
      rotation: -2,
      image: "../img/hobbies/snowboard/snowboarding.jpg",
      title: "Snowboard",
      backText: "Když se mám už hýbat, tak radši z kopce☺️",
    },
    // {
    //   rotation: 2,
    //   image: "./img/computer.png",
    //   title: "Zkouska",
    //   backText: "Zkusebni text",
    // },
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
            backText={card.backText}
          />
        ))}
      </div>
    </div>
  )
}

export default Hobbies
