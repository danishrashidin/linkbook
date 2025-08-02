import { Card, Stack, Typography, TextField, Button, Divider, Chip, InputAdornment } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link"
import AddIcon from "@mui/icons-material/Add"
import { FC } from "react";

const AddLinkCard: FC = () => {
    return <>
        <Card variant="outlined" sx={{
            paddingInline: 2,
            paddingBlock: 10,
            display: "flex",
            flexDirection: 'column',

        }}>
            <Stack direction="column" gap={2} paddingBlockEnd={3}>
                <Typography variant="h6" fontWeight={500} letterSpacing={-.15}>Quickly save a link</Typography>
                <Typography variant="body1" fontWeight={400} color="grey.600">Paste a link, and  we'll instantly fetch its title, and it's preview. You can also provide more information!</Typography>
                <Stack direction="row" gap={1}>
                    <TextField placeholder="Enter URL here" size="small" sx={{
                        flexGrow: 1
                    }} slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LinkIcon />
                                </InputAdornment>
                            )
                        }
                    }} />
                    <Button variant="contained">Save Link</Button>
                </Stack>
            </Stack>
            <Divider />
            <Stack direction="row" flexWrap='wrap' gap={1} paddingBlockStart={2}>
                <Chip clickable label="Add tag" icon={<AddIcon />} />
            </Stack>
        </Card>
    </>
}

export default AddLinkCard
