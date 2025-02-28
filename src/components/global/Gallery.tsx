import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  slides: string[]
}

const Gallery = (props: Props) => {
  const [index, setIndex] = useState(-1);

  const handlePrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : props.slides.length - 1));
  const handleNext = () => setIndex((prev) => (prev < props.slides.length - 1 ? prev + 1 : 0));
  const handleClose = () => setIndex(-1);

  return (
    <>
      {/* List pictures */}
      <div className="flex flex-wrap mt-10 w-full justify-center">
        {props.slides.map((item, i) => (
          <img
            key={i}
            src={item}
            alt={`Slide ${i + 1}`}
            className="h-fit mt-3 ml-0 xl:mt-0 xl:ml-3 max-w-[250px] drop-shadow-[3px_3px_3px_rgba(0,0,0,0.5)] hover:drop-shadow-[6px_6px_3px_rgba(0,0,0,0.7)] duration-100 cursor-pointer"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Show selected picture */}
      {index !== -1 && (
        <div className="bg-[rgba(0,0,0,0.9)] w-screen h-screen fixed z-20 top-0 left-0 flex items-center justify-center">
          <button
            className="absolute top-5 right-10 cursor-pointer text-white"
            onClick={handleClose}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-10 cursor-pointer text-white"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>
          <img
            src={props.slides[index]}
            alt={`Slide ${index + 1}`}
            className="w-full xl:max-w-[60%] h-fit"
          />
          <button
            className="absolute right-10 cursor-pointer text-white"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
