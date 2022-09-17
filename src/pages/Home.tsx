export function Home() {
  return (
    <body className="w-8/12 h-72 m-auto grid sm:grid-cols-1 md:grid-cols-1 gap-1 justify-center p-3">
      <div className="relative flex-col mt-12 bg-slate-200 m-1">
        <img src="/images/home_market.jpg" alt="img" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-70">
          <h1 className="text-2xl text-white font-bold tracking-wide">
            Technology Market - <span className="text-2xl">Welcome</span>
          </h1>
          <p className="mt-2 text-sm text-gray-100">
            A shopping card application using with react, context api, hooks and
            typescript.
          </p>
        </div>
      </div>
    </body>
  );
}
