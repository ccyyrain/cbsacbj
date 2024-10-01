import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface MenuItem {
  name: string;
  link?: string;
  subItems?: MenuItem[];
}

interface NavbarDesktopViewProps {
  menuItems: MenuItem[];
  isActive: (link?: string) => boolean;
  isSubItemActive: (subItems?: MenuItem[]) => boolean;
}

const NavbarDesktopView: React.FC<NavbarDesktopViewProps> = ({
  menuItems,
  isActive,
  isSubItemActive,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const toggleDropdown = (menuName: string) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const renderSocialIcons = () => (
    <>
      <IconButton
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <LinkedInIcon />
      </IconButton>
    </>
  );

  const renderSubItems = (subItems: MenuItem[]) => (
    <Box
      className="navbar-dropdown"
      sx={{
        position: "absolute",
        top: "100%",
        backgroundColor: "white",
        zIndex: 1,
        display: "block",
        width: "auto",
        padding: "8px",
        minWidth: "200px",
      }}
    >
      {subItems.map((subItem) => (
        <Button
          key={subItem.name}
          component={Link}
          to={subItem.link ?? "#"}
          onClick={() => setOpenDropdown(null)}
          sx={{
            fontWeight: isActive(subItem.link) ? "bold" : "normal",
            textDecoration: isActive(subItem.link) ? "underline" : "none",
            color: "black",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: "8px 16px",
            width: "100%",
          }}
        >
          {subItem.name}
        </Button>
      ))}
    </Box>
  );

  const renderMenuItem = (item: MenuItem) => {
    const isItemActive = isActive(item.link) || isSubItemActive(item.subItems);

    return (
      <Box
        key={item.name}
        sx={{ position: "relative", mx: 2 }}
        ref={openDropdown === item.name ? dropdownRef : null}
      >
        {item.subItems ? (
          <div className="navbar-item-with-dropdown">
            <Button
              onClick={() => toggleDropdown(item.name)}
              sx={{
                fontWeight: isItemActive ? "bold" : "normal",
                textDecoration: isItemActive ? "underline" : "none",
                color: "white",
              }}
            >
              {item.name}
            </Button>
            {openDropdown === item.name && renderSubItems(item.subItems)}
          </div>
        ) : (
          <Button
            component={Link}
            to={item.link ?? "#"}
            onClick={() => setOpenDropdown(null)}
            sx={{
              fontWeight: isItemActive ? "bold" : "normal",
              textDecoration: isItemActive ? "underline" : "none",
              color: "white",
            }}
          >
            {item.name}
          </Button>
        )}
      </Box>
    );
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#3498db",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" className="navbar-logo">
            <img
              src="/path-to-logo.png" //TODO: placeholder for logo
              alt="Website Logo"
              style={{ height: "40px" }}
            />
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          {menuItems.map(renderMenuItem)}
          {renderSocialIcons()}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarDesktopView;
