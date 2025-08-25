import { Card, Chip, Divider, IconButton, Stack, styled, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react"
import OpenLinkIcon from "@mui/icons-material/OpenInNew"
import MoreIcon from "@mui/icons-material/MoreVert"
import AddIcon from "@mui/icons-material/Add"
import Image from "next/image"
import { getPreview } from "@/api/link";

interface LinkPreviewCardProps {
    url: string
    context: string
}

const UrlBar: FC<{ url: string }> = (props) => {
    return (
        <Stack paddingBlock={.9} alignItems="center" justifyContent="center" flexGrow={1} border={1} borderColor='grey.300' borderRadius="6px" bgcolor="grey.100" sx={{
            cursor: 'auto',
        }}>
            <Typography variant="body2" fontWeight={400} color="grey.700" sx={{ pointerEvents: 'none' }}>{props.url}</Typography>
        </Stack>
    )
}

const PreviewImage = styled(Image)((({ theme }) => ({
    width: "100%",
    height: 128,
    objectPosition: 'center',
    objectFit: 'cover',
    borderRadius: 6,
    marginBlockStart: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey['300']
})))

const LinkPreviewCard: FC<LinkPreviewCardProps> = (props) => {
    const [preview, setPreview] = useState<any>(null);
    const hostname = (preview) ? new URL(preview?.url).hostname : ''

    useEffect(() => {
        const fetchPreview = async () => {
            const previewData = await getPreview(props.url)
            setPreview(previewData.preview)
        }

        fetchPreview()
    }, [])

    return <>
        <Card variant="outlined" sx={{
            height: "100%",
            padding: 2,
        }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={4}>
                <IconButton>
                    <MoreIcon />
                </IconButton>
                <UrlBar url={hostname} />
                <IconButton href={preview?.url} target="_blank">
                    <OpenLinkIcon />
                </IconButton>
            </Stack>
            <PreviewImage alt="test" src={preview?.images?.[0] ? preview.images[0] : "https://placehold.co/512x256/F5F5F5/png?text=No+Preview+Image"} height={256} width={512} />
            <Typography variant="h6" marginBlockStart={2}>{props.context}</Typography>
            <Stack direction='row' alignItems={'center'} marginBlockStart={3} gap={1}>
                <Image alt="favicon" src={preview?.favicons?.[0] ? preview.favicons[0] : "https://placehold.co/24x24/png"} width={20} height={20} />
                <Typography variant="body1" sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }}>{preview?.title}</Typography>
            </Stack>
            <Typography variant="body2" color="grey.600" marginBlockStart={1} sx={{
                display: '-webkit-box',
                'WebkitBoxOrient': 'vertical',
                'WebkitLineClamp': 2,
                overflow: 'hidden',
            }}>{preview?.description || <i>No description provided</i>}</Typography>
            <Divider sx={{ marginBlockStart: 2 }} />
            <Stack direction='row' flexWrap='wrap' marginBlockStart={2} gap={1}>
                <Chip label="Add tag" icon={<AddIcon />} clickable />
            </Stack>
        </Card>
    </>
}

export default LinkPreviewCard