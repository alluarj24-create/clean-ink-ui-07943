import { useState, useRef } from "react";
import { Home, BarChart3, FileText, Edit3, PlusCircle, LogOut, Moon, Sun } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const navItems = [
  { title: "Dashboard", url: "/admin/home", icon: Home },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Blogs", url: "/admin/blogs", icon: FileText },
  { title: "Drafts", url: "/admin/drafts", icon: Edit3 },
  { title: "New Post", url: "/admin/blogs/new", icon: PlusCircle },
];

export function AdminFloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    return 1;
  };

  const handleLogout = () => {
    navigate('/admin/login');
  };

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div
          ref={dockRef}
          onMouseLeave={() => setHoveredIndex(null)}
          className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-background/95 backdrop-blur-lg border border-border shadow-lg"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={item.title}
              to={item.url}
              onMouseEnter={() => setHoveredIndex(index)}
              className={({ isActive }) =>
                `relative flex flex-col items-center gap-1 transition-all duration-300 ease-out ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`
              }
              style={{
                transform: `scale(${getScale(index)}) translateY(${
                  getScale(index) === 1.5 ? "-8px" : getScale(index) === 1.25 ? "-4px" : "0"
                })`,
              }}
            >
              <div className="p-3 rounded-xl hover:bg-muted transition-colors">
                <item.icon className="h-5 w-5" />
              </div>
            </NavLink>
          ))}

          <button
            onMouseEnter={() => setHoveredIndex(navItems.length)}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-out"
            style={{
              transform: `scale(${getScale(navItems.length)}) translateY(${
                getScale(navItems.length) === 1.5 ? "-8px" : getScale(navItems.length) === 1.25 ? "-4px" : "0"
              })`,
            }}
          >
            <div className="p-3 rounded-xl hover:bg-muted transition-colors">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </div>
          </button>

          <div className="w-px h-8 bg-border/50 mx-1" />

          <button
            onMouseEnter={() => setHoveredIndex(navItems.length + 1)}
            onClick={() => setShowLogoutDialog(true)}
            className="relative flex flex-col items-center gap-1 text-muted-foreground hover:text-destructive transition-all duration-300 ease-out"
            style={{
              transform: `scale(${getScale(navItems.length + 1)}) translateY(${
                getScale(navItems.length + 1) === 1.5 ? "-8px" : getScale(navItems.length + 1) === 1.25 ? "-4px" : "0"
              })`,
            }}
          >
            <div className="p-3 rounded-xl hover:bg-muted transition-colors">
              <LogOut className="h-5 w-5" />
            </div>
          </button>
        </div>
      </div>

      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logout Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout from the admin panel?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
