function ContactPage() {
  return (
    <main className="flex flex-col items-start justify-center sm:gap-8 w-full p-8 mt-24">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold mb-3">Contact us</h2>
        <p className="text-lg ">
          Please feel free to contact us, we will get back to you as soon as
          possible
        </p>
      </div>
      <div className="grid sm:grid-cols-[1fr_0.5fr] w-full sm:p-8 p-4 gap-12">
        <form action="#" className="md:w-[80%] space-y-12">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-zinc-400">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="border-b border-zinc-50 px-4 py-2 focus:outline-0"
              placeholder="Enter your full name..."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-zinc-400">
              Email
            </label>
            <input
              type="text"
              id="name"
              className="border-b border-zinc-50 px-4 py-2 focus:outline-0"
              placeholder="Enter your email..."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-zinc-400">
              How can we help?
            </label>
            <input
              type="text"
              id="name"
              className="border-b border-zinc-50 px-4 py-2 focus:outline-0"
              placeholder="Enter your message..."
            />
          </div>
        </form>
        <div className="space-y-4">
          <div>
            <p className="text-zinc-400">Email</p>
            <a href="mailto:info@tsakhi.com" className="text-lg">
              info@tsakhi.com
            </a>
          </div>
          <div>
            <p className="text-zinc-400">Follow us</p>
            <a
              href="https://www.instagram.com/tsakhistudio/"
              className="text-lg"
              target="_blank"
            >
              @tsakhistudio
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
