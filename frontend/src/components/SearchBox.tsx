import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BOOKS_DB } from '../books';
import { Card } from '@mui/material';
import { BOOK_PLACEHOLDER } from '../settings';

export default function SearchBox() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                // width: '100%',
                // backgroundImage:
                //     theme.palette.mode === 'light'
                //         ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                //         : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                // backgroundSize: '100% 20%',
                // backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap>
                    <FreeSolo />

                </Stack>

            </Container>
        </Box>
    );
}

export function FreeSolo() {
    const [books, setBooks] = useState<any>([]);
    const [open, setOpen] = useState(false);
    const loading = open && books.length === 0;


    useEffect(() => {
        if (!open) {
            setBooks([]);
        }
    }, [open]);

    useEffect(() => {
        let active = true;
        if (!loading) return undefined;

        (async () => {
            if (active) {
                setBooks([...BOOKS_DB]);
            }
        })();

        return () => { active = false }
    }, [loading]);

    function searchBooks(value: string) {
        console.log(value);

    }

    return (
        <Stack spacing={2} sx={{ width: 600 }}>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={BOOKS_DB}
                autoHighlight
                renderInput={(params) => <TextField type='search' {...params} label="Search a book by it's title" />}
                loading={loading}
                open={open}
                getOptionLabel={(book: any) => book.title}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onInputChange={(e, value) => {
                    searchBooks(value)
                }}
                renderOption={(props, book: any) => (
                    <Box component="li" {...props} key={book._id}>
                        <Stack direction={"row"} spacing={2}>
                            <img
                                loading="lazy"
                                width="40"
                                srcSet={book.thumbnailUrl}
                                src={book.thumbnailUrl}
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
        </Stack>
    );
}

