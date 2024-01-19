import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { DefaultTheme } from "../../themes";
import { Search } from "@mui/icons-material";


type Tprops = {
    searchText: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Header
    ({ searchText, onChange }: Tprops) {
    return (
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} px={8} alignItems="center" width="100vw" height={180} bgcolor={DefaultTheme.palette.primary.main} color="white" >

            <Grid justifyContent={{ xs: "center", sm: "start" }} direction={{ xs: "row", sm: "column" }} alignItems="center" >
                <Typography fontSize={{ xs: 24, sm: 32, md: 38 }} fontWeight="800" color={DefaultTheme.palette.primary.light}>MAGNO</Typography>
                <Typography fontSize={{ xs: 24, sm: 32, md: 38 }} fontWeight="800" color={DefaultTheme.palette.secondary.main}>BOOK</Typography>

            </Grid>
            <Grid container justifyContent="center" alignContent="center">
                <Grid item container width="50%" gap={0.5}  >
                    <Typography fontSize={{ xs: 12, sm: 18, md: 20 }} fontWeight="400">
                        Procure seu livro:
                    </Typography>

                    <Grid container width="100%" flexWrap="nowrap" borderRadius="4px" bgcolor={DefaultTheme.palette.primary.light}>
                        <TextField
                            fullWidth
                            label="Digite aqui"
                            variant="filled"
                            value={searchText}
                            onChange={onChange}
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