import React from "react";
import { useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import playlist from "./playlist.json"

const AudioPlayer = () => {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);


    const togglePlayPause = () => {
        if (isPlaying) {
            // Pause the song
            audioRef.current.audioEl.current.pause();
        } else {
            // Play the song
            audioRef.current.audioEl.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        // Nejprve zapamatujeme si, zda píseň hrála
        const wasPlaying = isPlaying;

        // Pokud hrála, zastavíme ji před změnou
        if (wasPlaying) {
            audioRef.current.audioEl.current.pause();
        }

        // Změníme píseň
        setCurrentSong(currentSong === playlist.length - 1 ? 0 : currentSong + 1);

        // Pro vykonání kódu až po změně stavu a překreslení komponenty
        setTimeout(() => {
            // Pokud píseň hrála, spustíme novou píseň
            if (wasPlaying) {
                audioRef.current.audioEl.current.play();
            }
        }, 50);
    };

    const prevSong = () => {
        // Stejná logika jako u nextSong
        const wasPlaying = isPlaying;

        if (wasPlaying) {
            audioRef.current.audioEl.current.pause();
        }

        setCurrentSong(currentSong === 0 ? playlist.length - 1 : currentSong - 1);

        setTimeout(() => {
            if (wasPlaying) {
                audioRef.current.audioEl.current.play();
            }
        }, 50);
    };

    return (
        <div className="rounded-top-5 row d-flex justify-content-center align-items-center shadow px-5 pb-5"
             style={{ width: "350px" , height: "300px", backgroundColor: "rgba(255,170,0,0.87)" }}>
            <hr className="border-4 border-dark w-25 mt-3"/>
            {/*<a className="fs-1 text-decoration-none text-primary text-center"*/}
            {/*   style={{ position: "absolute", top: "-10px", right: "0" }}*/}
            {/*   type="button"*/}
            {/*   rel="noopener noreferrer" >▾</a>*/}
            <h3 className="col-12 text-center fs-6 text-white text-uppercase fw-lighter">{playlist[currentSong].title}</h3>
            <div className="col-12 text-center">
            <img src={`${process.env.PUBLIC_URL}${playlist[currentSong].image}`} alt="Album cover" height={"95px"}/>
            </div>
            <hr className="col-12 border-1 border-secondary mt-3"/>
            <div className="col-12 text-center d-none">
            <ReactAudioPlayer
                ref={audioRef}
                src={`${process.env.PUBLIC_URL}${playlist[currentSong].src}`}
                autoPlay = {false}
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={nextSong}
                className="w-50 border border-primary"
            />
            </div>
            <div className="col-4 text-center">
            <a className="fs-1 text-decoration-none" onClick={prevSong} type="button" rel="noopener noreferrer">⏪</a>
            </div>
            <div className="col-4 text-center">
            <a className="fs-1 text-decoration-none" onClick={togglePlayPause} type="button" rel="noopener noreferrer">{isPlaying ? "⏸️" : "▶️"}</a>
            </div>
            <div className="col-4 text-center">
            <a className="fs-1 text-decoration-none" onClick={nextSong} type="button" rel="noopener noreferrer">⏩</a>
            </div>
        </div>
    )
}

export default AudioPlayer