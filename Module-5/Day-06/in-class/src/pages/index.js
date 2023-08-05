import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="OK Coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1">Airbnb</Typography>
    </>
  );
}
