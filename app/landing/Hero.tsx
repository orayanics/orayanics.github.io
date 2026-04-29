export default function Hero() {
  return (
    <section
      className="flex flex-col mx-auto relative
    lg:p-0 p-4"
      id="hero"
    >
      <div className="md:absolute md:right-0 md:mb-0 mb-4 flex">
        <div
          className="flex items-center gap-2
        border border-emerald-600 
        text-emerald-600 text-xs
        py-2 px-4 rounded-full"
        >
          <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse"></div>
          OPEN FOR WORK
        </div>
      </div>

      <div className="relative">
        <p className="text-xs font-semibold text-neutral-600">WEB DEVELOPER</p>
        <div className="text-xs text-neutral-600 uppercase">
          Building and learning towards a better web experience
        </div>

        <p
          className="text-[6rem] md:text-[10rem] font-bold leading-normal
          bg-linear-to-tr from-amber-400 via-red-400 to-orange-600 bg-clip-text text-transparent"
        >
          nicole
          <br />
          <span className="block -mt-23 md:-mt-38">oraya</span>
        </p>
        {/* <p
            className="text-[6rem] md:text-[10rem] font-bold leading-none
        -mt-12 md:-mt-18"
          >
            oraya
          </p> */}
      </div>
    </section>
  );
}
