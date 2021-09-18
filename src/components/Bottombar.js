import React from "react";

export default function Bottombar() {
  return (
    <header className="bg-blue-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="https://github.com/janjjacob" target="_blank">
            <img
              className="object-cover object-center rounded"
              src="./githubLogo.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jan-jacob-955028203/"
            target="_blank"
          >
            <img
              className="object-cover object-center rounded"
              src="./linkedinLogo.svg"
            />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center"></nav>
        <a className="inline-flex mr-5 text-white text-lg">
          jacob.jan@northeastern.edu
        </a>
        <a className="inline-flex mr-5 text-white text-lg">(508) 210-6720</a>
      </div>
    </header>
  );
}
