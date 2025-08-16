import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  IconBasket,
  IconDashboard,
  IconHelp,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

type RoutePath = "/dashboard" | "/products" | "/users" | "/settings" | "/help";

const titleMap: Record<RoutePath, string> = {
  "/dashboard": "Dashboard",
  "/products": "Products",
  "/users": "Users",
  "/settings": "Settings",
  "/help": "Help",
};

const iconMap: Record<
  RoutePath,
  React.ComponentType<{ className?: string }>
> = {
  "/dashboard": IconDashboard,
  "/products": IconBasket,
  "/users": IconUsers,
  "/settings": IconSettings,
  "/help": IconHelp,
};

export function SiteHeader() {
  const location = useLocation();
  const currentPath = location.pathname as RoutePath;
  const CurrentIcon = iconMap[currentPath] || IconDashboard;
  const currentTitle = titleMap[currentPath] || "Dashboard";

  return (
    <header className="flex h-[--header-height] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[--header-height]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <CurrentIcon className="size-5 text-blue-950" />
        <h1 className="text-base font-medium">{currentTitle}</h1>
      </div>
    </header>
  );
}
