export default function Hero() {
  return (
    <section className="flex flex-col mx-auto py-10">
      <div className="hidden md:block space-y-2 fade-up">
        <h1 className="text-3xl leading-8 text-stone-800 font-medium tracking-normal">
          I{"'"}m Nicole Oraya - a web developer.
        </h1>
        <p className="text-xl leading-6 tracking-normal text-stone-800">
          <span className="bg-linear-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            Developing
          </span>{" "}
          web apps for seamless user experience.
        </p>
      </div>

      <div className="block md:hidden space-y-6 fade-up">
        <h1 className="text-3xl leading-8 text-stone-800 font-medium tracking-normal">
          I{"'"}m Nicole Oraya <br />a web developer.
        </h1>
        <p className="text-xl leading-6 tracking-normal text-center text-stone-800">
          <span className="bg-linear-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            Developing
          </span>{" "}
          web apps for seamless user experience.
        </p>
      </div>
    </section>
  );
}
