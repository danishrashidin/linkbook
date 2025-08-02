import { Stack, Typography, TextField, Avatar } from "@mui/material";

export default function Header() {
    return <Stack direction='row' alignItems='center' justifyContent={'space-between'} paddingX={2} paddingY={1.5}>
        <Stack direction='row' gap={10} alignItems={"center"}>
            <Typography variant="h5" marginInlineStart={2} marginY={1} sx={{
                fontWeight: 500,
                letterSpacing: -0.5,
            }}>linkbook.</Typography>
            <TextField sx={{
                width: 300
            }} variant="outlined" label="Search for links" placeholder="Tags, Titles etc." size="small" />
        </Stack>
        <Avatar>D</Avatar>
    </Stack>
}