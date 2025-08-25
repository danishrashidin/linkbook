"use client"
import { gql, useQuery } from "@apollo/client";
import { Fragment, useEffect } from "react";
import { Stack, Grid } from "@mui/material";
import AddLinkCard from "@/modules/links/components/AddLinkCard";
import LinkPreviewCard from "@/modules/links/components/LinkPreviewCard";

export default function Home() {
  const { data, refetch } = useQuery(gql`
    query {
      links {
        id
        url
        context
      }
    }
    `, {
    fetchPolicy: 'network-only'
  })

  return (
    <Stack direction='column' flexGrow={1} bgcolor='grey.100' padding={2}>
      <Grid container spacing={2} columns={{
        xl: 4,
        lg: 3,
        md: 2,
        xs: 1
      }}>
        <Grid size={1}>
          <AddLinkCard onAdded={() => refetch()} />
        </Grid>
        {data && data?.links.map((link: any) => (
          <Fragment key={link.id}>
            <Grid size={1} >
              <LinkPreviewCard id={link.id} url={link.url} context={link.context} onDelete={() => refetch()} />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Stack>
  );
}
