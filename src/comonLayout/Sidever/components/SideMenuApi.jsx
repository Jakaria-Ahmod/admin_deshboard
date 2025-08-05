// src/data/routesData.js

import {
  MdDashboard,
  MdFavorite,
  MdInbox,
  MdSettings,
  MdLogout,
} from 'react-icons/md';
import {
  FaProductHunt,
  FaListUl,
  FaCalendarAlt,
  FaTasks,
  FaPhoneAlt,
  FaFileInvoice,
  FaUsers,
  FaTable,
  FaCubes,
} from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';
import { BsUiRadiosGrid } from 'react-icons/bs';

export const routesData = [
  {
    id: 1,
    path: '/',
    name: 'Dashboard',
    icon: <MdDashboard />,
    element: <div>Dashboard</div>,
  },
  // {
  //   id: 3,
  //   path: '/Products',
  //   name: 'Products',
  //   icon: <FaProductHunt />,
  //   element: <div>Products</div>,
  // },
  {
    id: 4,
    path: '/Favorites',
    name: 'Favorites',
    icon: <MdFavorite />,
    element: <div>Favorites</div>,
  },
  {
    id: 5,
    path: '/Inbox',
    name: 'Inbox',
    icon: <MdInbox />,
    element: <div>Inbox</div>,
  },
  {
    id: 6,
    path: '/OrderLists',
    name: 'Order Lists',
    icon: <FaListUl />,
    element: <div>OrderLists</div>,
  },
  {
    id: 7,
    path: '/ProductStock',
    name: 'Product Stock',
    icon: <FaCubes />,
    element: <div>ProductStock</div>,
  },
  {
    id: 8,
    path: '/Pricing',
    name: 'Pricing',
    icon: <AiFillTag />,
    element: <div>Pricing</div>,
  },
  {
    id: 9,
    path: '/Calender',
    name: 'Calendar',
    icon: <FaCalendarAlt />,
    element: <div>Calender</div>,
  },
  {
    id: 10,
    path: '/ToDo',
    name: 'ToDo',
    icon: <FaTasks />,
    element: <div>ToDo</div>,
  },
  {
    id: 11,
    path: '/Contact',
    name: 'Contact',
    icon: <FaPhoneAlt />,
    element: <div>Contact</div>,
  },
  {
    id: 12,
    path: '/Invoice',
    name: 'Invoice',
    icon: <FaFileInvoice />,
    element: <div>Invoice</div>,
  },
  {
    id: 13,
    path: '/UIElements',
    name: 'UI Elements',
    icon: <BsUiRadiosGrid />,
    element: <div>UIElements</div>,
  },
  {
    id: 14,
    path: '/Team',
    name: 'Team',
    icon: <FaUsers />,
    element: <div>Team</div>,
  },
  {
    id: 15,
    path: '/Table',
    name: 'Table',
    icon: <FaTable />,
    element: <div>Table</div>,
  },
  {
    id: 16,
    path: '/Settings',
    name: 'Settings',
    icon: <MdSettings />,
    element: <div>Settings</div>,
  },
  {
    id: 17,
    path: '/',
    name: 'Logout',
    icon: <MdLogout />,
    element: <div>Logout</div>,
  },
];

export default routesData;
