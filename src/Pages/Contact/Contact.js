import React from "react"
import { useRef, useState } from "react"
import SentEmailModal from "../../Components/SentEmailModal/SentEmailModal"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef()
  const [modalShow, setModalShow] = useState(false)

  const sendEmail = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(
        "service_sykoramaros",
        "template_email_receive",
        form.current,
        "CHbUmi-K6HoejDiOj"
      )
      .then(
        (result) => {
          alert("Email byl odeslán😊")
          setModalShow(true)
          console.log(result.text)
        },
        (error) => {
          alert("Nepodarilo se odeslat email" + error)
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <div className="container">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          Kontakt
        </h1>
        <div className="row rounded-5 shadow mt-4">
          <div className="col-md-6 my-5 d-flex g-1">
            <p className="fs-3 m-auto w-75 text-shadow">
              Neváhejte mi napsat třeba Ahoj👋 a pokud máte zájem o spolupráci
              na projektu, dejte mi prosím vědět a budu se těšit🤓
            </p>
          </div>
          <div className="col-md-6 d-flex">
            <div className="mb-3">
              <form
                className="row g-2 p-3 m-auto"
                id="contactForm"
                onSubmit={sendEmail}
                ref={form}
              >
                <div className="col-sm-12 col-md-6">
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    className="form-control"
                    placeholder="Jméno*"
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input
                    id="from_email"
                    name="from_email"
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
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Vaše zpráva"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    className="mt-2 py-2 px-3 text-white bg-info rounded-3 border-0"
                    type="submit"
                  >
                    Poslat zpravu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <img
          className="img-fluid opacity-75 mx-auto d-block w-75 mt-5"
          src="./img/contact/decorations/pencil_paper.png"
          alt="Pencil and paper"
        />
      </div>
      <SentEmailModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Contact
