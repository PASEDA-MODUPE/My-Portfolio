import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto py-2 fixed bottom-0 md:left-20 bg-white shadow-md">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full px-4">
        Designed & Developed by{" "}
        <a
          className="font-semibold underline hover:text-primary transition-colors"
          href="./assets/Example.pdf.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          Modupe
        </a>{" "}
        with <span className="text-black font-semibold">Love</span> &{" "}
        <span className="text-black font-semibold">Coffee</span>.
      </p>
    </footer>
  );
}

export default Footer;
