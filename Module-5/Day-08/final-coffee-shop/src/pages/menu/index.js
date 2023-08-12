import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function AddMenuItem() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    photoUrl: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        router.push("/");
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Add Menu Item</h1>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <TextField
            label="Image URL"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
