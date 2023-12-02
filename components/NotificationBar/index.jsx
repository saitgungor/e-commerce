"use client";
import { notificationItems } from "@/constants/notificationItems";
import { useEffect, useState } from "react";

const NotificationBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextNotificationHandler = () => {
    setActiveIndex((prev) => (prev === notificationItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextNotificationHandler();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ffbba0] text-[#0b0a18] w-full h-6 font-medium overflow-hidden text-sm relative whitespace-nowrap">
      {notificationItems.map((item, index) =>
        activeIndex === index ? (
          <p key={item} className="notification-animation">
            {item}
          </p>
        ) : null
      )}
    </div>
  );
};

export default NotificationBar;
