import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <a
            href="https://github.com/janjjacob"
            className="text-white bg-green-500 py-2 px-3 focus:outline-none rounded text-lg font-medium title-font hover:bg-green-600 w-1/3 mx-auto"
            target="_blank"
          >
            Visit My GitHub!
          </a>
        </div>
        <div className="flex flex-wrap" style={{ justifyContent: 'space-between' }}>
          {projects.map((project) => (
              <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-full p-4"
                  style={{ flexBasis: '50%', minWidth: '200px', minHeight: '300px' }}
                  target="_blank"
              >
                <div className="flex relative" style={{ width: '100%', height: '100%' }}>
                  <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full"
                      src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.languages}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
          ))}
        </div>

      </div>
    </section>
  );
}
