import React from 'react';

const plans = [
  {
    title: 'Basic',
    price: 'Free',
    features: ['1 Project', 'Community Support', 'Limited Access'],
    buttonText: 'Get Started',
    highlight: false,
  },
  {
    title: 'Standard',
    price: '$9.99/mo',
    features: ['5 Projects', 'Email Support', 'Standard Access'],
    buttonText: 'Buy Now',
    highlight: true,
  },
  {
    title: 'Premium',
    price: '$19.99/mo',
    features: ['Unlimited Projects', 'Priority Support', 'Full Access'],
    buttonText: 'Buy Now',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Pricing Plans</h2>
        <p className="mt-2 text-gray-600">
          Choose the plan that fits your needs.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border ${
                plan.highlight ? 'border-blue-600 shadow-lg' : 'border-gray-200'
              } bg-white p-6 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {plan.title}
                </h3>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 py-2 px-4 rounded text-white font-medium ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-800 hover:bg-gray-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
