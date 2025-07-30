import {
  AudioWaveform,
  BadgeDollarSign,
  Box,
  CircleUserRound,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  HandCoins,
  Map,
  PieChart,
  Settings,
  Wallet,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import api from "../../api/api";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Reporting Dashboard",
      url: "#",
      icon: BadgeDollarSign,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        }
      ],
    },
    {
      title: "Inventory",
      url: "#",
      icon: Box,
      items: [
        {
          title: "Dashboard",
          url: "/inventory",
        },
        {
          title: "Categories",
          url: "/inventory/categories",
        },
        {
          title: "Products",
          url: "/inventory/products",
        }
      ],
    },
    {
      title: "Sales",
      url: "#",
      icon: BadgeDollarSign,
      items: [
        {
          title: "Dashboard",
          url: "/sales/dashboard",
        },
        {
          title: "Sales",
          url: "/sales/list",
        }
      ],
    },
    {
      title: "Billing",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Billing",
          url: "/billing",
        }
      ],
    },
    {
      title: "Accounting",
      url: "#",
      icon: HandCoins,
      items: [
        {
          title: "Dashboard",
          url: "/accounting",
        },
        {
          title: "Income",
          url: "/accounting/income",
        },
        {
          title: "Expenses",
          url: "/accounting/expenses",
        }
      ],
    },
    {
      title: "Purchasing / Providers",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Dashboard",
          url: "/purchasing",
        },
        {
          title: "Purchases",
          url: "/purchasing/purchases",
        },
        {
          title: "Providers",
          url: "/purchasing/providers",
        }
      ],
    },
    {
      title: "Clients",
      url: "#",
      icon: CircleUserRound,
      items: [
        {
          title: "Clients",
          url: "/clients",
        }
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const UserData = async () => {
      try {
        const res = await api.get("/me", { withCredentials: true });
        setUser(res?.data);
      } catch (error) {}
    };

    UserData();
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}