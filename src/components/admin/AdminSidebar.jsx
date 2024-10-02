import React from 'react'
import { IoHome, IoSettings } from 'react-icons/io5';
import { MdShoppingBag, MdSpaceDashboard } from 'react-icons/md';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="d-none d-lg-block pc-admin-sidebar">
        <ul>
          <Link to={'/'}>
            <IoHome size={21} color="black" />
            <span>Home</span>
          </Link>
          <Link to={"/admin/dashboard"}>
            <MdSpaceDashboard size={21} color="black" />
            <span>Dashboard</span>
          </Link>
          <Link to={"/admin/add_product"}>
            <MdShoppingBag size={21} color="black" />
            <span>Add Product</span>
          </Link>
          <Link to={"/admin/offers"}>
            <RiDiscountPercentFill size={21} color="black" />
            <span>Offers</span>
          </Link>
          <Link to={"/admin/analytics"}>
            <TbDeviceAnalytics size={21} color="black" />
            <span>Analytics</span>
          </Link>
          <Link to={"/admin//settings"}>
            <IoSettings size={21} color="black" />
            <span>Settings</span>
          </Link>
        </ul>
      </div>
      <div className="d-d-block d-lg-none mb-admin-sidebar">
        <ul>
          <Link to={'/'}>
            <IoHome size={21} color="black" />
          </Link>
          <Link to={"/admin/dashboard"}>
            <MdSpaceDashboard size={21} color="black" />
          </Link>
          <Link to={"/admin/add_product"}>
            <MdShoppingBag size={21} color="black" />
          </Link>
          <Link to={"/admin/offers"}>
            <RiDiscountPercentFill size={21} color="black" />
          </Link>
          <Link to={"/admin/analytics"}>
            <TbDeviceAnalytics size={21} color="black" />
          </Link>
          <Link to={"/admin//settings"}>
            <IoSettings size={21} color="black" />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar