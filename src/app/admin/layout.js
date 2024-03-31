"use client";
import AdminSidebar from "@/src/components/Admin/AdminSidebar/AdminSidebar";
import { useEffect, useRef, useState } from "react";

const AdminLayout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const sideBarRef = useRef();

  useEffect(() => {
    if (sideBarRef.current) {
      setSidebarHeight(sideBarRef.current.clientHeight);
    }
  }, [toggleSidebar]);

  return (
    <section className="flex  lg:flex-row flex-col justify-between gap-5 py-4 pr-5 lg:pr-10">
      {/* sidebar */}
      <div ref={sideBarRef}>
        <AdminSidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
      </div>
      {/* main content */}
      <main
        style={{ height: sidebarHeight }}
        className={`flex-1 scrollbar-hide  overflow-y-auto font-liador pl-5 lg:pl-10`}
      >
        {children}
      </main>
    </section>
  );
};

export default AdminLayout;
