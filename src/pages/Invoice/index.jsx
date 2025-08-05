import React from 'react';

const Invoice = () => {
  const invoice = {
    invoiceId: 'INV-1023',
    date: '2025-08-05',
    client: {
      name: 'Jakaria Ahmod',
      email: 'jakaria@example.com',
      address: 'Sylhet, Bangladesh',
    },
    items: [
      { description: 'Website Development', quantity: 1, price: 300 },
      { description: 'Hosting (1 Year)', quantity: 1, price: 100 },
      { description: 'Domain Name (.com)', quantity: 1, price: 15 },
    ],
  };

  const subtotal = invoice.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">INVOICE</h1>
            <p className="text-gray-500">Invoice ID: {invoice.invoiceId}</p>
            <p className="text-gray-500">Date: {invoice.date}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800">
              {invoice.client.name}
            </h2>
            <p className="text-gray-600">{invoice.client.email}</p>
            <p className="text-gray-600">{invoice.client.address}</p>
          </div>
        </div>

        {/* Item Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border-b">Description</th>
                <th className="p-3 border-b text-center">Quantity</th>
                <th className="p-3 border-b text-right">Price</th>
                <th className="p-3 border-b text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.description}</td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-right">${item.price.toFixed(2)}</td>
                  <td className="p-3 text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-6 text-right">
          <p className="text-gray-700">
            Subtotal:{' '}
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </p>
          <p className="text-gray-700">
            Tax (5%): <span className="font-semibold">${tax.toFixed(2)}</span>
          </p>
          <p className="text-xl font-bold text-gray-900 mt-2">
            Total: ${total.toFixed(2)}
          </p>
        </div>

        {/* Footer / Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
