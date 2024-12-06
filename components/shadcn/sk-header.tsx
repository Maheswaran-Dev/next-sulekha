'use client';
import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const SkHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchDrawerOpen, setSearchDrawerOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <button onClick={() => setSidebarOpen(true)} className="mr-4">
          <FaBars className="h-6 w-6 text-gray-700" />
        </button>
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">App Logo</a>
        </Link>
      </div>
      <button onClick={() => setSearchDrawerOpen(true)}>
        <FaSearch className="h-6 w-6 text-gray-700" />
      </button>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <button className="text-blue-500">Sign Up</button> | <button className="text-blue-500">Sign In</button>
              </div>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a href="#" className="flex items-center">
                    <span className="mr-2">🏠</span>
                    <div>
                      <p className="font-bold">Home</p>
                      <p className="text-sm text-gray-500">Go to homepage</p>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <p className="font-bold">Categories</p>
                  <ul className="ml-4">
                    <li className="mb-2"><a href="#">Category 1</a></li>
                    <li className="mb-2"><a href="#">Category 2</a></li>
                    <li className="mb-2"><a href="#">Category 3</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {isSearchDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setSearchDrawerOpen(false)}>
                <FaTimes className="h-6 w-6 text-gray-700" />
              </button>
              <p className="text-lg font-bold">Search</p>
            </div>
            <div className="mb-4">
              <div className="flex items-center border rounded p-2">
                <input type="text" className="flex-grow outline-none" placeholder="Search..." />
                <button className="ml-2">
                  <FaTimes className="h-5 w-5 text-gray-500" />
                </button>
                <button className="ml-2">
                  <FaSearch className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2">Suggestions</p>
              <ul>
                <li className="mb-2"><a href="#">Suggestion 1</a></li>
                <li className="mb-2"><a href="#">Suggestion 2</a></li>
                <li className="mb-2"><a href="#">Suggestion 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SkHeader;
