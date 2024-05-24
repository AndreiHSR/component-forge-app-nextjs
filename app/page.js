'use client';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

const Home = () => {
  return (
    <main>
      {/* Section Styling */}
      <div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D2E3FC] to-[#4285F4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* First Section */}
      <section id="entry-section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create components with the help of AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Use our AI-powered components editor to discover the design of the
              future. With state-of-the-art AI technology that makes your ideas
              come to life, you can instantly visualise the components you
              create.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600"
                href="/dashboard"
              >
                Play with the Editor
              </Link>
              <a
                href="#AboutSection"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="AboutSection">
        <AboutSection />
      </section>
      {/* Contact Us Section */}
      <section id="ContactSection">
        <ContactSection />
      </section>
    </main>
  );
};

export default Home;
