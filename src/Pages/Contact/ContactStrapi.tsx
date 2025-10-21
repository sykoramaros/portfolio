import React from "react"
import { useRef, useState } from "react"
import SentEmailModal from "../../Components/SentEmailModal/SentEmailModal"
import emailjs from "emailjs-com"
import "./Contact.css"

import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
import { useLanguage } from "../../providers/LanguageProvider"

import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner"

const CONTACT_FORM = gql`
  query GetContactForm($locale: I18NLocaleCode!) {
    contactForm(locale: $locale) {
      documentId
      title
      paragraph
      name
      email
      subject
      message
      sendButton
      contactImage {
        url
        alternativeText
      }
    }
  }
`

const ContactStrapi = () => {
  const form = useRef()
  const [modalShow, setModalShow] = useState(false)

  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()
  const { currentLocale } = useLanguage()

  console.log("currentLocale", currentLocale)

  const { loading, error, data } = useQuery(CONTACT_FORM, {
    // skip: !currentLocale,
    variables: {
      // documentId,
      locale: currentLocale,
      documentId,
    },
  })

  const imageUrl = `${BASE_URL}${data?.contactForm.contactImage.url}`
  const altText = data?.contactForm.alternativeText

  // useEffect(() => {
  //   console.log("Aktuální locale:", currentLocale)
  // }, [currentLocale])

  // console.log(data)

  const sendEmail = (event) => {
    if (loading) return <LoadingSpinner />
    if (error) return <p>Error :(</p>

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
          {data?.contactForm.title}
        </h1>
        <div className="contact-container row rounded-5 shadow mt-4 border border-1 border-opacity-10 border-white">
          <div className="col-md-6 my-5 d-flex g-1">
            <p className="fs-3 m-auto w-75 text-shadow">
              {data?.contactForm.paragraph}
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
                    placeholder={data?.contactForm.name}
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    className="form-control"
                    placeholder={data?.contactForm.email}
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder={data?.contactForm.subject}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder={data?.contactForm.message}
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    className="mt-2 py-2 px-3 text-white bg-info rounded-3 border-0"
                    type="submit"
                  >
                    {data?.contactForm.sendButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <br />

        <img
          className="img-fluid opacity-75 mx-auto d-block w-75 mt-5"
          src={imageUrl}
          alt={altText}
        />
      </div>
      <SentEmailModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default ContactStrapi
