import React from 'react';

const UIElements = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🧩 UI Elements Showcase
      </h2>

      {/* Buttons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Primary
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Success
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Warning
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Danger
          </button>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
            Outline
          </button>
        </div>
      </div>

      {/* Inputs */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Inputs</h3>
        <div className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Text input"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email input"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Textarea input"
            rows={3}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Badges</h3>
        <div className="flex gap-3 flex-wrap">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Info
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Success
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Warning
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
            Error
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Cards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(card => (
            <div
              key={card}
              className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Card Title {card}
              </h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vel rhoncus massa.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIElements;
