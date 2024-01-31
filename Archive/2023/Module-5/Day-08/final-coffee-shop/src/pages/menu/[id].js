import { Button, Container, TextField, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function MenuItem() {
  const router = useRouter();
  const { id } = router.query;
  const [menuItem, setMenuItem] = useState({});
  const [order, setOrder] = useState({});

  async function fetchMenuItem() {
    const response = await fetch(`/api/menu/${id}`);
    const data = await response.json();
    setMenuItem(data);
  }

  async function submitOrder() {
    const response = await fetch(`/api/order`, {
      method: "POST",
      body: JSON.stringify({ ...order, menuItemId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  }

  useEffect(() => {
    if (id) {
      fetchMenuItem();
    }
  }, [id]);

  return (
    <>
      <Container>
        <Typography variant="h1">{menuItem.name}</Typography>
        <Typography variant="h2">{menuItem.price}</Typography>
        <Typography variant="body1">{menuItem.description}</Typography>
        <img src={menuItem.photoUrl} alt={menuItem.name} />
        <Stack spacing={2}>
          <TextField
            label={"Name"}
            value={order.name}
            onChange={(e) => setOrder({ ...order, name: e.target.value })}
          />
          <TextField
            label={"Email"}
            value={order.email}
            onChange={(e) => setOrder({ ...order, email: e.target.value })}
          />
          <TextField
            label={"Phone"}
            value={order.phone}
            onChange={(e) => setOrder({ ...order, phone: e.target.value })}
          />
          <TextField
            label={"Address"}
            value={order.address}
            onChange={(e) => setOrder({ ...order, address: e.target.value })}
          />
          <TextField
            label={"City"}
            value={order.city}
            onChange={(e) => setOrder({ ...order, city: e.target.value })}
          />
          <TextField
            label={"State"}
            value={order.state}
            onChange={(e) => setOrder({ ...order, state: e.target.value })}
          />
          <TextField
            label={"Zip"}
            value={order.zip}
            onChange={(e) => setOrder({ ...order, zip: e.target.value })}
          />
          <Button onClick={submitOrder}>Submit Order</Button>
        </Stack>
      </Container>
    </>
  );
}
