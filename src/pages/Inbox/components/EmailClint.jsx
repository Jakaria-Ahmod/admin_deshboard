import React, { useState } from 'react';
import {
  Inbox,
  Star,
  Send,
  FileText,
  Trash2,
  Archive,
  Tag,
  Plus,
  Search,
  MoreVertical,
} from 'lucide-react';

const folders = [
  { id: 'inbox', name: 'Inbox', icon: <Inbox size={18} /> },
  { id: 'starred', name: 'Starred', icon: <Star size={18} /> },
  { id: 'sent', name: 'Sent', icon: <Send size={18} /> },
  { id: 'drafts', name: 'Drafts', icon: <FileText size={18} /> },
  { id: 'spam', name: 'Spam', icon: <Trash2 size={18} /> },
  { id: 'archive', name: 'Archive', icon: <Archive size={18} /> },
];

const labels = [
  { id: 'primary', name: 'Primary', color: 'bg-teal-500' },
  { id: 'social', name: 'Social', color: 'bg-blue-500' },
  { id: 'work', name: 'Work', color: 'bg-orange-500' },
  { id: 'friends', name: 'Friends', color: 'bg-purple-500' },
];

const mockEmails = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    subject: 'Welcome to our service!',
    body: 'Thank you for signing up...',
    date: '2024-08-01',
    read: false,
    folder: 'inbox',
    labels: ['primary'],
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'New Features Released',
    body: 'Check out the latest updates...',
    date: '2024-08-02',
    read: true,
    folder: 'inbox',
    labels: ['social'],
  },
  {
    id: '3',
    name: 'Admin',
    email: 'admin@company.com',
    subject: 'Your Invoice for August',
    body: 'Please find the attached invoice...',
    date: '2024-08-03',
    read: false,
    folder: 'starred',
    labels: ['work'],
  },
];

const EmailClient = () => {
  const [selectedFolder, setSelectedFolder] = useState('inbox');

  const filteredEmails = mockEmails.filter(
    email => email.folder === selectedFolder
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r p-4">
        <button className="w-full flex items-center gap-2 px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700">
          <Plus size={18} /> Compose
        </button>
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Folders
          </h3>
          <ul className="space-y-1">
            {folders.map(folder => (
              <li
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gray-100 ${
                  selectedFolder === folder.id ? 'bg-gray-200 font-medium' : ''
                }`}
              >
                {folder.icon}
                <span>{folder.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Labels
          </h3>
          <ul className="space-y-1">
            {labels.map(label => (
              <li
                key={label.id}
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
              >
                <span className={`w-2 h-2 rounded-full ${label.color}`}></span>
                <span>{label.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold capitalize">{selectedFolder}</h1>
          <div className="flex items-center gap-2">
            <Search size={18} className="text-gray-500" />
            <MoreVertical size={18} className="text-gray-500" />
          </div>
        </div>
        <ul className="space-y-4">
          {filteredEmails.map(email => (
            <li
              key={email.id}
              className={`p-4 border rounded-lg hover:bg-gray-100 transition ${
                !email.read ? 'bg-white shadow' : 'bg-gray-50'
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{email.name}</p>
                  <p className="text-sm text-gray-600">{email.subject}</p>
                  <p className="text-xs text-gray-400">{email.body}</p>
                </div>
                <span className="text-sm text-gray-400">{email.date}</span>
              </div>
              <div className="mt-2 flex gap-2">
                {email.labels.map(labelId => {
                  const label = labels.find(l => l.id === labelId);
                  return (
                    <span
                      key={labelId}
                      className={`text-xs px-2 py-0.5 rounded-full text-white ${label?.color}`}
                    >
                      {label?.name}
                    </span>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default EmailClient;
