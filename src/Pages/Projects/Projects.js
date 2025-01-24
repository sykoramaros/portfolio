import React from "react"
import { useState } from "react"
import { Trans } from "@lingui/react"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

const Projects = () => {
  const [isFrontendListVisible, setIsFrontendListVisible] = useState(true)

  const cardsDataFrontendList = [
    {
      webLink: "https://sykoramaros.github.io/wildlife-reserve-react/#/login",
      image: "./img/projects/projects/frontend/wildlife_reserve_react.jpg",
      title: "Wildlife Reserve",
      text: "Frontend React web napojeny na backend C# web api a nastaveno předávání Jwt tokenů do localStorage a zobrazování obsahu podle rolí.",
      technologies: "React, Bootstrap",
      githubLink: "https://github.com/sykoramaros/wildlife-reserve-react",
    },
    {
      webLink: "http://booklist.unaux.com",
      image: "./img/projects/projects/frontend/books.jpeg",
      title: "Knihy",
      text: "Evidence knih s použítím PHP a MySQL.",
      technologies: "Bootstrap, PHP, MySQL",
      githubLink: "https://github.com/sykoramaros/books-php",
    },
    {
      webLink: "http://carsdb.unaux.com",
      image: "./img/projects/projects/frontend/car_garage.jpeg",
      title: "Garáž",
      text: "Seznam aut spravovaný pomocí PHP napojeného na MySQL.",
      technologies: "Bootstrap, PHP, MySQL",
      githubLink: "https://github.com/sykoramaros/cars-web-php",
    },
    {
      webLink: "http://staff.unaux.com",
      image: "./img/projects/projects/frontend/it_manager.jpeg",
      title: "IT Manažer",
      text: "Kontrola kapacity IT pracovníků (uložených lokálně) a nových projektů.",
      technologies: "Bootstrap, React",
      githubLink: "https://github.com/sykoramaros/staff-form-web",
    },
    {
      webLink: "http://bookflights.unaux.com",
      image: "./img/projects/projects/frontend/fly_tickets.jpeg",
      title: "Letenky",
      text: "Formulář pro objednání letenek.",
      technologies: "Bootstrap, JavaScript",
      githubLink: "https://github.com/sykoramaros/book-flights-web",
    },
    {
      webLink: "http://beekeeper.unaux.com",
      image: "./img/projects/projects/frontend/beekeeper.jpeg",
      title: "Včelařství",
      text: "Informační statická webová stránka včelaře.",
      technologies: "Bootstrap",
      githubLink: "https://github.com/sykoramaros/beekeeper-web",
    },
    {
      webLink: "http://saihanhotool.unaux.com",
      image: "./img/projects/projects/frontend/saihan_hotool.jpeg",
      title: "Сайханы хөтөл",
      text: "Statická webová informáční stránka o krásném říčním údolí v mongolském Сайхананы хөтөл",
      technologies: "Bootstrap",
      githubLink: "https://github.com/sykoramaros/saihan-hotool-web",
    },
  ]
  // image: obrazky jen ve formatu 4:3 pri ipad air rozliseni 2360x1640 pixelu (ne jine 16:9 nevypada dobre)
  const cardsDataBackendList = [
    {
      webLink: "https://wildlife-reserve.runasp.net/swagger/index.html",
      image:
        "./img/projects/projects/backend/wildlife_reserve_swagger_csharp.jpg",
      title: "Wildlife Reserve",
      text: "Backendová C# WEB API využívající MariaDB databázi a je napojená na externí iNaturalist WEB API. Endpointy propojené s React frontendem (viz. Frontend portfolio)",
      technologies: "C# ASP.NET Core, iNaturalist API, MariaDB, Swagger UI",
      githubLink:
        "https://github.com/sykoramaros/wildlife-reserve-webapi-csharp",
    },
    {
      webLink: "http://weather.unaux.com/",
      image: "./img/projects/projects/backend/weather_react_java.jpeg",
      title: "Počasí🌤️",
      text: "Webová aplikace zobrazující počasí různých částí světa. Napojení v backendu na weatherapi.com.",
      technologies: "Bootstrap, React, Java Spring, weatherapi API, Swagger UI",
      githubLink: "https://github.com/sykoramaros/weatherapp-react",
    },
    {
      webLink: "https://school-webapp-marosh.runasp.net",
      image: "./img/projects/projects/backend/school_razor_csharp.jpeg",
      title: "Škola",
      text: "Webová aplikace pro evidenci a hodnocení žáků podle předmětů.",
      technologies: "Bootstrap, Razor, ASP.NET Core (Identity)",
      githubLink: "https://github.com/sykoramaros/magistri-razor-csharp",
    },
    {
      webLink: "http://schoolapp.unaux.com",
      image: "./img/projects/projects/backend/school_react_java.jpeg",
      title: "Škola",
      text: "Webová aplikace pro evidenci a hodnocení žáků podle předmětů.",
      technologies: "Bootstrap, React, Java Spring",
      githubLink: "https://github.com/sykoramaros/magistri-react",
    },
    {
      webLink:
        "https://magistri-spring.azurewebsites.net/swagger-ui/index.html",
      image: "./img/projects/projects/backend/school_swagger_ui_java.jpeg",
      title: "Škola (Swagger_UI)",
      text: "Endpointy backendove Java aplikace Škola zobrazené formou Swagger_UI.",
      technologies: "Swagger_UI, Java Spring",
      githubLink: "https://github.com/sykoramaros/magistri-java",
    },
    {
      webLink:
        "https://waeatherapp-java-spring.up.railway.app/swagger-ui/index.html",
      image: "./img/projects/projects/backend/weather_swagger_ui_java.jpeg",
      title: "Počasí (Swagger_UI)",
      text: "Endpointy počasí různých částí světa vyvedeny do Swagger_UI. Napojení v backendu na weatherapi.com",
      technologies: "Swagger_UI, Java Spring",
      githubLink: "https://github.com/sykoramaros/weatherapp-java-spring",
    },
  ]

  return (
    <div className="container">
      <h1 className="display-3 mt-5 text-center text-primary text-shadow">
        <Trans id="projects.h1" />
      </h1>
      <div className="row align-items-center justify-content-center mt-4">
        <span
          className={
            isFrontendListVisible
              ? "fs-2 fs-md-1 col-auto text-center fw-bold"
              : "fs-2 fs-md-1 col-auto text-center"
          }
        >
          Frontend
        </span>
        <img
          className="switch-button"
          src={
            isFrontendListVisible
              ? "./img/projects/decorations/switch_off.png"
              : "./img/projects/decorations/switch_on.png"
          }
          onClick={() => setIsFrontendListVisible(!isFrontendListVisible)}
          alt={"switch"}
          style={{ cursor: "pointer" }}
        />
        <span
          className={
            isFrontendListVisible
              ? "fs-2 fs-sm-1 col-auto text-center"
              : "fs-2 fs-sm-1 col-auto text-center fw-bold"
          }
        >
          Backend
        </span>
      </div>
      <hr className="w-75 mx-auto mt-4 border-muted" />
      <br />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {(isFrontendListVisible
          ? cardsDataFrontendList
          : cardsDataBackendList
        ).map((card, index) => (
          <ProjectCard
            key={index}
            webLink={card.webLink}
            image={card.image}
            title={card.title}
            text={card.text}
            technologies={card.technologies}
            githubLink={card.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
