"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => {
  // fungsi buat smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
      {...props}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {[
          { name: "About", id: "about" },
          { name: "Experience", id: "experience" },
          { name: "Certificate", id: "certificate" },
          { name: "Projects", id: "projects" },
        ].map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink asChild>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className="hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
