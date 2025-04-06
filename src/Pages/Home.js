import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  // Refs for DOM elements
  const heading1Ref = useRef();
  const heading2Ref = useRef();
  const heading3Ref = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const animationTimeline = gsap.timeline();

    // GSAP animations for text and image
    animationTimeline
      .from(heading1Ref.current, {
        x: "-100%",
        opacity: 0,
        duration: 2,
        delay: 0.8,
        ease: "Power3.easeOut",
      })
      .from(heading2Ref.current, {
        x: "-100%",
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: "Power3.easeOut",
      })
      .from(heading3Ref.current, {
        x: "-100%",
        opacity: 0,
        duration: 2,
        delay: 0.1,
        ease: "Power3.easeOut",
      })
      .from(imageRef.current, {
        x: "200%",
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: "Power3.easeOut",
      });
  }, []);

  return (
    <main className="container mx-auto max-w-screen-xl section md:flex justify-between items-center mx-5">
      {/* Left Section: Text Content */}
      <div className="md:order-first">
        <h1
          ref={heading1Ref}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br />
          My name is
        </h1>

        <h1
          ref={heading2Ref}
          className="text-2xl text-black md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>

        <h2
          ref={heading3Ref}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>

      {/* Right Section: Profile Image */}
      <div className="mt-5 md:mt-0 md:order-last">
        <img
          ref={imageRef}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mr-16"
          src={img}
          alt="Profile"
        />
      </div>
    </main>
  );
}

export default Home;
