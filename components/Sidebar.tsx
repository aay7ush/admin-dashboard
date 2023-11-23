import { MenuItemProps, MenuLinkProps } from "@/types"
import {
  BadgeHelp,
  FileText,
  Landmark,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  User,
  Users,
  Wallet,
} from "lucide-react"
import MenuLink from "./MenuLink"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <User />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <Wallet />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <Landmark />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <FileText />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Settings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <BadgeHelp />,
      },
    ],
  },
]

export default function Sidebar() {
  return (
    <div className="grid gap-2.5 sticky top-5">
      <div className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium">Aayush Jaiswal</p>
          <p className="text-sm text-muted-foreground">Administrator</p>
        </div>
      </div>

      {menuItems.map((item: MenuItemProps) => (
        <div key={item.title} className="space-y-2.5">
          <p className="font-medium text-primary">{item.title}</p>

          <div className="pl-5">
            {item.list.map((listItem: MenuLinkProps) => (
              <MenuLink
                key={listItem.title}
                title={listItem.title}
                path={listItem.path}
                icon={listItem.icon}
              />
            ))}
          </div>
        </div>
      ))}

      {/* <button
        className={
          "ml-5 -mt-2.5 w-full text-sm flex gap-2 text-secondary-foreground transition duration-200 hover:text-primary hover:bg-primary-foreground p-2 rounded-lg"
        }
      >
        <LogOut />
        <span>Logout</span>
      </button> */}
    </div>
  )
}
