import * as React from "react";
// import { Link }  from "react-router-dom";

export default function Component() {
  return (
    <div className="flex flex-col w-full">
      <nav className="flex items-center justify-between p-6 bg-[#0645ad] text-white shadow-md">
        <div className="flex items-center space-x-4">
          <img
            alt="Logo"
            className="w-10 h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="text-2xl font-bold">Voting App</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="inline-flex items-center space-x-2 text-gray-200 hover:text-white">
              <span>Options</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
                <path
                  clipRule="evenodd"
                  d="M10 2a2 2 0 100 4 2 2 0 000-4zm0 12a2 2 0 100 4 2 2 0 000-4z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            {/* <div className="absolute right-0 mt-2 w-48 bg-[#0645ad] rounded-md overflow-hidden shadow-xl z-10 hidden group-hover:block">
              <a className="block px-4 py-2 text-sm text-white hover:bg-[#0b0080]" href="#">
                Option 1
              </a>
              <a className="block px-4 py-2 text-sm text-white hover:bg-[#0b0080]" href="#">
                Option 2
              </a>
              <a className="block px-4 py-2 text-sm text-white hover:bg-[#0b0080]" href="#">
                Option 3
              </a> */}
            {/* </div> */}
          </div>
          <div className="text-white font-bold">Balance: $1000</div>
        </div>
      </nav>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0645ad]">
                Voting Topic
              </h1>
              <p className="mx-auto max-w-[700px] text-[#a2a9b1] text-2xl md:text-3xl dark:text-gray-400">
                Bias: Neutral. This means that the voting topic has been presented in a way that does not favor any
                side. It is important to make an informed decision based on the facts and arguments presented.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 bg-white p-4 rounded-lg border-2 border-[#a2a9b1]">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0645ad]">Side A</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec condimentum cursus,
                  erat massa pellentesque elit, at sollicitudin mi nulla ac sem.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#0b0080] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0645ad] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0645ad] disabled:pointer-events-none disabled:opacity-50"
                  href="#top"
                >
                  Vote for Side A
                </div>
                {/* imp link */}
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 bg-white p-4 rounded-lg border-2 border-[#a2a9b1]">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0645ad]">Side B</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec condimentum cursus,
                  erat massa pellentesque elit, at sollicitudin mi nulla ac sem.
                  <span className="font-bold text-[#0645ad]">
                    This is the updated content that has been highlighted.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#0b0080] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0645ad] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0645ad] disabled:pointer-events-none disabled:opacity-50"
                  href="#top"
                >
                  Vote for Side B
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}