import React, { useEffect, useRef } from "react";
import Audio from "../../assets/About/koios.mp3";

function Koios() {
  const svgRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const audioElement = audioRef.current;

    const handleClick = () => {
      audioElement.play();
      svgElement.style.fill = "#FFBF00";
    };

    const handleAudioEnd = () => {
      setTimeout(() => {
        svgElement.style.fill = "#FCFCFD";
      }, audioElement.duration * 1000);
    };

    svgElement.addEventListener("click", handleClick);
    audioElement.addEventListener("ended", handleAudioEnd);

    // Cleanup on unmount
    return () => {
      svgElement.removeEventListener("click", handleClick);
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  return (
    <div className="s-aboutus">
      <div className="heading">
        <p>About Us</p>
      </div>
      <div className="s-aboutus-content">
        <div className="s-aboutus-content-container">
          <div className="heading">
            <p>KOIOS</p>
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path d="M2.66634 21.3335H7.85153L14.9109 27.1092C15.0299 27.2067 15.1791 27.2599 15.333 27.2599C15.7011 27.2599 15.9997 26.9615 15.9997 26.5932V5.40692C15.9997 5.25303 15.9465 5.10387 15.849 4.98476C15.6158 4.6998 15.1958 4.6578 14.9109 4.89095L7.85153 10.6668H2.66634C1.92997 10.6668 1.33301 11.2637 1.33301 12.0001V20.0001C1.33301 20.7365 1.92997 21.3335 2.66634 21.3335ZM30.6663 16C30.6663 20.3893 28.7382 24.3284 25.6826 27.0163L23.7923 25.1259C26.3674 22.9249 27.9997 19.6531 27.9997 16C27.9997 12.3469 26.3674 9.07505 23.7923 6.87409L25.6826 4.98372C28.7382 7.67157 30.6663 11.6106 30.6663 16ZM23.9997 16C23.9997 13.4511 22.8077 11.1806 20.9507 9.71564L19.0453 11.6211C20.4281 12.5847 21.333 14.1867 21.333 16C21.333 17.8133 20.4281 19.4152 19.0453 20.3788L20.9507 22.2843C22.8077 20.8193 23.9997 18.5488 23.9997 16Z" />
            </svg>
          </div>
          <p>
            KOIOS: /KEE-AWS/ or /KHAE-OS/- <br />
            He is the Greek Titan of Far sight, Intellect, and Knowledge
          </p>
        </div>
        <p>
          Koios Engineering Solutions is the most trusted one-stop destination
          for the designing and development of all your problems! We provide
          advanced mechanical and automobile design and manufacturing services
          while also specializing in electric vehicles. We also specialize in
          crafting impactful digital presence through a website and brand
          development solutions.
        </p>
      </div>

      {/* Audio tag */}
      <audio ref={audioRef} src={Audio}></audio>
    </div>
  );
}

export default Koios;
