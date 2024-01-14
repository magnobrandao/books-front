import { Box } from "@mui/material";
import { DefaultTheme } from "../../themes";
import { Search } from "@mui/icons-material";


export default function ButtonSearch() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width={50} height={48} borderRadius="8px" bgcolor={DefaultTheme.palette.secondary.main} color="white" sx={{ cursor: "pointer" }}>
            <Search />
        </Box>
    );
}