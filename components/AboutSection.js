import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export default function AboutSection() {
  const features = [
    {
      name: 'AI-Powered Component Generation',
      description:
        'Leveraging advanced language models, our platform empowers users to effortlessly generate high-quality, responsive components tailored to their specifications through natural language prompts, streamlining the development process.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Secure Component Saving',
      description:
        'Users can securely save their custom-generated components for future use, knowing that their work is stored safely and can be accessed whenever needed.',
      icon: LockClosedIcon,
    },
    {
      name: 'Coding Made Enjoyable',
      description:
        "Whether you're a seasoned developer or someone with little to no coding experience, our website offers an engaging and enjoyable way to create components. Non-coders can generate code through natural language prompts, while developers can streamline their workflow and explore new possibilities.",
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Robust security measures are implemented to safeguard user data and protect against potential threats, providing users with peace of mind when using the application.',
      icon: FingerPrintIcon,
    },
  ];
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          About Us
        </h2>

        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to create your own components
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our user-friendly tool reduces the design process, making it easier
          for designers of all experience levels to create beautiful, useful
          user interface elements. Play with the endless possibilities and
          observe how AI brings your ideas to life. Take your design workflow to
          new levels by beginning to create your own components right now!
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
