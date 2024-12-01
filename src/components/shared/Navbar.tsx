import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_copy_1_-removebg-preview.png";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Menu items for the navbar
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="text-white text-lg font-semibold hover:text-yellow-500 transition duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Cart and Login Icons for Desktop */}
      <div className="hidden md:flex space-x-6">
        <Link to="/cart" className="text-white text-lg">
          <ShoppingCartOutlined className="text-2xl" />
        </Link>
        <Link to="/login" className="text-white text-lg">
          <UserOutlined className="text-2xl" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button
        type="text"
        className="md:hidden text-white"
        icon={<MenuOutlined className="text-2xl" />}
        onClick={() => setDrawerOpen(true)}
      />

      {/* Mobile Drawer */}
      <Drawer
        title={<h2 className="text-blue-600 font-bold">Menu</h2>}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={isDrawerOpen}
        headerStyle={{
          background: "#1D4ED8", // Blue background for the header
        }}
        bodyStyle={{
          backgroundColor: "#f9f9f9",
          padding: "16px",
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="block text-gray-700 text-lg font-semibold mb-4 hover:text-blue-600 transition"
            onClick={() => setDrawerOpen(false)} // Close drawer after clicking
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/cart"
          className="block text-gray-700 text-lg font-semibold mb-4 hover:text-blue-600 transition"
          onClick={() => setDrawerOpen(false)} // Close drawer after clicking
        >
          <ShoppingCartOutlined className="mr-2" />
          Cart
        </Link>
        <Link
          to="/login"
          className="block text-gray-700 text-lg font-semibold mb-4 hover:text-blue-600 transition"
          onClick={() => setDrawerOpen(false)} // Close drawer after clicking
        >
          <UserOutlined className="mr-2" />
          Login / Register
        </Link>
      </Drawer>
    </nav>
  );
};

export default Navbar;
