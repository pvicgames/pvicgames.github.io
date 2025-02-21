import React from "react";

const AnimatedHomeTitle = () => {
  const words_en = [
    "Imagination.",
    "Creativity.",
    "Inspiration.",
    "Liberty.",
    "Dreams.",
    "Awesome.",
  ];

  /*const words_pt = [
    "Imaginação.",
    "Criatividade.",
    "Inspiração.",
    "Liberdade.",
    "Magia.",
    "Maravilha.",
  ];*/

  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 1000;

  const [text, setText] = React.useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = React.useState<number>(0);
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);

  const userPreferredLanguage = navigator.language.startsWith("pt")
    ? "pt"
    : "en";
  const words = userPreferredLanguage === "en" ? words_en : words_en;
  const currentWord = words[currentWordIndex];

  React.useEffect(() => {
    let timeout: number; // Explicitly use `number` instead of `NodeJS.Timeout`

    if (isDeleting) {
      if (text.length > 0) {
        timeout = window.setTimeout(() => {
          // Use `window.setTimeout`
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeout = window.setTimeout(() => {}, pauseDuration);
      }
    } else {
      if (text.length < currentWord.length) {
        timeout = window.setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWord, words.length]);

  return (
    <h1 className="text-5xl text-pvic-blue font-adlib">Pure {text}</h1>
  );
};

export default AnimatedHomeTitle;
