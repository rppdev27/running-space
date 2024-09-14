"use client";

import { useRouter } from "next/navigation";
import { useBearStore } from "@/provider/store";

import { Bell, Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SideMenu = () => { // Renamed component to start with an uppercase letter
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", icon: Home, route: "/dashboard" },
    // { label: "Cover", icon: Users, route: "/dashboard/cover" },
    { label: "Mempelai", icon: ShoppingCart, route: "/dashboard/profil" },
    { label: "Acara", icon: Bell, route: "/dashboard/acara" },
    { label: "Galeri", icon: Package, route: "/dashboard/acara", isActive: true },
    { label: "Kisah", icon: LineChart, route: "/dashboard/kisah" },
    { label: "Hadiah", icon: Bell, route: "/dashboard/hadiah" },
    { label: "Musik", icon: ShoppingCart, route: "/dashboard/musik" },
    // { label: "Turut Undang", icon: LineChart, route: "/dashboard/turut-undang" },
    { label: "Tamu", icon: Users, route: "#", badge: 6 },
    { label: "Kirim", icon: LineChart, route: "#" },
    // { label: "Paket", icon: LineChart, route: "#" },
    // { label: "Add On", icon: LineChart, route: "#" },
  ];

  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <img
              src={"https://asset.menica.pro/menicav4/menica_greenlogo.png"}
              alt="logo menica"
              style={{
                width: "45%",
              }}
            />
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            {/* Looping through menu items */}
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    item.isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary cursor-pointer"
                  }`}
                  onClick={() => router.push(item.route)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-700">
                      {item.badge}
                    </Badge>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader
                className="p-2 pt-0 md:p-4"
                style={{
                  fontFamily: "Kanit",
                }}
              >
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Akses semua fitur dan tema premium tanpa batas</CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button
                  size="sm"
                  className="w-full bg-green-700"
                  style={{
                    fontFamily: "Kanit",
                  }}
                >
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
