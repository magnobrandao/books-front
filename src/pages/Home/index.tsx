
import { Box, Card, Grid, Pagination } from "@mui/material";
import CardBook from "../../shared/components/Card-book";
import Header from "../../shared/components/Header";
import { useEffect, useState } from "react";
import api from "../../shared/services/api";
import axios from "axios";
import { BookService, TBook } from "../../shared/services/books/BookService";




export default function Home() {
    const [productData, setProductData] = useState<Record<string, any>>([])
    console.log("🚀 ~ Home ~ productData:", productData)
    const [currentPage, setCurrentPage] = useState<number>(1)



    async function fetchData() {
        try {
            const dataUser = await BookService.getAll();
            setProductData(dataUser.data)

        } catch (error) {
            console.error("Ocorreu um erro ao buscar os dados: ", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])
    return (
        <Box>
            <Header />
            <Grid mt={10} container rowGap={10} mb={20}>
                {productData.map((book: TBook) => (
                    <Grid
                        item
                        container
                        xs={12}
                        sm={4}
                        md={3}
                        justifyContent="center"
                        key={book.id}
                    >
                        <CardBook title={book.name} />
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent="center">
                <Pagination count={5} page={2} />
            </Grid>
        </Box>


    );
}