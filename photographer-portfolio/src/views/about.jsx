import { useState, useEffect } from "react";

function About() {
  const [jobs, setJobs] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let interval;
    if (jobs < 100) {
      interval = setInterval(() => {
        setJobs((prevJobs) => prevJobs + 1);
        setAnimate(true);
      }, 10);
    } else if (jobs < 110) {
      interval = setInterval(() => {
        setJobs((prevJobs) => prevJobs + 1);
        setAnimate(true);
      }, 75);
    } else {
      interval = setInterval(() => {
        setJobs((prevJobs) => (prevJobs === 114 ? prevJobs : prevJobs + 1));
        setAnimate(true);
      }, 110); // Increased interval to 110 when jobs reach 110
    }

    return () => clearInterval(interval);
  }, [jobs]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Reset animation class after 1 second
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <>
      <section>
        <div
          className="animate-fade animate-ease-in-out
 mt-20 mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        >
          <section>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div
                  className="animate-fade-down animate-duration-1000 animate-delay-0
           grid place-content-center rounded bg-gray-100 p-6 sm:p-8"
                >
                  <div className="mx-auto max-w-md text-center">
                    <header>
                      <h2
                        className="animate-fade animate-duration-500 animate-delay-[400ms] animate-ease-in-out
                text-xl font-bold text-gray-900 sm:text-3xl"
                      >
                        Total Works
                      </h2>
                      <h2
                        className="nimate-duration-500 animate-delay-[400ms] animate-ease-in-out
                text-xl font-bold text-gray-900 sm:text-3xl "
                      >
                        {jobs}
                      </h2>
                      <p
                        className="animate-fade animate-duration-500 animate-delay-[400ms] animate-ease-in-out
                inline-block text-center text-lg text-gray-500 md:mb-0 md:block"
                      >
                        Carried out since 2021
                      </p>
                      <p
                        className="animate-fade animate-duration-500 animate-delay-[400ms] animate-ease-in-out
                mt-2 text-gray-500"
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quas rerum quam amet provident nulla error!
                      </p>
                    </header>
                  </div>
                </div>

                <div
                  className="
          lg:col-span-2 lg:py-8"
                >
                  <ul className="grid grid-cols-2 gap-4">
                    <li>
                      <a
                        href=""
                        className="animate-fade-up animate-duration-1000 animate-delay-[400ms]
                group block"
                      >
                        <img
                          src="https://img.freepik.com/foto-gratis/hermosa-mujer-sonriendo-afuera_23-2148604326.jpg?w=1380&t=st=1698253348~exp=1698253948~hmac=0475afd91b60d6f98494dc281745e5488ee31d6b5b8e635c2fee4ea5b23c8e82"
                          alt=""
                          className="aspect-square w-full rounded object-cover"
                        />

                        <div className="mt-3">
                          <p
                            className="animate-fade-left animate-duration-1000 animate-delay-[1200ms] animate-ease-in-out
                    mt-1 text-sm text-gray-700"
                          >
                            Personal Sesion
                          </p>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a
                        href=""
                        className="animate-fade-down animate-duration-1000 animate-delay-[700ms]
                group block"
                      >
                        <img
                          src="https://img.freepik.com/foto-gratis/mujer-joven-haciendo-su-rutina-matutina_23-2148837463.jpg?w=740&t=st=1698253196~exp=1698253796~hmac=d46c09fd9690585227883f198f3500fa8a299d13f0a31e6252ebb5dba90ac4b0"
                          alt=""
                          className="aspect-square w-full rounded object-cover"
                        />

                        <div className="mt-3">
                          <p
                            className="animate-fade-left animate-duration-1000 animate-delay-[1200ms] animate-ease-in-out
                    mt-1 text-sm text-gray-700"
                          >
                            Conceptual Sesion
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
