import React from "react";
import { NavLink } from "react-router-dom";


const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-sm fixed left-0 top-0 p-6">
      <h2 className="text-xl font-bold text-[#5A2E1B] mb-8">
        Smart Folk Admin
      </h2>

      <nav className="space-y-3">
  <NavLink
    to="/admin"
    className={({ isActive }) =>
      `block px-3 py-2 rounded-lg font-medium ${
        isActive
          ? "bg-orange-100 text-[#5A2E1B]"
          : "text-gray-700 hover:text-[#C04A1A]"
      }`
    }
  >
    Dashboard
  </NavLink>

  <NavLink to="/admin/artists" className={({ isActive }) =>
    `block px-3 py-2 rounded-lg font-medium ${
      isActive
        ? "bg-orange-100 text-[#5A2E1B]"
        : "text-gray-700 hover:text-[#C04A1A]"
    }`
  }>
    Artists
  </NavLink>

  <NavLink to="/admin/bookings" className={({ isActive }) =>
    `block px-3 py-2 rounded-lg font-medium ${
      isActive
        ? "bg-orange-100 text-[#5A2E1B]"
        : "text-gray-700 hover:text-[#C04A1A]"
    }`
  }>
    Bookings
  </NavLink>

  <NavLink to="/admin/users" className={({ isActive }) =>
    `block px-3 py-2 rounded-lg font-medium ${
      isActive
        ? "bg-orange-100 text-[#5A2E1B]"
        : "text-gray-700 hover:text-[#C04A1A]"
    }`
  }>
    Users
  </NavLink>
</nav>

    </aside>
  );
};

export default AdminSidebar;
