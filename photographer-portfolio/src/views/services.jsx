import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section>
        <div className="animate-fade animate-ease-in-out mt-20 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <section>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                  <h2
                    className="animate-fade-down animate-duration-1000 animate-ease-in-out
                  text-3xl font-bold sm:text-4xl"
                  >
                    My Seamless Service Approach
                  </h2>
                  <p
                    className="animate-fade-right animate-duration-1000 animate-delay-[450ms] animate-ease-in-out
                  mt-4 text-gray-600"
                  >
                    From concept to delivery, I&apos;m dedicated to bringing
                    your vision to life. With attention to detail and a passion
                    for storytelling, my goal is to provide you with exceptional
                    service that captures the authentic essence of your special
                    moments, leaving you with treasured memories to cherish for
                    years to come.
                  </p>

                  <Link
                    to="/Contact"
                    className="animate-fade-up animate-duration-1000 animate-delay-[1450ms] animate-ease-in-out
                    mt-8 inline-block rounded bg-cyan-600 hover:bg-cyan-100  hover:text-cyan-900 px-12 py-3 text-sm font-medium text-white transition  "
                  >
                    I want to contact you
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4  lg:grid-cols-2 sm:grid-cols-4">
                  <Link
                    className="animate-fade-up animate-duration-1000 animate-ease-in-out
                    block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    to="/Works"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

                    <h2 className="mt-2 font-bold">
                      Customized Photo Sessions
                    </h2>

                    <p
                      className="animate-fade-right animate-duration-1000 animate-delay-500 animate-ease-in-out
                    hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"
                    >
                      Capture special moments with tailored photo shoots, from
                      individual portraits to family and couple sessions.{" "}
                    </p>
                  </Link>

                  <Link
                    className="animate-fade-up animate-duration-1000 animate-ease-in-out
                    block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    to="/Works"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

                    <h2 className="mt-2 font-bold">
                      Special Event Photography
                    </h2>

                    <p
                      className="animate-fade-right animate-duration-1000 animate-delay-500 animate-ease-in-out
                    hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"
                    >
                      Immortalize your most memorable moments with professional
                      coverage of events, including weddings, birthdays, and
                      social gatherings.
                    </p>
                  </Link>

                  <Link
                    className="animate-fade-up animate-duration-1000 animate-ease-in-out
                    block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    to="/Works"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

                    <h2 className="mt-2 font-bold">Product Photography</h2>

                    <p
                      className="animate-fade-right animate-duration-1000 animate-delay-500 animate-ease-in-out
                    hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"
                    >
                      Showcase your products with high-quality photographs,
                      perfect for catalogs, e-commerce websites, and advertising
                      materials.
                    </p>
                  </Link>

                  <Link
                    className="animate-fade-up animate-duration-1000 animate-ease-in-out
                    block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    to="/Works"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

                    <h2
                      className="
                    mt-2 font-bold"
                    >
                      Landscape and Nature Photography
                    </h2>

                    <p
                      className="animate-fade-right animate-duration-1000 animate-delay-500 animate-ease-in-out
                    hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"
                    >
                      Explore natural beauty through stunning photographs of
                      landscapes and wildlife, ideal for decorating spaces or
                      for editorial and travel use.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
