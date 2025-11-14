import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaBuilding, FaBars, FaTimes, FaInfoCircle, FaHistory, FaUsers } from "react-icons/fa";
import { cn } from "../utils";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: FaHome, label: "Dashboard", path: "/admin" },
    { icon: FaBuilding, label: "Register Company", path: "/admin/register-company" },
    { icon: FaHistory, label: "Company History", path: "/admin/history" },
    { icon: FaUsers, label: "Registered Students", path: "/admin/students" }
  ];

  const bottomNavItems = [
    { icon: FaInfoCircle, label: "About", path: "/admin/about" }
  ];

  return (
    <>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-20 left-4 z-40 md:hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
      >
        {isCollapsed ? <FaBars className="w-4 h-4" /> : <FaTimes className="w-4 h-4" />}
      </button>

      <aside
        className={cn(
          "fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] bg-card border-r transition-all duration-300 ease-in-out z-30",
          isCollapsed ? "w-0 md:w-16" : "w-64"
        )}
      >
        <div className="flex flex-col h-full p-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex ml-auto mb-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
          >
            {isCollapsed ? <FaBars className="w-4 h-4" /> : <FaTimes className="w-4 h-4" />}
          </button>

          <nav className="flex-1 space-y-0 flex flex-col">
            {/* Top nav items */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                    isCollapsed && "justify-center"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </NavLink>
            ))}

            {/* Spacer to push bottom items down */}
            <div className="flex-1"></div>

            {/* Bottom nav items */}
            {bottomNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                    isCollapsed && "justify-center"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
