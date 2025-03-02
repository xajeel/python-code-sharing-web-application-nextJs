import React from 'react'

const Banner = () => {
  return (
    <div><section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex  lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
        Discover & Contribute
          <strong className="font-extrabold text-[#875bf9] sm:block"> Write. Share. Improve. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
        Share your favorite code snippets effortlessly. Boost productivity and collaborate seamlessly! 🚀
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-[#875bf9] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#874bf9] hover:scale-105 transition-all focus:outline-none focus:ring active:bg-[#876bf9] sm:w-auto"
            href="/home"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-[#875bf9] shadow hover:text-[#874bf9] focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Banner