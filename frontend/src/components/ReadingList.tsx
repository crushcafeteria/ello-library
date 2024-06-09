import Book from "./Book";
import { Box, Container } from "@mui/material";
import { nanoid } from "nanoid";
import BookType from "../types/BookType";

export default function ReadingList({ readingList, removeBook }: { readingList: BookType[], removeBook: (book: BookType) => void }) {
    return (
        <Container>
            <Box className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {readingList.map((book) => (
                    <Book key={nanoid()} book={book} mode="REMOVE" readingList={readingList} removeBook={removeBook} />
                ))}
            </Box>
        </Container>
    )
}