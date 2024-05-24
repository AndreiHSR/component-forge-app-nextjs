import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 ">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-10 sm:mt-56 sm:py-12"
      >
        <div className="flex justify-center items-center">
          <img
            className="mb-10"
            src="/WebLogo.png"
            alt="The Logo of Compoenents Forge"
            width={210}
          />
        </div>
        <div className="flex justify-center gap-3 mb-10">
          <SocialIcon
            style={{ width: '30px', height: '30px' }}
            url="https://facebook.com"
          />
          <SocialIcon
            style={{ width: '30px', height: '30px' }}
            url="https://twitter.com"
          />
          <SocialIcon
            style={{ width: '30px', height: '30px' }}
            url="https://linkedin.com/in/couetilc"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <div className="">
              <h3 className="text-sm font-semibold leading-6 text-gray-400">
                © 2024 Compoenents Forge Project. All rights reserved.
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
