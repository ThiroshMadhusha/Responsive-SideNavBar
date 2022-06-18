import React from "react";
import "./sidebar.css";

import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
} from "react-icons/md";

import { IoMdLogin } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";

import { NavLink } from "react-router-dom";

import { useState } from "react";

const Sidebar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="sidebar_container">
      <nav>
        {/* Logo */}
        <div className=".logo">
          <VscDashboard className=".logo_icon" />
          <FaTimes
            className=".mobile_cancel_icon"
            onClick={() => setnav(!nav)}
          />
        </div>

              {/* Sub Menus */}
              <ul className=".menu_container">
                  
              </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
