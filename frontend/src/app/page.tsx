"use client"
import { gql, useQuery } from "@apollo/client";
import { Fragment, useEffect } from "react";
import { Stack, Button, Box } from "@mui/material";

export default function Home() {
  const { data, loading } = useQuery(gql`
    query {
      links {
        id
        url
      }
    }
    `)
  return (
    <Stack direction='column' flexGrow={1} height={'100%'} bgcolor='grey.100'>
      <Box>
      </Box>
    </Stack>
  );
}
