import { Alert, Card, Stack, Typography, TextField, Button, InputAdornment, Snackbar } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link"
import NoteIcon from '@mui/icons-material/Note'
import { FC, useState } from "react";
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { AddLinkQuery } from "../graphql/mutation";

type AddLinkProps = {
    onAdded?: VoidFunction
}

const addLinkSchema = z.object({
    url: z.url(),
    context: z.string().min(1, {
        error: "Context cannot be empty!"
    }).max(50)
})

const AddLinkCard: FC<AddLinkProps> = (props) => {
    const [isSnackbarShown, setShowSnackbar] = useState(false)
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: zodResolver(addLinkSchema)
    })
    const [addLink, { loading }] = useMutation(AddLinkQuery)

    const submitLink: SubmitHandler<z.infer<typeof addLinkSchema>> = async (data) => {
        try {
            await addLink({
                variables: {
                    url: data.url,
                    context: data.context
                }
            })
            props.onAdded && props.onAdded()
            reset()
            setShowSnackbar(true)
        } catch (error) {
            // Show error alert
            setShowSnackbar(true)
        }

    }

    return <>
        <Card variant="outlined" sx={{
            padding: 2,
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            height: "100%",
        }}>
            <Stack component={'form'} onSubmit={handleSubmit(submitLink)} direction="column" paddingBlockEnd={3}>
                <Typography variant="h6" fontWeight={500} letterSpacing={-.15}>Quickly save a link</Typography>
                <Typography variant="subtitle1" marginBlockStart={1} fontWeight={400} color="grey.600">Paste a link, and the context! We will handle the rest.</Typography>
                <TextField {...register('url')} error={!!errors.url} helperText={errors.url && errors.url.message} label="Link" placeholder="Enter or paste URL here" size="medium" sx={{
                    flexGrow: 1,
                    marginBlockStart: 4,
                }} slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <LinkIcon />
                            </InputAdornment>
                        )
                    }
                }} />
                <TextField {...register('context')} error={!!errors.context} helperText={errors.context && errors.context.message} label="Context" placeholder="My favourite blog, Mom's list etc..." size="medium" sx={{
                    flexGrow: 1,
                    marginBlockStart: 3
                }} slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <NoteIcon />
                            </InputAdornment>
                        )
                    }
                }} />
                <Stack direction='row' alignItems='center' marginBlockStart={3}>
                    <Stack direction="row" flexWrap='wrap' flexGrow={1} gap={1}>
                        {/* <Chip clickable label="Add tag" icon={<AddIcon />} /> */}
                    </Stack>
                    <Button loading={loading} type="submit" variant="text" size="large" sx={{}}>Save Link</Button>
                </Stack>
            </Stack>
        </Card>
        <Snackbar open={isSnackbarShown} onClose={() => setShowSnackbar(false)} autoHideDuration={3000} >
            <Alert onClose={() => setShowSnackbar(false)} variant="filled" severity="success" sx={{ width: "100%" }}>
                Link created!
            </Alert>
        </Snackbar>
    </>
}

export default AddLinkCard
