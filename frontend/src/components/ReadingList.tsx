import Book from "./Book";
import { Box, Button, Container } from "@mui/material";
import { nanoid } from "nanoid";
import BookType from "../types/BookType";
import { ContactSupportRounded, Add } from "@mui/icons-material";

export default function ReadingList({
    readingList,
    removeBook,
    setMode
}: {
    readingList: BookType[],
    removeBook: (book: BookType) => void,
    setMode: Function
}) {
    return (
        <Container>

            {(readingList.length) && (
                <Box className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {readingList.map((book) => (
                        <Book key={nanoid()} book={book} mode="REMOVE" readingList={readingList} removeBook={removeBook} />
                    ))}
                </Box>

            )}

            {/* No results to display */}
            {(!readingList.length) && (
                <Box className="text-center min-h-[30vh] py-20 space-y-3">
                    <ContactSupportRounded fontSize='large' />
                    <h3 className="text-sm font-semibold text-gray-900">
                        Empty reading list
                    </h3>
                    <p className="text-sm text-gray-500">
                        It seems you haven't added any books to your reading list
                    </p>
                    <Button variant="contained" color="success" size='small' startIcon={<Add />} onClick={() => setMode('MAIN_LIST')}>Add Books</Button>
                </Box>
            )}
        </Container>
    )
}