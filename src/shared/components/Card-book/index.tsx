import { Grid, Typography, Button } from "@mui/material";
import { DefaultTheme } from "../../themes";

type TProps = {
    title: string;
    id?: string;
    image: string
    onClick: () => void
};

export default function CardBook({ title, id, image, onClick }: TProps) {


    return (
        <Grid
            container
            direction="column"
            maxWidth={250}
            minHeight={350}
            alignItems="center"
            gap={1}
            justifyContent="center"
            boxShadow="0px 0px 4px 2px rgba(0, 0, 0, 0.28)"
            borderRadius="8px"
        >
            <Grid item width={160} height={214} borderRadius="4px">
                <img width="100%" height="100%" src={image} alt="Book Cover" />
            </Grid>

            <Grid item container direction="column" alignItems="center" gap={1} mb={2}>
                <Typography fontSize={16} fontWeight="500">
                    {title}
                </Typography>

                <Button
                    onClick={onClick}
                    variant="contained"
                    sx={{
                        backgroundColor: DefaultTheme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: `${DefaultTheme.palette.secondary.main} `,
                        },
                    }}

                >
                    VER DETALHES
                </Button>
            </Grid>
        </Grid>
    );
}