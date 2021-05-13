import React from 'react'
import BlogPostsCell from 'src/components/BlogPostsCell'

export default function Card() {
  return (
    <div>
      <div className="p-8 bg-white border border-gray-400 rounded shadow-sm">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
            weekend
          </a>{' '}
          <span className="text-gray-600">— 1 Feb 2020</span>
        </p>
        <a
          href="/"
          aria-label="Article"
          title="Jingle Bells"
          className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Jingle Bells
        </a>
        <p className="mb-5 text-gray-700">
          Some pilots get picked and become television programs. Some don't,
          become nothing.
        </p>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Vasile Melinte
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
