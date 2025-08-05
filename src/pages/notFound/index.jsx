import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-blue-600 mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
