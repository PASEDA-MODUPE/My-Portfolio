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
    <main className="container mx-auto max-w-screen-xl section md:flex justify-between items-center mx-5 px-6 md:px-12">
      {/* Left Section: Text Content */}
      <div className="md:order-first mb-8 md:mb-0">
        <h1
          ref={heading1Ref}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-5xl xl:text-6xl xl:leading-tight font-semibold font-poppins tracking-wide mb-4"
        >
          Hi,👋<br />
          My name is
        </h1>

        <h1
          ref={heading2Ref}
          className="text-4xl text-black md:text-5xl xl:text-6xl xl:leading-tight font-bold font-poppins mb-4"
        >
          {name}
        </h1>

        <h2
          ref={heading3Ref}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-roboto font-light"
        >
          {tagline}
        </h2>
      </div>

      {/* Right Section: Profile Image */}
      <div className="mt-5 md:mt-0 md:order-last">
        <img
          ref={imageRef}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mr-8"
          src={img}
          alt="Profile"
        />
      </div>
    </main>
  );
}

export default Home;
