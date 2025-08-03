import type { Metadata } from "next";
import { GraphQLProvider } from "@/graphql/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Box, Divider, ThemeProvider } from "@mui/material";
import { theme } from "@/util/theme";
import Header from "@/components/ui/Header";
import BaseLayout from "@/layouts/BaseLayout";

// MUI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: "Linkmark",
  description: "Just a better bookmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Box
        component='body'
        sx={{
          margin: 0,
          '&, *': {
            boxSizing: 'border-box'
          }
        }}
      >
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
            <GraphQLProvider>
              <BaseLayout>
                <Header />
                <Divider />
                {children}
              </BaseLayout>
            </GraphQLProvider>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </Box>
    </html>
  );
}
