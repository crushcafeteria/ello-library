import { AddCircleRounded } from "@mui/icons-material";
import { Chip, Avatar, Button } from "@mui/material";
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
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold">
                    {book.title}
                </h5>

                <Chip
                    color="primary"
                    avatar={<Avatar alt="Natacha" src={USER_AVATAR} />}
                    label={`Written by ${book.author}`}
                    variant="outlined"
                    className="my-4"
                />

                {mode === 'ADD' && (
                    <Button onClick={addToReadingList} color="success" variant="contained" className="w-full" startIcon={<AddCircleRounded />} disabled={!canAddToReadingList(book)}>
                        Add to reading list
                    </Button>
                )}

                {mode === 'REMOVE' && (
                    <Button onClick={removeFromReadingList} color="error" variant="outlined" className="w-full" startIcon={<AddCircleRounded />}>
                        Remove from reading list
                    </Button>
                )}
            </div>

            <Alert open={open} setOpen={setOpen} confirmAlert={confirmAlert} />
        </div>

    )
}
