import React from "react"
import { useState } from "react"
import SentEmailModal from "../../Components/SentEmailModal/SentEmailModal"

const Contact = () => {
  // const [showModal, setShowModal] = useState(false)
  // const [modalMessage, setModalMessage] = useState("")

  // const handleSubmit = async (element) => {
  //   element.preventDefault()
  //   const formData = new FormData(element.target)

  //   try {
  //     const response = await fetch("./send_mail.php", {
  //       method: "POST",
  //       body: formData,
  //     })

  //     // Pokud server vrátí status kód 200–299, response.ok bude true.
  //     // V objektu response z metody fetch je vlastnost ok, která je definována podle specifikace Fetch API. Tato vlastnost je nastavena na true, pokud HTTP status kód odpovědi je v rozmezí 200 až 299 (což znamená, že požadavek byl úspěšný).
  //     if (response.ok) {
  //       setModalMessage("Email byl úspěšně odeslán😊")
  //       console.log("PHP send_mail.php skript nalezen")
  //       // Jinak response.ok bude false, což znamená, že server vrátil chybu (například status 500 nebo 404).
  //       // Jakmile server vrátí status kód mimo tento rozsah (např. 404 Not Found, 500 Internal Server Error), response.ok bude false.
  //     } else {
  //       setModalMessage(
  //         "Nastala chyba při odesílání emailu. Zkuste to prosím znovu."
  //       )
  //       console.log("PHP send_mail.php skript nalezen, ale doslo k chybe")
  //     }
  //     setShowModal(true)
  //   } catch (error) {
  //     setModalMessage(
  //       "Nastala chyba při odesílání emailu. Zkuste to prosím znovu."
  //     )
  //     setShowModal(true)
  //     console.log("PHP send_mail.php skript nenalezen. Chyba: " + error)
  //   }
  // }

  return (
    <div>
      <div className="container">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          Kontakt
        </h1>
        <h2 className="text-center">(Formulář není zatím funkční)</h2>
        <div className="row rounded-5 mx-auto shadow mt-4">
          <div className="col-md-6 m-auto">
            <p className="fs-3 m-auto w-75 text-shadow">
              Neváhejte mi napsat třeba Ahoj👋 a pokud máte zájem o spolupráci
              na projektu, dejte mi prosím vědět a budu se těšit🤓
            </p>
          </div>
          <div className="col-md-6 m-auto">
            <div className="mb-3">
              <form
                className="row g-2 p-3 m-auto"
                id="contactForm"
                action="send_mail.php"
                method="post"
                // onSubmit={handleSubmit}
              >
                <div className="col-sm-12 col-md-6">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Jméno*"
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Předmět*"
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="text"
                    className="form-control"
                    id="text"
                    rows="5"
                    placeholder="Vaše zpráva"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    className="p-2 text-white bg-info rounded-3 opacity-50"
                    type="submit"
                    disabled
                  >
                    Poslat zpravu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <p className="text-center fs-5">
          * Prozatím mě můžete kontaktovat klasicky na můj gmail😊
          <br />{" "}
          <a className="text-info" href="mailto:8yVt0@example.com">
            sykoramaros@gmail.com
          </a>
        </p>
        <img
          className="img-fluid opacity-75 mx-auto d-block w-75 mt-5"
          src="./img/contact/decorations/pencil_paper.png"
          alt="Pencil and paper"
        />

        {/* {showModal && <SentEmailModal modalMessage={modalMessage} />} */}
      </div>
    </div>
  )
}

export default Contact
