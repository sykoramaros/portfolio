import HobbyCard from "../../Components/HobbyCard/HobbyCard"

import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import { useBaseUrl } from "../../context/BaseUrlProvider"
import { useEffect, useState, useRef } from "react"

const HOBBIES = gql`
  query GetHobbies {
    hobbies {
      documentId
      rotation
      title
      backText
      link
      textLink
      image {
        url
        alternativeText
      }
    }
  }
`

const Test = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()
  const [imgSrc, setImgSrc] = useState("")
  const imageRef = useRef(null)

  const { loading, error, data } = useQuery(HOBBIES, {
    variables: {
      documentId,
    },
  })

  useEffect(() => {
    if (data && data.hobbies && data.hobbies[0] && data.hobbies[0].image) {
      console.log("BASE_URL:", BASE_URL)
      console.log("Image path:", data.hobbies[0].image.url)

      // Zkusíme analyzovat a opravit URL
      let fullUrl = BASE_URL + data.hobbies[0].image.url
      console.log("Původní fullUrl:", fullUrl)

      try {
        // Zkusíme vytvořit URL objekt pro validaci
        const urlObj = new URL(fullUrl)
        console.log("Parsovaná URL:", urlObj.toString())

        // Pro lokální IP adresy bez DNS může být problém s resolverem
        // Zkontrolujeme, zda je host IP adresa
        const hostMatch = urlObj.hostname.match(/^(\d{1,3}\.){3}\d{1,3}$/)
        if (hostMatch) {
          console.log("Host je IP adresa - v pořádku")
        } else {
          console.log("Host není IP adresa - může být problém s DNS resolverem")
        }

        fullUrl = urlObj.toString()
      } catch (error) {
        console.error("Chyba při parsování URL:", error)

        // Zkusíme detekovat, zda URL začíná http:// nebo https://
        if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
          console.log("URL nemá specifikovaný protokol, přidáváme http://")
          fullUrl = "http://" + fullUrl
        }
      }

      console.log("Upravená fullUrl:", fullUrl)
      setImgSrc(fullUrl)
    }
  }, [data, BASE_URL])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  // Metoda pro vytvoření správné URL
  const createImageUrl = (baseUrl, imageUrl) => {
    if (!baseUrl || !imageUrl) return ""

    try {
      // Zkusíme vytvořit kompletní URL pro validaci
      let fullUrl = baseUrl + imageUrl

      // Kontrola, zda URL má protokol
      if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
        fullUrl = "http://" + fullUrl
      }

      // Validujeme URL pomocí URL objektu
      const urlObj = new URL(fullUrl)
      return urlObj.toString()
    } catch (error) {
      console.error("Chyba při vytváření URL:", error)
      // V případě chyby vrátíme původní konkatenaci
      return baseUrl + imageUrl
    }
  }

  // Funkce pro úpravu URL - nahrazuje relativní cesty absolutními
  const fixUrl = (url) => {
    if (!url) return ""

    try {
      // Pokud URL neobsahuje protokol, přidáme jej
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        // Zkusíme zjistit, zda URL začíná lomítkem a obsahuje doménu
        const domainMatch = url.match(/^\/\/([^\/]+)/)
        if (domainMatch) {
          return "http:" + url
        } else {
          // Jinak předpokládáme, že jde o relativní cestu
          const origin = window.location.origin
          return origin + (url.startsWith("/") ? "" : "/") + url
        }
      }
      return url
    } catch (error) {
      console.error("Chyba při úpravě URL:", error)
      return url
    }
  }

  const openImage = () => {
    if (imgSrc) {
      window.open(imgSrc, "_blank")
    }
  }

  return (
    <>
      <h2>Diagnostika problému s obrázkem</h2>
      {data && data.hobbies && data.hobbies[0] && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h3>Informace o URL</h3>
          <p>
            <strong>BASE_URL:</strong> {BASE_URL}
          </p>
          <p>
            <strong>Cesta k obrázku:</strong> {data.hobbies[0].image.url}
          </p>
          <p>
            <strong>Původní URL (fungující v odkazu):</strong>{" "}
            <a
              href={BASE_URL + data.hobbies[0].image.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {BASE_URL + data.hobbies[0].image.url}
            </a>
          </p>
          <p>
            <strong>Upravená URL:</strong>{" "}
            <a href={imgSrc} target="_blank" rel="noopener noreferrer">
              {imgSrc}
            </a>
          </p>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 1: Původní URL (může mít problém)</h3>
            <img
              src={BASE_URL + data.hobbies[0].image.url}
              alt={data.hobbies[0].image.alternativeText || "Obrázek"}
              style={{
                width: "300px",
                height: "auto",
                border: "1px solid red",
              }}
              onError={(e) => {
                console.error("Chyba při načítání původního obrázku:", e)
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Chyba+načítání+obrázku"
              }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 2: Upravená URL (s opravou DNS)</h3>
            <img
              src={imgSrc}
              alt={data.hobbies[0].image.alternativeText || "Obrázek"}
              style={{
                width: "300px",
                height: "auto",
                border: "1px solid green",
              }}
              onError={(e) => {
                console.error("Chyba při načítání upraveného obrázku:", e)
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Chyba+načítání+obrázku"
              }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 3: Relativní cesta (bez BASE_URL)</h3>
            <img
              src={data.hobbies[0].image.url}
              alt={data.hobbies[0].image.alternativeText || "Obrázek"}
              style={{
                width: "300px",
                height: "auto",
                border: "1px solid blue",
              }}
              onError={(e) => {
                console.error("Chyba při načítání relativní cesty:", e)
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Chyba+načítání+obrázku"
              }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 4: Absolutní URL pomocí window.location.origin</h3>
            <img
              src={`${window.location.origin}${data.hobbies[0].image.url}`}
              alt={data.hobbies[0].image.alternativeText || "Obrázek"}
              style={{
                width: "300px",
                height: "auto",
                border: "1px solid purple",
              }}
              onError={(e) => {
                console.error("Chyba při načítání absolutní cesty:", e)
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Chyba+načítání+obrázku"
              }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 5: Fixovaná URL</h3>
            <img
              src={fixUrl(data.hobbies[0].image.url)}
              alt={data.hobbies[0].image.alternativeText || "Obrázek"}
              style={{
                width: "300px",
                height: "auto",
                border: "1px solid orange",
              }}
              onError={(e) => {
                console.error("Chyba při načítání fixované URL:", e)
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Chyba+načítání+obrázku"
              }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 6: Hardcodovaná cesta k obrázku</h3>
            <img
              src="http://192.168.100.9:1341/uploads/friends_circle_a36d778436.jpeg"
              alt="Test"
              style={{
                width: "300px",
                height: "auto",
                border: "1px solid brown",
              }}
              onError={(e) => {
                console.error("Chyba při načítání hardcoded obrázku:", e)
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Chyba+načítání+obrázku"
              }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Test 7: Přímý odkaz s funkcí otevření v novém okně</h3>
            <p>{BASE_URL + data.hobbies[0].image.url}</p>
            <button
              onClick={openImage}
              style={{
                padding: "8px 16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Otevřít obrázek v novém okně
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          Koníčky
        </h1>
        <br />
        <div style={{ marginBottom: "20px" }}>
          <h3>Možná řešení pro HobbyCard komponentu:</h3>
          <ol>
            <li>
              Použít origin prohlížeče:{" "}
              <code>
                image=&#123;window.location.origin + inside.image.url&#125;
              </code>
            </li>
            <li>
              Použít relativní cestu bez BASE_URL:{" "}
              <code>image=&#123;inside.image.url&#125;</code>
            </li>
            <li>
              Použít upravenou URL s fixem domény:{" "}
              <code>image=&#123;fixUrl(inside.image.url)&#125;</code>
            </li>
          </ol>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-1">
          {data &&
            data.hobbies &&
            data.hobbies.map((inside) => (
              <HobbyCard
                key={inside.documentId}
                rotation={inside.rotation}
                image={fixUrl(inside.image.url)} // Zkusíme použít upravenou funkci
                imageAlt={inside.image.alternativeText}
                title={inside.title}
                backText={inside.backText}
                link={inside.link}
                textLink={inside.textLink}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default Test
