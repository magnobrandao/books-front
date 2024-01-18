import { Grid, TextField, Typography } from "@mui/material";
import { DefaultTheme } from "../../themes";

import ButtonSearch from "../Button-search";


export default function SearchInput() {
    return (
        <Grid container justifyContent="center" alignContent="center">
            <Grid item container width="60%" gap={1} >
                <Typography fontSize={16} fontWeight="400">
                    Procure seu livro:
                </Typography>

                <Grid container gap={1} width="100%" flexWrap="nowrap" bgcolor={DefaultTheme.palette.primary.light}>
                    <TextField
                        fullWidth
                        label="Descreva seu titulo"
                    />

                </Grid>

            </Grid>

        </Grid>
    );
}