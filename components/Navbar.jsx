"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import Link from "next/link";
import authUser from "./authUser";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  console.log("pathname",pathname)

  const navigation = [
    { name: "Editor", href: "/dashboard" },
    { name: "MyComponents", href: "/my-components" },
    { name: "About", href: "#AboutSection" },
    { name: "Contact", href: "#ContactSection" },    
  ];
  const navigation1 = [
    { name: "Editor", href: "/dashboard" },
    { name: "MyComponents", href: "/my-components" },
  ];
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
    <>
      {/* NavBar */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1 ml-14 ">
          <Link href="/">
                <img className="h-[40px]" src="/LogoForge.png" alt="The Logo of Compoenents Forge" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />{" "}
          </button>
            </div>            
        <>
          {authUser() ? (
            <div className="hidden lg:flex lg:gap-x-12 flex items-center justify-between ">
                  {
                    pathname==='/'?
                    navigation.map((item) => (
                <Link href={item.href}
                  key={item.name}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
                    )):
                    navigation1.map((item) => (
                      <Link href={item.href}
                        key={item.name}
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        {item.name}
                      </Link>
                          ))
            }
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
              <Link
                className="text-sm font-semibold leading-6 text-gray-900 mr-4"
                href="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                className="text-sm font-semibold leading-6 text-gray-900 mr-4"
                href="/sign-in"
              >
                Sign In <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          )}
        </>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
            <img className="h-[30px]" src="/LogoForge.png" alt="The Logo of Compoenents Forge" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-12 divide-y divide-gray-9500/10">
              {authUser() ? (
                <div className="space-y-2 py-6">
                      {
                        pathname==='/'?
                        navigation.map((item) => (
                    <Link href={item.href}
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                        )) :
                        navigation1.map((item) => (
                          <Link href={item.href}
                            key={item.name}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                              ))
                }
                  <UserButton
                    afterSignOutUrl="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  />
                </div>
              ) : (
                <div className="py-6 ">
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    href="/sign-up"
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    href="/sign-in"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
    )}
    </Disclosure>
  );
}
