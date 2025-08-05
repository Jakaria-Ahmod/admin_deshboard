import React, { useEffect, useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    username: 'jakaria',
    email: 'jakaria@example.com',
    notifications: true,
    darkMode: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Settings saved!');
    // API call or localStorage save can be added here
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={settings.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notifications */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              id="notifications"
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="notifications"
              className="font-medium text-gray-700"
            >
              Enable Notifications
            </label>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              id="darkMode"
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="darkMode" className="font-medium text-gray-700">
              Enable Dark Mode
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
