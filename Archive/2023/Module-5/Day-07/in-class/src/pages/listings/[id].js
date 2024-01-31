import {
  CircularProgress,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListingIdPage() {
  const router = useRouter();
  const { id } = router.query;

  const [originalListing, setOriginalListing] = useState({});
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchListing() {
    setLoading(true);
    const response = await fetch(`/api/listings/${id}`);
    const data = await response.json();
    setListing(data);
    setOriginalListing(data);
    setLoading(false);
  }

  async function deleteListingHandler() {
    const response = await fetch(`/api/listings/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    router.push("/listings");
  }

  useEffect(() => {
    if (!id) return;
    fetchListing();
  }, [id]);

  async function handleSubmit() {
    const response = await fetch(`/api/listings/${id}`, {
      method: "PUT",
      body: JSON.stringify(listing),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setListing(data);
    setOriginalListing(data);
  }

  return (
    <>
      {loading && <CircularProgress />}
      {!listing?._id && !loading && <Typography>Listing not found</Typography>}
      {listing?._id && (
        <>
          <Typography variant="h1">Listing Detail Page</Typography>
          <Stack spacing={2}>
            <TextField
              value={listing.name}
              onChange={(e) => setListing({ ...listing, name: e.target.value })}
              label="Name"
              variant="standard"
            />
            <TextField
              value={listing.summary}
              onChange={(e) =>
                setListing({ ...listing, summary: e.target.value })
              }
              label="Summary"
              variant="standard"
            />
            <Button
              disabled={
                JSON.stringify(originalListing) === JSON.stringify(listing)
              }
              onClick={() => handleSubmit()}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </Stack>
          <Button
            onClick={deleteListingHandler}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </>
      )}
    </>
  );
}
