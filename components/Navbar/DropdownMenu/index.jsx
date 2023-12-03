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
              <div className="flex p-4 gap-28">
                <ul>
                  <li>{menuItem.name}</li>
                  {menuItem.items.map((item) => (
                    <li className="whitespace-nowrap" key={menuItem.href + item.name}>
                      {item.name}
                    </li>
                  ))}
                </ul>
                <div className="relative w-64 aspect-[625/417]">
                  <Image src={menuItem.imgSrc} width={500} height={500} />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownMenu;
