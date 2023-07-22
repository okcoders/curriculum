import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  async function fetchMenu() {
    const response = await fetch("/api/coffee/menu");
    const { menu } = await response.json();
    setMenu(menu);
  }

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <h1>Menu</h1>
      {menu.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
}
