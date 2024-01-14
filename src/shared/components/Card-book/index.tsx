import { Grid, Typography, Button } from "@mui/material";
import { DefaultTheme } from "../../themes";

type TProps = {
    title: string;
    url?: string;

};

export default function CardBook({ title, url }: TProps) {
    return (
        <Grid
            container
            direction="column"
            maxWidth={220}
            minHeight={280}
            alignItems="center"
            gap={1}
            boxShadow="0px 0px 4px 2px rgba(0, 0, 0, 0.28)"
            borderRadius="8px"
        >
            <Grid item width={160} height={214} borderRadius="4px">
                <img width="100%" height="100%" src="https://m.media-amazon.com/images/I/51nNwwVSclL._SY425_.jpg" alt="Book Cover" />
            </Grid>

            <Grid item container direction="column" alignItems="center" gap={1} mb={2}>
                <Typography fontSize={21} fontWeight="500">
                    {title}
                </Typography>

                <Button
                    onClick={() => window.open(url, "_blank")}
                    variant="contained"
                    sx={{
                        backgroundColor: DefaultTheme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: `${DefaultTheme.palette.secondary.main} !important`,
                        },
                    }}

                >
                    VER DETALHES
                </Button>
            </Grid>
        </Grid>
    );
}