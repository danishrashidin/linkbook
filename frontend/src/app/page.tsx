"use client"
import { gql, useQuery } from "@apollo/client";
import { Fragment, useEffect } from "react";
import { Stack, Button, Box, Grid } from "@mui/material";
import AddLinkCard from "@/components/ui/links/AddLinkCard";

export default function Home() {
  const { data, loading } = useQuery(gql`
    query {
      links {
        id
        url
        context
      }
    }
    `)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Stack direction='column' flexGrow={1} height={'100%'} bgcolor='grey.100' padding={2}>
      <Grid container spacing={2} columns={3}>
        <Grid size={1}>
          <AddLinkCard />
        </Grid>
        <Grid size={1}>

        </Grid>
      </Grid>
    </Stack>
  );
}
