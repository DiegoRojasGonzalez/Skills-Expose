function Contact() {

    return (
      <>
        <section>
          <div className="mx-auto mt-20 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <section className="bg-gray-100">
              <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  

                  <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4">
                      <div>
                        <label className="sr-only" >Name</label>
                        <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="sr-only" >Email</label>
                          <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email" />
                        </div>

                        <div>
                          <label className="sr-only">Subject</label>
                          <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Phone Number" type="tel" id="phone" />
                        </div>
                      </div>
                      <div>
                        <label className="sr-only">Message</label>

                        <textarea className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows="8" id="message"></textarea>
                      </div>

                      <div className="mt-4">
                        <button type="submit" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">Send Enquiry</button>
                      </div>
                    </form>
                  </div>
                </div>
            </section>
           </div>
          </section>

      </>
    )
  }
  
  export default Contact
  