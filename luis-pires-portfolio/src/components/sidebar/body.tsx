"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks } from "./constant";

export default function SidebarBody() {
  const pathname = usePathname();
  const router = useRouter();
  const [activePage, setActivePage] = useState<string>(pathname);
  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  const renderButtons = () => {
    return navigationLinks.map((item) => {
      return (
        <button
          key={item.path}
          type="button"
          className={activePage === item.path ? "active" : ""}
          onClick={() => router.push(item.path)}
        >
          <h2 className="heading-secondary">{item.name}</h2>
        </button>
      );
    });
  };
  return <div className="sidebar-body">{renderButtons()}</div>;
}
