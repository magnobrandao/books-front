
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";



export default function Detail() {
    const { id } = useParams();
    return (
        <Box>
            <Typography>{id}</Typography>
        </Box>


    );
}