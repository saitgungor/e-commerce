"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navbarMenuItems } from "@/constants/navbarMenuItems";

const DropdownMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarMenuItems.map((menuItem) => (
          <NavigationMenuItem key={menuItem.name}>
            <NavigationMenuTrigger className="text-lg">{menuItem.name}</NavigationMenuTrigger>
            <NavigationMenuContent asChild>
              <ul style={{ backgroundImage: `url(${menuItem.bgImage})` }} className="p-4 flex flex-col gap-1 ">
                <li className="font-semibold text-lg mb-1 cursor-pointer">{menuItem.name}</li>
                {menuItem.items.map((item) => (
                  <li className="whitespace-nowrap cursor-pointer hover:underline" key={menuItem.href + item.name}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownMenu;
