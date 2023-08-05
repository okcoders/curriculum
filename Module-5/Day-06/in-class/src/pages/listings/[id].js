import { CircularProgress, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListingIdPage() {
  const router = useRouter();
  const { id } = router.query;

  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchListing() {
    setLoading(true);
    const response = await fetch(`/api/listings/${id}`);
    const data = await response.json();
    setListing(data);
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

  return (
    <>
      {loading && <CircularProgress />}
      {!listing?._id && !loading && <Typography>Listing not found</Typography>}
      {listing?._id && (
        <>
          <Typography variant="h1">Listing Detail Page</Typography>
          <Typography variant="h2">{listing.name}</Typography>
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
