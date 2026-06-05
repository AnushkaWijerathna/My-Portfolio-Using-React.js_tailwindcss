import { useEffect, useState } from "react";

export const StarBackground = () => {
  //id, x, y, size, opacity, animationDuration are the properties of each star in the background.
  //id, x, y, size, delay, animationDuration are the properties of each meteor in the background.

  //The useState hook is used to create a state variable called 'stars' which is an array that will hold the properties of each star in the background. The setStars function is used to update the state of the stars when new stars are added or existing stars are removed.
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    //Every time the window size changes, it will call generateStars() so that the number of stars can be adjusted based on the new screen size..
    const handleResize = () => {
      generateStars();
    };

    //“Whenever the window is resized, run handleResize”
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts, preventing memory leaks and ensuring that the event listener does not persist after the component is no longer in use.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    ); // Generate stars based on the screen size, so that it looks good on different screen sizes.

    //New list of stars, create new stars and add them to the array
    const newStars = [];

    for (let i = 0; i < numOfStars; i++) {
      const id = i;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.5 + 0.5;
      const animationDuration = Math.random() * 4 + 2;

      newStars.push({ id, x, y, size, opacity, animationDuration });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numOfMeteors = 4;

    //New list of meteors, create new meteors and add them to the array
    const newMeteors = [];

    for (let i = 0; i < numOfMeteors; i++) {
      const id = i;
      const x = Math.random() * 100;
      const y = Math.random() * 20;
      const size = Math.random() * 2 + 1;
      const delay = Math.random() * 15;
      const animationDuration = Math.random() * 3 + 3;

      newMeteors.push({ id, x, y, size, delay, animationDuration });
    }

    setMeteors(newMeteors);
  };
  return (
    //// Creates a full-screen background layer of animated stars at random positions and sizes.
    //  Each star is represented as a div with specific styles for position, size, opacity, and animation duration, creating a dynamic starry background effect.,

    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            delay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
