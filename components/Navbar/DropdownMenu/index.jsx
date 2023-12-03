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

const DropdownMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kadın</NavigationMenuTrigger>
          <NavigationMenuContent asChild>
            <div className="flex p-4 gap-28">
              <ul>
                <li>Kadın</li>
                {["Üst Giyim", "Dış Giyim", "İç Giyim", "Takı & Aksesuar", "Çanta"].map((item) => (
                  <li className="whitespace-nowrap" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative w-64 aspect-[625/417]">
                <Image src="/header-menu/men.jpg" width={500} height={500} />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Erkek</NavigationMenuTrigger>
          <NavigationMenuContent>content 2</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownMenu;
