import { useState, useRef } from "react";
import { Home, Search, User, Mail, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Search", url: "/search", icon: Search },
  { title: "About", url: "/about", icon: User },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    return 1;
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={dockRef}
        className="flex items-end gap-2 px-4 py-3 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => (
          <NavLink
            key={item.title}
            to={item.url}
            end={item.url === "/"}
            onMouseEnter={() => setHoveredIndex(index)}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 transition-all duration-300 ease-out ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
            style={{
              transform: `scale(${getScale(index)}) translateY(${
                getScale(index) === 1.5 ? "-8px" : getScale(index) === 1.25 ? "-4px" : "0"
              })`,
            }}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`p-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-primary/10"
                      : "hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <span
                  className="text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  {item.title}
                </span>
              </>
            )}
          </NavLink>
        ))}
        
        <div className="w-px h-8 bg-border/50 mx-1" />
        
        <button
          onMouseEnter={() => setHoveredIndex(navItems.length)}
          className="relative flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-out"
          style={{
            transform: `scale(${getScale(navItems.length)}) translateY(${
              getScale(navItems.length) === 1.5 ? "-8px" : getScale(navItems.length) === 1.25 ? "-4px" : "0"
            })`,
          }}
        >
          <div className="p-3 rounded-xl hover:bg-muted transition-colors">
            <LogIn className="h-5 w-5" />
          </div>
          <span
            className="text-xs font-medium whitespace-nowrap transition-opacity"
            style={{
              opacity: hoveredIndex === navItems.length ? 1 : 0,
            }}
          >
            Sign In
          </span>
        </button>
      </div>
    </div>
  );
}
