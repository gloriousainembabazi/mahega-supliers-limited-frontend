import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-200 text-blue-900 text-center p-4 mt-6 shadow-inner">
      <p className="font-medium">
        © {new Date().getFullYear()} Mahega Suppliers Limited. All Rights Reserved.
      </p>
      <p className="text-sm mt-2">
        Designed with ❤️ using React & TailwindCSS
      </p>
    </footer>
  );
}

export default Footer;
