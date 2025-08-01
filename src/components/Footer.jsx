import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-blue text-3xl">
         

            
  More ways to shop:{' '}
  <span className="underline text-blue-600 text-blue-800 transition-colors">
    <a href="https://www.apple.com/in/retail/" target='blank'>Find an Apple Store</a>
  </span>{' '}
  or{' '}
  <span className="underline text-blue-600 text-blue-800 transition-colors">
    <a href="https://www.google.com/maps" target='blank'>other retailer</a>
  </span>{' '}
  near you.




          </p>
          <p className="font-semibold text-blue text-xl">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xl">Copright @ 2025 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-2xl">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer