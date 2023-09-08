"use client";
import SidebarFooter from "./footer";
import SidebarBody from "./body";
import SidebarHeader from "./header";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </div>
  );
}
