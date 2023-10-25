function Contact() {
  return (
    <>
      <section>
        <div
          className="animate-fade animate-ease-in-out
   mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-22  lg:py-16 mt-20 lg:mt-20 sm:mt-1 xs:mt-1"
        >
          {" "}
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
              <div className="grid grid-cols-1 gap-1 lg:grid-cols-5">
                <div
                  className="animate-fade-right animate-duration-300 animate-delay-[10ms] animate-ease-in-out
          lg:col-span-2 lg:py-6 p-6 bg-gray-50"
                >
                  <p
                    className="animate-fade-down animate-duration-500 animate-delay-[400ms] animate-ease-in-out
            max-w-lg text-base lg:text-lg"
                  >
                    Have a question or interested in collaborating on a project?
                    Feel free to get in touch! Im available for custom photo
                    sessions, special events, and various creative partnerships.
                    Whether youre looking to capture precious moments or need a
                    passionate photographer for your next venture, drop me a
                    message. Im eager to hear your story and help transform your
                    ideas into lasting images.
                  </p>
                  <div className="mt-4">
                    <a
                      href=""
                      className="animate-fade animate-duration-500 animate-delay-[400ms] animate-ease-in-out
              text-xl lg:text-2xl font-bold text-cyan-500"
                    >
                      +1 210-134-0151
                    </a>

                    <address
                      className="animate-fade animate-duration-500 animate-delay-[400ms] animate-ease-in-out
              mt-2 not-italic text-sm lg:text-base"
                    >
                      1234 Elm Street, Anytown, CA, 12345, USA.
                    </address>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 lg:col-span-3 lg:p-8">
                  <form
                    action=""
                    className="animate-fade-left animate-duration-500 animate-delay-[400ms] animate-ease-in-out
            space-y-4"
                  >
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full rounded-lg border-b-4 border-cyan-200 hover:border-cyan-500 transition solid p-3 text-sm lg:text-base"
                        placeholder="Name"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="w-full rounded-lg border-b-4 border-cyan-200 hover:border-cyan-500 transition  solid p-3 text-sm lg:text-base"
                          placeholder="Email address"
                          type="email"
                          id="email"
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          className="w-full rounded-lg border-b-4 border-cyan-200 hover:border-cyan-500 transition solid p-3 text-sm lg:text-base"
                          placeholder="Subject"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>

                      <textarea
                        className="w-full rounded-lg border-b-4 border-cyan-200 hover:border-cyan-500 focus:border transition solid p-3 text-sm lg:text-base"
                        placeholder="Message"
                        rows="6"
                        id="message"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="animate-fade animate-duration-500 animate-delay-[1000ms] animate-ease-in-out
                  inline-block w-full rounded-lg bg-cyan-600 hover:bg-cyan-100 hover:text-cyan-900 transition px-4 py-2 text-base lg:text-lg font-medium text-white sm:w-auto"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Contact;
