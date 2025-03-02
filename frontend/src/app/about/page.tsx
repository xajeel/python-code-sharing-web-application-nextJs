import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <div className=" flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-lg w-full text-center bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-md mb-4">
          Welcome to our Code Snippet Sharing Platform! We help developers store,
          share, and explore useful code snippets efficiently.
        </p>
        <p className="text-gray-600 text-md mb-4">
          Our AI-powered features ensure your snippets are properly categorized,
          free from spam, and easy to understand.
        </p>
        <p className="text-gray-600 text-md mb-4">
        📑 Built by <b><u><Link href={"https://www.linkedin.com/in/msajeel/"}>@m.sajeel</Link></u></b> AI Engineer.
        </p>
      </div>
    </div>
    </div>
  )
}

export default AboutPage