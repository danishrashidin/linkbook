"use client"
import { gql, useQuery } from "@apollo/client";
import { Fragment, useEffect } from "react";
import { Stack, Grid } from "@mui/material";
import AddLinkCard from "@/components/ui/links/AddLinkCard";
import LinkPreviewCard from "@/components/ui/links/LinkPreviewCard";

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
    <Stack direction='column' flexGrow={1} bgcolor='grey.100' padding={2}>
      <Grid container spacing={2} columns={{
        xl: 4,
        lg: 3,
        md: 2,
        xs: 1
      }}>
        <Grid size={1}>
          <AddLinkCard />
        </Grid>
        {data && data?.links.map(link => (
          <Fragment key={link.id}>
            <Grid size={1} >
              <LinkPreviewCard url={link.url} context={link.context} />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Stack>
  );
}
