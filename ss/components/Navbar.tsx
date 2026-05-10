import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Hire Bridge
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
