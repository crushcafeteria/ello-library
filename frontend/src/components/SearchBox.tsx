/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BOOK_PLACEHOLDER } from '../settings';
import BookType from '../types/BookType';
import { nanoid } from 'nanoid';
import { Typography } from '@mui/material';

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

    useEffect(() => {
        console.log(books);
    }, [])

    return (
        <Box className='pt-24'>
            <Typography color='primary' variant="h3" className="text-center pb-5">
                Find a book
            </Typography>
            <Autocomplete color='secondary'
                freeSolo
                options={books?.length ? books : []}
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
                        <Typography color={'secondary'}>
                            {book.title}
                        </Typography>
                    </Box>
                )
                }
            />
        </Box >
    );
}


