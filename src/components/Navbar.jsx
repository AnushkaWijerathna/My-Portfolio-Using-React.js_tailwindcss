//List of all the links in the Navbar, it contains the object with name and href for each link. It is used to render the links in the Navbar.
//Since there are no pages(only home page), the different sections of the home page are represented as links in the navbar,
//and the href is the id of the <div> of that section, so that when the user clicks on the link, it will scroll to the corresponding section of the home page.

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

//The Links a home,about, skills, projects, contact
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  //We use 'cn' to conditionally apply CSS classes, the first condition is normal position of the navbar, and the second condition is when the user scrolls down,
  // the navbar becomes glassy.,

  //👉 This code detects whether the user has scrolled more than 10px and updates state accordingly, while ensuring the scroll listener is removed when the component is destroyed.
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // If user scrolls down more than 10px -> true, else false.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-sm shadow-xs"
          : "py-5",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          className="text-2xl font-bold text-primary items-center flex"
          href="#hero"
        >
          <span className="required z-10">
            <span className="text-glow text-foreground">AnushDev</span>
          </span>
        </a>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile version: Since it is vertical we need to stack the links, to that we need to use a another div to stack them*/}
        {/* When the button is clicked, it calls setIsMobileMenuOpen and toggles the state:
        (rev) => !prev means if the previous value is true it becomes false, and if false it becomes true.*/}

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            " transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu when a link is clicked
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
