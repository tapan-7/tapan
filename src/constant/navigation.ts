export interface NavItem {
  name: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export const MOBILE_NAV_LINKS: NavItem[] = [
  ...NAV_LINKS,
  { name: "Resume", href: "/resume" },
];
