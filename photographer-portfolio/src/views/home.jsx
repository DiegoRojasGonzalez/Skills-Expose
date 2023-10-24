import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <div className="mt-20 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://th.bing.com/th/id/OIP.BiGAK8OzMhKAB7BitNQxtwHaE7?pid=ImgDet&rs=1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 ">
              <h2 className="xl:text-8xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold">
                Jessica Williams
              </h2>

              <p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-base text-gray-600 mt-4">
                Capturing{" "}
                <label className="text-blue-500 font-bold">Life&apos;s</label>{" "}
                Essence Through a Lens
              </p>

              <Link
                to="/Works"
                className="mt-10 inline-block rounded bg-gray-900 px-12 py-3 font-medium text-white"
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
