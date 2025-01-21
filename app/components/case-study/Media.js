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
        <div className="relative">
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
          <div
            onClick={toggleMute}
            className="absolute bottom-[24px] z-50 right-[24px] flex items-center justify-center bg-tcs-banana group hover:bg-tcs-pure-black size-8 cursor-none r-transition  rounded-[50%] "
          >
            {isMuted ? (
              <span className="pl-0.5" role="img" aria-label="Muted">
                <img
                  className="size-5 block group-hover:hidden"
                  src="/image/icon/silent.png"
                />
                <img
                  className="size-5 hidden group-hover:block"
                  src="/image/icon/silent-y.png"
                />
              </span>
            ) : (
              <span className="pl-0.5" role="img" aria-label="Unmuted">
                <img
                  className="size-5 group-hover:hidden"
                  src="/image/icon/volume.png"
                />
                <img
                  className="size-5 hidden group-hover:block"
                  src="/image/icon/volume-y.png"
                />
              </span>
            )}
          </div>
        </div>
      ) : (
        <img className={style} src={url} alt="Media content" />
      )}
    </>
  );
};

export default Media;
