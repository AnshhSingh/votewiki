import * as React from "react";
// import { Link }  from "react-router-dom";
import OpenAI from "openai";
const openai = new OpenAI();

export default function Component() {
  
  function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await fetchData('https://api.example.com/data');
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }


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
                <path
                  clipRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  fillRule="evenodd"
                />
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
          <div className="text-white font-bold">Balance: 10wc</div>
        </div>
      </nav>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0645ad]">
                JavaScript
              </h1>
              <p className="mx-auto max-w-[700px] text-[#a2a9b1] text-2xl md:text-3xl dark:text-gray-400">
                Projects not using any libraries are also called vanilla
                javascript projects
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 bg-white p-4 rounded-lg border-2 border-[#a2a9b1]">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0645ad] fix-position: top right ">
                  Orignal
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The framework-like moniker "Vanilla JS" is just another name
                  for plain old JavaScript. It has been coined for websites not
                  using any libraries or frameworks at all, instead relying
                  entirely on standard JavaScript functionality.
                  <span className="font-bold text-[#0645ad]">
                    {" "}
                    Example of usage: "What framework do you use?" "Oh, we use
                    Vanilla JS." The term is included here to avoid confusion.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#0b0080] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0645ad] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0645ad] disabled:pointer-events-none disabled:opacity-50"
                  href=""
                >
                  Dont Change
                </div>
                {/* imp link */}
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 bg-white p-4 rounded-lg border-2 border-[#a2a9b1]">
              <div className="space-y-2">
                <h2 className="text-2xl position:absolute top: #px right: #px font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0645ad] ">
                  Proposed changes
                </h2>

                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <span className="font-bold text-[#0645ad]">
                    In contrast, the term "Vanilla JS" has been coined for
                    websites not using any libraries or frameworks
                  </span>
                  , instead relying entirely on standard JavaScript
                  functionality.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#0b0080] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0645ad] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0645ad] disabled:pointer-events-none disabled:opacity-50"
                  href="#top"
                >
                  Change
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}