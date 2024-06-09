import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BOOK_PLACEHOLDER } from '../settings';
import BookType from '../types/BookType';
import { nanoid } from 'nanoid';
import Results from './Results';

export default function SearchBox({
    books, loading, searchBooks, value, setValue
}: {
    books: BookType[],
    loading: boolean,
    searchBooks: (q: string) => void,
    value: BookType | null | string,
    setValue: Function
}) {
    const [open, setOpen] = useState(false);

    return (
        <Box className='pt-24'>
            <Autocomplete
                freeSolo
                options={books}
                autoHighlight
                renderInput={(params) => <TextField className=' drop-shadow-lg rounded-lg' type='search' {...params} label="Search a book by it's title" />}
                loading={loading}
                open={open}
                getOptionLabel={(book: any) => book.title}
                onOpen={() => {
                    setOpen(true);
                    setValue(null);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onInputChange={(e, value) => {
                    searchBooks(value)
                    setValue(value);
                }}
                renderOption={(props, book: BookType) => (
                    <Box component="li" {...props} key={nanoid()}>
                        <Stack direction={"row"} spacing={2}>
                            <img
                                loading="lazy"
                                width="40"
                                srcSet={book.coverPhotoURL}
                                src={book.coverPhotoURL}
                                alt={book.title}
                                style={{
                                    marginRight: 10,
                                }}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = BOOK_PLACEHOLDER
                                }}
                            />
                        </Stack>
                        {book.title}
                    </Box>
                )}
            />
        </Box>
    );
}


