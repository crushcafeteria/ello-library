import { AddCircleRounded, Dangerous, DeleteForever } from "@mui/icons-material";
import { Chip, Avatar, Button, Typography } from "@mui/material";
import { USER_AVATAR } from "../settings";
import BookType from "../types/BookType";
import { useState } from "react";
import Alert from "./Alert";

export default function Book({
    book,
    mode,
    addBook,
    readingList,
    removeBook
}: {
    book: BookType, mode: 'ADD' | 'REMOVE',
    addBook?: (book: BookType) => void,
    readingList: BookType[], removeBook?: (book: BookType) => void
}) {

    const [open, setOpen] = useState(false);

    function addToReadingList() {
        if (addBook !== undefined) addBook(book);
    }

    function removeFromReadingList() {
        setOpen(true);
    }

    function canAddToReadingList(b: BookType) {
        return readingList.findIndex((b) => b.title === book.title) === -1;
    }

    function confirmAlert() {
        if (removeBook !== undefined) removeBook(book);
        setOpen(false);
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg">
            <img className="rounded-t-lg" src={book.coverPhotoURL} alt="" />
            <div className="p-5 text-center">
                <Typography color={'secondary'} variant="h6" component="h6">
                    {book.title}
                </Typography>

                <Chip
                    color="secondary"
                    avatar={<Avatar alt="Natacha" src={USER_AVATAR} />}
                    label={`Written by ${book.author}`}
                    variant="outlined"
                    className="mb-4 mt-2"
                />

                {mode === 'ADD' && (
                    <Button onClick={addToReadingList} color="success" variant="contained" className="w-full" startIcon={canAddToReadingList(book) ? <AddCircleRounded /> : <Dangerous />} disabled={!canAddToReadingList(book)}>
                        {canAddToReadingList(book) ? 'Add to reading list' : 'Already in reading list'}
                    </Button>
                )}

                {mode === 'REMOVE' && (
                    <Button onClick={removeFromReadingList} color="warning" variant="contained" className="w-full" startIcon={<DeleteForever />}>
                        Remove from reading list
                    </Button>
                )}
            </div>

            <Alert open={open} setOpen={setOpen} confirmAlert={confirmAlert} />
        </div>

    )
}
