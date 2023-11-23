export interface MenuLinkProps {
  title: string
  path: string
  icon: JSX.Element
}

export interface MenuItemProps {
  title: string
  list: MenuLinkProps[]
}
