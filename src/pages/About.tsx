import { NavLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export function About() {
  return (
    <body className="w-8/12 h-72 m-auto grid sm:grid-cols-1 md:grid-cols-1 gap-1 justify-center p-3">
      <div className="relative flex-col mt-12 bg-slate-100 m-1">
        <img src="/images/info_about.jpg" alt="img" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-50 hover:bg-gray-700">
          <h1 className="text-2xl text-white font-bold tracking-wide">
            Technology Market - <span className="text-2xl">About</span>
          </h1>
          <p className="mt-2 text-sm text-gray-100 hover:text-gray-200">
            About Page
          </p>
        </div>
      </div>
      <NavLink to="/" className="ml-1 mr-1 p-1 bg-slate-100 flex ">
        <HiArrowLeft className="my-auto" />
        <p className="font-bold ml-2">Home</p>
      </NavLink>
    </body>
  );
}
