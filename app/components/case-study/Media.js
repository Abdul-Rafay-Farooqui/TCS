import React, { useState, useRef } from "react";

const Media = ({ type, url, style }) => {
  const [isMuted, setIsMuted] = useState(true); // State to manage mute status
  const videoRef = useRef(null); // Ref to access the video element

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {type === "Video" ? (
        <div style={{ position: "relative", display: "inline-block" }}>
          <video
            ref={videoRef}
            className={style}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            src={url}
            controls={false}
          ></video>
          <button
            onClick={toggleMute}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {isMuted ? (
              <span role="img" aria-label="Muted">
                <img className="size-7" src="/image/icon/silent.png" />
              </span>
            ) : (
              <span role="img" aria-label="Unmuted">
                <img className="size-7" src="/image/icon/volume.png" />
              </span>
            )}
          </button>
        </div>
      ) : (
        <img className={style} src={url} alt="Media content" />
      )}
    </>
  );
};

export default Media;
