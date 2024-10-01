export interface MenuItem {
  name: string;
  link?: string;
  subItems?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  {
    name: "About",
    subItems: [
      { name: "Letter", link: "/about/letter" },
      { name: "Leadership Team", link: "/about/team" },
    ],
  },
  {
    name: "Join",
    subItems: [
      { name: "How to Join", link: "/join/how" },
      { name: "Club Membership", link: "/join/membership" },
      { name: "Member Discount", link: "/join/discount" },
    ],
  },
  { name: "Events", link: "/events" },
  { name: "Contact", link: "/contact" },
];
