import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="animate-fade animate-ease-in-out ">
        <div
          className=" animate-fade animate-ease-in-out
          mt-20 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Profile Photo"
                src="https://img.freepik.com/foto-gratis/atractiva-morena-apunta-su-camara-componer-fotografia-estudio-aislado-pared-gris_231208-1337.jpg?w=1380&t=st=1698185960~exp=1698186560~hmac=3c8c934208d4d8a6cf7a49d447ec6b856b4e3b650dc63cc967d29626c336569f"
                className="rounded-tl-[20%] rounded-tr-[21%] rounded-br-[20%] rounded-bl-[0%] animate-fade-left animate-once animate-duration-400 animate-delay-200 animate-ease-in-out
                            absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 ">
              <h2
                className=" animate-fade-right animate-once animate-duration-400 animate-delay-200 animate-ease-in-out
  xl:text-8xl lg:text-6xl md:text-8xl sm:text-8xl text-3xl font-bold"
              >
                Jessica Williams
              </h2>

              <p
                className=" animate-fade-right animate-once animate-duration-600 animate-delay-[500ms] animate-ease-in-out
                            xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-base text-gray-600 mt-4"
              >
                Capturing{" "}
                <label className="text-cyan-500 font-bold">Life&apos;s</label>{" "}
                Essence Through a Lens
              </p>

              <Link
                to="/Works"
                className=" animate-fade-right animate-once animate-duration-600 animate-delay-1000 animate-ease-in-out
                mt-10 inline-block rounded bg-gray-900 px-12 py-3 font-medium text-white"
              >
                {" "}
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
