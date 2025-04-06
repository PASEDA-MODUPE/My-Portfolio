import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const sectionRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 }, // Start a bit lower (y: 50)
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" } // Fade-in and move to normal position
    );

    const handleScroll = () => {
      const section = sectionRef.current;
      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        tl.play();
      } else {
        tl.pause();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger the animation once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="container mx-auto max-wid mt-32" ref={sectionRef}> {/* Increased mt-32 for more space */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions, please drop a mail
      </h1>

      <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-medium pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      </h3>

      {/* Optional Phone Section */}
      {/* <span className="text-center text-content text-lg font-light block">or</span>
      <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-medium pt-4 md:py-6">
        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
      </h3> */}
    </main>
  );
}

export default Contact;
