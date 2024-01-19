
import { Box, Grid, Pagination, Typography } from "@mui/material";
import CardBook from "../../shared/components/Card-book";
import Header from "../../shared/components/Header";
import { useEffect, useState } from "react";
import { BookService } from "../../shared/services/books/BookService";
import { useDebounce } from "../../shared/hooks/useDebounce";
import DetailsDialog from "../../shared/components/Details-dialog";
import { TDataBook } from "../../shared/types/book";




export default function Home() {
    const [productData, setProductData] = useState<TDataBook[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>()
    const [value, setValue] = useState<string>("")
    const [bookSelected, setbookSelected] = useState<TDataBook>()



    const { debounce } = useDebounce()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const [open, setOpen] = useState(false);


    const handleClickOpen = (book: TDataBook) => {
        setOpen(true);
        setbookSelected(book)

    };

    const handleClose = () => {
        setOpen(false);
    };




    async function fetchData() {
        try {
            if (
                value !== "") {
                debounce(() => {
                    const dataUser = BookService.search(value);
                    dataUser.then(response => {
                        setProductData(response.data);
                        setHasMore(response.hasMore)

                    }).catch(error => {
                        setProductData([]);
                        console.error(error.response)
                    })
                })
            }
            else {

                const dataUser = BookService.getAll(currentPage);
                dataUser.then(response => {
                    setProductData(response.data);
                    setHasMore(response.hasMore)
                })

            }



        } catch (error) {

            console.error("Ocorreu um erro ao buscar os dados: ", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [currentPage, value])
    return (
        <Box>
            <Header searchText={value} onChange={handleChange} />
            <Grid mt={10} container rowGap={10} mb={20}>
                {productData.length !== 0 ? (
                    productData.map((book: TDataBook) => (
                        <Grid
                            item
                            container
                            xs={12}
                            sm={4}
                            md={3}
                            justifyContent="center"
                            key={book.id}
                        >
                            <CardBook title={book.name} image={book.imagelink} id={book.id} onClick={() => handleClickOpen(book)} />
                        </Grid>
                    ))
                ) : (
                    <Grid container justifyContent="center">

                        <Grid container item justifyContent="center" xs={12} sm={4} height={380} width={200} gap={2}>
                            <Typography color="red" fontSize={{ xs: 12, sm: 18, md: 20 }} fontWeight="800">Infelizmente não encontramos nenhum livro</Typography>
                            <img
                                width="80%"
                                height="100%"
                                src="https://img.freepik.com/vetores-premium/livro-triste-de-choro-bonito-livro-de-texto-de-desenho-plano-vector-conceito-de-educacao-de-livro-ilustracao-em-vetor_106796-1560.jpg"
                                alt="Book Cover"
                            />
                        </Grid>
                    </Grid>
                )}
            </Grid>
            <Grid container justifyContent="center" mb={4}>
                <Pagination color="primary" count={hasMore ? currentPage + 1 : currentPage} page={currentPage} onChange={(_, newPage) => setCurrentPage(newPage)} />
            </Grid>
            <DetailsDialog isOpen={open} handleClose={handleClose} title={bookSelected?.name} publishedat={bookSelected?.publishedat} description={bookSelected?.description} imagelink={bookSelected?.imagelink} authors={bookSelected?.authors} />
        </Box>


    );
}