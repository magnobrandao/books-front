import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { DefaultTheme } from "../../themes";
import { Search } from "@mui/icons-material";




export default function Header
    () {
    return (
        <Box display="flex" alignItems="center" width="100vw" height={150} bgcolor={DefaultTheme.palette.primary.main} color="white" >

            <Grid justifyContent="start" alignItems="center" >
                <Typography fontSize={38} fontWeight="800" color={DefaultTheme.palette.primary.light}>MAGNO</Typography>
                <Typography fontSize={38} fontWeight="800" color={DefaultTheme.palette.secondary.main}>BOOK</Typography>

            </Grid>
            <Grid container justifyContent="center" alignContent="center">
                <Grid item container width="50%" gap={0.5}  >
                    <Typography fontSize={16} fontWeight="400">
                        Procure seu livro:
                    </Typography>

                    <Grid container width="100%" flexWrap="nowrap" borderRadius="4px" bgcolor={DefaultTheme.palette.primary.light}>
                        <TextField
                            fullWidth
                            label="Digite aqui o seu livro para busca"
                            variant="filled"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ cursor: "pointer", color: DefaultTheme.palette.secondary.light }} >
                                        <Search />
                                    </InputAdornment>
                                )
                            }}

                        />
                    </Grid>




                </Grid>



            </Grid>

        </Box>
    );
}