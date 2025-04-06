import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    vscode,
    git,
    github,
    figma,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="flex flex-wrap gap-12 justify-center pt-6"> {/* Increased gap here */}
        <img src={html} title="HTML" alt="HTML" className="w-16 h-16 md:w-20 md:h-20 mx-4" /> {/* Added mx-4 for margin */}
        <img src={css} title="CSS" alt="CSS" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
        <img src={js} title="JavaScript" alt="JavaScript" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
        <img src={react} title="React" alt="React" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="flex flex-wrap gap-12 justify-center pt-6"> {/* Increased gap here */}
        <img src={vscode} title="Visual Studio Code" alt="VSCode" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
        <img src={git} title="Git" alt="Git" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
        <img src={github} title="Github" alt="Github" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
        <img src={figma} title="Figma" alt="Figma" className="w-16 h-16 md:w-20 md:h-20 mx-4" />
      </section>
    </main>
  );
}

export default Technologies;
