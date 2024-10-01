import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface MenuItem {
  name: string;
  link?: string;
  subItems?: MenuItem[];
}

interface NavbarMobileViewProps {
  menuItems: MenuItem[];
  isActive: (link?: string) => boolean;
  isSubItemActive: (subItems?: MenuItem[]) => boolean;
}

const NavbarMobileView: React.FC<NavbarMobileViewProps> = ({
  menuItems,
  isActive,
  isSubItemActive,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const renderMenuItems = (items: MenuItem[]) => (
    <List>
      {items.map((item) => (
        <div key={item.name}>
          {item.subItems ? (
            <>
              <ListItem>
                <ListItemText
                  primary={item.name}
                  sx={{
                    fontWeight:
                      isActive(item.link) || isSubItemActive(item.subItems)
                        ? "bold"
                        : "normal",
                    textDecoration:
                      isActive(item.link) || isSubItemActive(item.subItems)
                        ? "underline"
                        : "none",
                  }}
                  onClick={() => {}}
                />
              </ListItem>
              <List sx={{ pl: 4 }}>
                {item.subItems.map((subItem) => (
                  <ListItem
                    component={Link}
                    to={subItem.link ?? "#"}
                    key={subItem.name}
                    onClick={toggleDrawer(false)}
                    sx={{
                      fontWeight: isActive(subItem.link) ? "bold" : "normal",
                      textDecoration: isActive(subItem.link)
                        ? "underline"
                        : "none",
                    }}
                  >
                    <ListItemText primary={subItem.name} />
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <ListItem
              component={Link}
              to={item.link ?? "#"}
              onClick={toggleDrawer(false)}
              sx={{
                fontWeight: isActive(item.link) ? "bold" : "normal",
                textDecoration: isActive(item.link) ? "underline" : "none",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          )}
          <Divider />
        </div>
      ))}
    </List>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Link to="/" className="navbar-logo">
          <img
            src="/path-to-logo.png" //TODO
            alt="Website Logo"
            style={{ height: "40px" }}
          />
        </Link>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {renderMenuItems(menuItems)}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileView;
