import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function ImageLoad({ className, src, imgclass }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = `https://image.tmdb.org/t/p/original/${src}`;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div className={`bg-slate-900 shadow-md ${className} `}>
      <img
        src={`https://image.tmdb.org/t/p/${
          imageLoaded ? "original" : "w300"
        }/${src}`}
        className={`object-cover h-full w-full min-h-[200px] ${imgclass} ${
          !imageLoaded && "blur"
        }`}
        loading="lazy"
        alt=""
      />
    </div>
  );
}

ImageLoad.propTypes = {
  className: PropTypes.string,
  imgclass: PropTypes.string,
  src: PropTypes.string.isRequired,
};
