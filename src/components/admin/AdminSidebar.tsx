import { Home, FileText, Edit3, LogOut, PenSquare } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { label: "Dashboard", href: "/admin/home", icon: Home },
  { label: "Blogs", href: "/admin/blogs", icon: FileText },
  { label: "Drafts", href: "/admin/drafts", icon: Edit3 },
  { label: "New Blog", href: "/admin/blogs/new", icon: PenSquare },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { open: sidebarOpen } = useSidebar();

  const handleLogout = async () => {
    localStorage.removeItem('adminAccessToken');
    localStorage.removeItem('adminRefreshToken');
    navigate('/admin/login');
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <Sidebar collapsible="icon">
      <div className="flex items-center justify-between p-4 border-b">
        {sidebarOpen && (
          <div>
            <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage your content</p>
          </div>
        )}
        <SidebarTrigger className={cn(!sidebarOpen && "mx-auto")} />
      </div>

      <SidebarContent>
        <SidebarGroup>
          {sidebarOpen && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <NavLink to={item.href}>
                      <item.icon className="h-5 w-5" />
                      {sidebarOpen && <span>{item.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator />

      <div className="p-4">
        <Button
          variant="destructive"
          className={cn(
            "w-full gap-3",
            sidebarOpen ? "justify-start" : "justify-center px-2"
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          {sidebarOpen && "Logout"}
        </Button>
      </div>
    </Sidebar>
  );
}

