import Head from "next/head";
import {
  Typography,
  Grid,
  Button,
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <>
      <Head>
        <title>Final Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h1">Final Coffee Shop</Typography>
        <Button variant="contained" sx={{ height: "60px" }}>
          <Link style={{ textDecoration: "none" }} href="/menu">
            <Typography color="white" variant="body1">
              Add Menu Item
            </Typography>
          </Link>
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {menuItems.map((menuItem) => (
          <Grid item xs={12} sm={6} md={4} key={menuItem.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={menuItem.photoUrl}
                alt={menuItem.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menuItem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menuItem.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {menuItem.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  <Link
                    href={`/menu/${menuItem._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="body1" color="white">
                      Order Now
                    </Typography>
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
