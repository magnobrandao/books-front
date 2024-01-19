import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";
import { DefaultTheme } from "../../themes";
import { format } from "date-fns";

type TProps = {
    isOpen: boolean;
    handleClose?: VoidFunction;
    title?: string
    publishedat?: string,
    description?: string,
    imagelink?: string,
    authors?: string[]
};

export default function DetailsDialog({
    isOpen,
    handleClose,
    title,
    publishedat,
    description,
    imagelink,
    authors
}: TProps) {

    const formatedDateBookPublish = publishedat ? format(new Date(publishedat), 'MM/yyyy') : ""
    return (
        <Dialog open={isOpen} onClose={handleClose} maxWidth="xl" fullWidth>
            <DialogTitle align="center">{title}</DialogTitle>

            <DialogContent>
                <Grid container direction="row" rowGap={2} columnGap={0}>
                    <Grid item xs={12} sm={4} height={380} width={200}>
                        <img
                            width="80%"
                            height="100%"
                            src={imagelink}
                            alt="Book Cover"
                        />
                    </Grid>

                    <Grid item xs={12} sm={8} mt={4} container direction="column" gap={6}>
                        <Typography fontSize={16} fontWeight="500">
                            Autores: {authors?.map((author) => `${author}${authors.length > 1 ? "," : ""}`)}
                        </Typography>
                        <Typography fontSize={16} fontWeight="500">
                            Data de publicação: {formatedDateBookPublish}
                        </Typography>
                        <Typography fontSize={16} fontWeight="500">
                            Descrição: {description}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                        backgroundColor: DefaultTheme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: `${DefaultTheme.palette.secondary.main} !important`,
                        },
                    }}
                >
                    VOLTAR
                </Button>
            </DialogActions>
        </Dialog>
    );
}