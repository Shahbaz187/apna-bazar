import React from 'react'
import  "./Admin.css"
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
const AdminLayout = ({children}) => {
  return (
    <>
    <div className="d-flex">
      <AdminSidebar/>
      <div className="w-100">
    <AdminNavbar/>
    <div className="p-3">
    <div>{children}</div>
    </div>
      </div>
    </div>
    </>
  )
}

export default AdminLayout