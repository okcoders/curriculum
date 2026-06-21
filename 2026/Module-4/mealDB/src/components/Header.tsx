interface HeaderProps {
  title: string;
  color?: string;
  size?: number;
}

function Header({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}

export default Header;
