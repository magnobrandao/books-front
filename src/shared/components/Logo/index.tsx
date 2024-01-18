import { Grid, Typography } from "@mui/material";
import { DefaultTheme } from "../../themes";



export default function Logo() {
    return (
        <Grid>
            <Grid justifyContent="start" alignItems="center" >
                <Typography fontSize={38} fontWeight="800" color={DefaultTheme.palette.primary.light}>MAGNO</Typography>
                <Typography fontSize={38} fontWeight="800" color={DefaultTheme.palette.secondary.main}>BOOK</Typography>

            </Grid>
        </Grid>

    );
}