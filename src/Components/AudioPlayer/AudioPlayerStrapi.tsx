// import React from "react"
// import { useState, useRef } from "react"
// import ReactAudioPlayer from "react-audio-player"
// // import playlist from "./playlist.json"
// import "./AudioPlayer.css"
// import { useQuery, gql } from "@apollo/client"
// // import { useParams, Link } from "@tanstack/react-router"
// import { useBaseUrl } from "../../providers/BaseUrlProvider"

// const PLAYLIST = gql`
//   query GetPlaylist {
//     playlists {
//       documentId
//       title
//       song {
//         url
//       }
//       image {
//         url
//       }
//     }
//   }
// `

// const AudioPlayerStrapi = () => {
//   const BASE_URL = useBaseUrl()
//   const { loading, error, data } = useQuery(PLAYLIST)

//   const [currentSong, setCurrentSong] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const audioRef = useRef<ReactAudioPlayer | null>(null)

//   const togglePlayPause = () => {
//     if (!audioRef.current) return // ← PŘIDÁNA KONTROLA

//     const audioElement = audioRef.current.audioEl.current
//     if (!audioElement) return // ← PŘIDÁNA KONTROLA

//     if (isPlaying) {
//       audioElement.pause()
//     } else {
//       audioElement.play()
//     }
//     setIsPlaying(!isPlaying)
//   }

//   const nextSong = () => {
//     const wasPlaying = isPlaying

//     // Přidáme kontroly pro audioRef
//     if (wasPlaying && audioRef.current) {
//       audioRef.current.audioEl.current?.pause()
//     }

//     setCurrentSong(currentSong === playlist.length - 1 ? 0 : currentSong + 1)

//     setTimeout(() => {
//       if (wasPlaying && audioRef.current) {
//         audioRef.current.audioEl.current?.play()
//       }
//     }, 50)
//   }

//   const prevSong = () => {
//     const wasPlaying = isPlaying

//     // Přidáme kontroly pro audioRef
//     if (wasPlaying && audioRef.current) {
//       audioRef.current.audioEl.current?.pause()
//     }

//     setCurrentSong(currentSong === 0 ? playlist.length - 1 : currentSong - 1)

//     setTimeout(() => {
//       if (wasPlaying && audioRef.current) {
//         audioRef.current.audioEl.current?.play()
//       }
//     }, 50)
//   }

//   const prevSong = () => {
//     // Stejná logika jako u nextSong
//     const wasPlaying = isPlaying

//     if (wasPlaying) {
//       audioRef.current.audioEl.current.pause()
//     }

//     setCurrentSong(currentSong === 0 ? playlist.length - 1 : currentSong - 1)

//     setTimeout(() => {
//       if (wasPlaying) {
//         audioRef.current.audioEl.current.play()
//       }
//     }, 50)
//   }

//   return (
//     <div
//       className="rounded-top-5 row d-flex justify-content-center align-items-center shadow"
//       style={{ width: "100%", height: "100%" }}
//     >
//       <hr className="top-line border-4 border-dark w-25 mt-3" />
//       {/*<a className="fs-1 text-decoration-none text-primary text-center"*/}
//       {/*   style={{ position: "absolute", top: "-10px", right: "0" }}*/}
//       {/*   type="button"*/}
//       {/*   rel="noopener noreferrer" >▾</a>*/}
//       <h3 className="col-12 text-center fs-6 text-white text-uppercase fw-lighter">
//         {playlist[currentSong].title}
//       </h3>
//       <div className=" col-12 text-center">
//         <img
//           className="img-container"
//           src={`${import.meta.env.VITE_API_URL}${playlist[currentSong].image}`}
//           alt="Album cover"
//           height={"95px"}
//         />
//       </div>
//       <hr className="audio-player-line border-1 border-white mt-3" />
//       <div className="col-12 text-center d-none">
//         <ReactAudioPlayer
//           ref={audioRef}
//           src={`${import.meta.env.VITE_API_URL}${playlist[currentSong].src}`}
//           autoPlay={false}
//           controls={false}
//           onPlay={() => setIsPlaying(true)}
//           onPause={() => setIsPlaying(false)}
//           onEnded={nextSong}
//           className="w-50 border border-primary"
//         />
//       </div>
//       <div className="row row-cols-3 mb-5">
//         <div className="text-center">
//           <a
//             className="fs-1 text-decoration-none"
//             onClick={prevSong}
//             type="button"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={`${import.meta.env.VITE_API_URL}/img/audio_player/previous.svg`}
//               alt="Previous song"
//               height={"40px"}
//             />
//           </a>
//         </div>
//         <div className="text-center">
//           <a
//             className="fs-1 text-decoration-none"
//             onClick={togglePlayPause}
//             type="button"
//             rel="noopener noreferrer"
//           >
//             {isPlaying ? (
//               <img
//                 src={`${import.meta.env.VITE_API_URL}/img/audio_player/pause.svg`}
//                 alt="Pause"
//                 height={"40px"}
//               />
//             ) : (
//               <img
//                 src={`${import.meta.env.VITE_API_URL}/img/audio_player/play.svg`}
//                 alt="Play"
//                 height={"40px"}
//               />
//             )}
//           </a>
//         </div>
//         <div className="text-center">
//           <a
//             className="fs-1 text-decoration-none"
//             onClick={nextSong}
//             type="button"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={`${import.meta.env.VITE_API_URL}/img/audio_player/next.svg`}
//               alt="Next song"
//               height={"40px"}
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AudioPlayerStrapi
