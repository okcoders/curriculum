import {
  Typography,
  Stack,
  Card,
  Dialog,
  TextField,
  DialogContent,
  DialogActions,
  Button,
  CardContent,
  CircularProgress,
  Box,
  CardActionArea,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  async function fetchListings() {
    setLoading(true);
    const response = await fetch("/api/listings");
    const data = await response.json();
    setListings(data.listings);
    setLoading(false);
  }

  async function addListingHandler() {
    const response = await fetch("/api/listings", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setOpen(false);
    router.push(`/listings/${data._id}`);
  }

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h2">Airbnb Listings</Typography>
        <Button
          onClick={() => setOpen(true)}
          sx={{ maxHeight: "50px" }}
          variant="contained"
        >
          Add Listing
        </Button>
      </Stack>
      {loading && (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      )}
      {listings.length === 0 && !loading && (
        <Typography variant="h4">No listings found</Typography>
      )}
      <Stack direction={"column"} spacing={2}>
        {listings.length > 0 &&
          listings.map((listing) => {
            return (
              <Card key={listing._id}>
                <CardActionArea
                  onClick={() => {
                    router.push(`/listings/${listing._id}`);
                  }}
                >
                  <CardContent>
                    <Typography variant="h4">{listing.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </Stack>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Add Listing</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addListingHandler}>Add Listing</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
