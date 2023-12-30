import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main>
      <AdminNavbar />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
