
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1f1e1e] text-white px-5">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          <div>
            <h6 className="text-gray-400 font-semibold mb-4">ABOUT</h6>
            <p className="mb-2">Contact Us</p>
            <p className="mb-2">About Us</p>
            <p className="mb-2">Careers</p>
            <p className="mb-2">ShopKart Stores</p>
            <p className="mb-2">Press</p>
            <p className="mb-2">Corporate Information</p>
          </div>

          <div>
            <h6 className="text-gray-400 font-semibold mb-4">GROUP COMPANIES</h6>
            <p className="mb-2">ShopZone</p>
            <p className="mb-2">ShopKart Fashion</p>
            <p className="mb-2">ShopKart Travel</p>
          </div>

          <div>
            <h6 className="text-gray-400 font-semibold mb-4">HELP</h6>
            <p className="mb-2">Payments</p>
            <p className="mb-2">Shipping</p>
            <p className="mb-2">Cancellation & Returns</p>
            <p className="mb-2">FAQ</p>
          </div>

          <div>
            <h6 className="text-gray-400 font-semibold mb-4">CONSUMER POLICY</h6>
            <p className="mb-2">Cancellation & Returns</p>
            <p className="mb-2">Terms Of Use</p>
            <p className="mb-2">Security</p>
            <p className="mb-2">Privacy</p>
            <p className="mb-2">Sitemap</p>
            <p className="mb-2">Grievance Redressal</p>
          </div>

          <div>
            <h6 className="text-gray-400 font-semibold mb-4">Mail Us:</h6>
            <p className="text-gray-300 leading-6">
              ShopKart Internet Private Limited,<br />
              Buildings Alyssa,<br />
              Bengaluru, Karnataka.
            </p>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center">
          <p className="text-gray-400 py-2">
            © 2026 ShopKart. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
