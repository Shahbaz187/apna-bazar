import React from 'react'

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar d-flex justify-content-between align-items-center px-3 px-md-5">
      <div className="logo-text">
        <h1>Apna Bazaar</h1>
        <h1 className="m-logo d-none">AB Shop
          
        </h1>
      </div>
      <div className="logout-btn">
        <button>Logout</button>
      </div>
    </nav>
  );
}

export default AdminNavbar