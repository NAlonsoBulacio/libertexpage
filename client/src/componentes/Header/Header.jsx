import { Disclosure } from "@headlessui/react";
import logo from "../../multimedia/log.jpg";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-900 py-2">
      <div className="container mx-auto text-center">
        <img
          className="h-14 w-auto mx-auto" // Centrar horizontalmente
          src={logo}
          alt="Your Company"
        />
      </div>
    </Disclosure>
  );
}
