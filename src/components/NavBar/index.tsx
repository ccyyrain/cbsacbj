import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import NavbarDesktopView from "./NavbarDesktopView";
import NavbarMobileView from "./NavbarMobileView";
import { menuItems, MenuItem } from "../../utils/menuItems";

const NavbarContainer: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isActive = (link?: string) => location.pathname === link;
  const isSubItemActive = (subItems?: MenuItem[]) =>
    subItems
      ? subItems.some((subItem) => location.pathname === subItem.link)
      : false;

  return (
    <>
      {isMobile ? (
        <NavbarMobileView
          menuItems={menuItems}
          isActive={isActive}
          isSubItemActive={isSubItemActive}
        />
      ) : (
        <NavbarDesktopView
          menuItems={menuItems}
          isActive={isActive}
          isSubItemActive={isSubItemActive}
        />
      )}
    </>
  );
};

export default NavbarContainer;
