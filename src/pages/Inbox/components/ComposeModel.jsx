import { useState } from 'react';
import { X, Send, Paperclip, ImageIcon, Smile } from 'lucide-react';

const ComposeModal = ({ isOpen, onClose, onSend }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSend = () => {
    if (to && subject && content) {
      onSend({ to, subject, content });
      setTo('');
      setSubject('');
      setContent('');
      onClose();
    }
  };

  const handleSaveDraft = () => {
    // Optional: save draft to localStorage or server
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">New Message</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          <div>
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700"
            >
              To
            </label>
            <input
              id="to"
              type="email"
              value={to}
              onChange={e => setTo(e.target.value)}
              placeholder="example@mail.com"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              id="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="Subject..."
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Write your message..."
              className="w-full mt-1 px-3 py-2 border rounded-md min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Paperclip className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ImageIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Smile className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              Save Draft
            </button>
            <button
              onClick={handleSend}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;
