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
import Image from "next/image";
import { navbarMenuItems } from "@/constants/navbarMenuItems";

const DropdownMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarMenuItems.map((menuItem) => (
          <NavigationMenuItem key={menuItem.name}>
            <NavigationMenuTrigger>{menuItem.name}</NavigationMenuTrigger>
            <NavigationMenuContent asChild>
              <ul style={{ backgroundImage: `url(${menuItem.bgImage})` }}>
                <li>{menuItem.name}</li>
                {menuItem.items.map((item) => (
                  <li className="whitespace-nowrap" key={menuItem.href + item.name}>
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
