import { Box, Container } from "@mui/material";
import BookType from "../types/BookType";
import { nanoid } from "nanoid";
import Book from "./Book";

export default function Results({ books, q, addBook, readingList }: { books: BookType[], q: string | null, addBook: (book: BookType) => void, readingList: BookType[] }) {
    return (
        <Container>
            <div className="border-b border-gray-200 pb-5 mb-3">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                    <h3 className="ml-2 mt-2 text-base font-semibold leading-6 text-gray-900">{books.length} book{books.length !== 1 ? 's' : null} </h3>
                    <p className="ml-2 mt-1 truncate text-sm text-gray-500">
                        match{books.length === 1 ? 'es' : null} "{q}"
                    </p>
                </div>
            </div>
            <Box className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => (
                    <Book key={nanoid()} book={book} mode="ADD" addBook={addBook} readingList={readingList} />
                ))}
            </Box>
        </Container>
    )
}




