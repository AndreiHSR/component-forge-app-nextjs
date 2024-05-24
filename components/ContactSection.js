import React from 'react';

export default function ContactSection() {
  return (
    <div className="relative mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Boost your productivity.
          <br />
          Start using our app today.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          We value your feedback! Use this section to report any complaints or
          suggest improvements for our website. Your input helps us enhance your
          experience. Click the "Email Us" button or explore more ways to get in
          contact.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() =>
              (window.location.href =
                'mailto:andreihos96@gmail.com?subject=Mail from Our Site')
            }
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Email Us
          </button>
          <a
            href="#FooterSection"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            More ways to get in contact <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
