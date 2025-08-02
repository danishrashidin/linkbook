import { Stack } from "@mui/material"
import type { PropsWithChildren } from "react"

export default function BaseLayout({ children }: PropsWithChildren) {
    return (
        <Stack direction='column' bgcolor='background.default' minHeight='100vh'>
            {children}
        </Stack>
    )
}