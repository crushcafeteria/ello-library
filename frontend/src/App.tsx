/* eslint-disable react-hooks/exhaustive-deps */
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from './components/AppBar';
import SearchBox from './components/SearchBox';
import { useState, useEffect } from 'react';
import { GQL_BOOKS } from './settings';
import useReadingList from './hooks/useReadingList';
import { useQuery } from '@apollo/client';
import BookType from './types/BookType';
import Results from './components/Results';
import { ContactSupportRounded, ListAlt } from '@mui/icons-material';
import Footer from './components/Footer';
import BeautySpots from './components/BeautySpots';
import { PageTitle } from './components/PageTitle';
import ReadingList from './components/ReadingList';
import { Toaster } from 'react-hot-toast';
import { Button, Typography } from '@mui/material';

/**
 * Configure an ApolloClient instance.
 *
 * @return {ApolloClient} The ApolloClient instance.
 */


function App() {

    const [books, setBooks] = useState<BookType[] | any>(null);
    const [results, setResults] = useState<any>([]);
    const [value, setValue] = useState<string>('');
    const [mode, setMode] = useState<'READ_LIST' | 'MAIN_LIST'>('MAIN_LIST');
    const [readingList, addBook, removeBook] = useReadingList();

    // Fetch books from API
    const { loading, data, refetch } = useQuery(GQL_BOOKS);
    useEffect(() => {
        setBooks(data?.books);
    }, [data]);

    async function searchBooks(q: string) {
        if (q.length && books?.length) {
            const results = books?.filter((book: any) => book.title.toLowerCase().includes(q.toLowerCase()));
            setResults(results);
        } else {
            refetch();
        }
    }

    return (
        <Box>
            <CssBaseline />
            <AppBar mode={mode} setMode={setMode} />

            {/* Reading List */}
            {mode === 'READ_LIST' && (
                <>
                    {/* No results to display */}
                    {(readingList.length || !value) && (
                        <div className="bg-white">
                            <div className="relative isolate px-6">
                                <BeautySpots />
                                <div
                                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                        }}
                                    />
                                </div>

                                <PageTitle title="Reading List" description="List of books you have selected for reading" />
                                <ReadingList readingList={readingList} removeBook={removeBook} setMode={setMode} />
                            </div>
                        </div>
                    )}



                </>
            )}

            {/* Search books */}
            {mode === 'MAIN_LIST' && (
                <>
                    <div className="bg-white">
                        <div className="relative isolate px-6">
                            <BeautySpots />
                            <div className="mx-auto max-w-2xl py-12">


                                <SearchBox books={books} loading={loading} searchBooks={searchBooks} value={value} setValue={setValue} />
                            </div>
                        </div>
                    </div>

                    {results.length && value && (
                        <Results books={results} q={value} addBook={addBook} readingList={readingList} />
                    )}

                    {/* No results to display */}
                    {(!results.length || !value) && (
                        <Box className="text-center min-h-[30vh] py-20 space-y-4">
                            <ContactSupportRounded fontSize='large' />
                            <h3 className="mt-2 text-sm font-semibold text-gray-900">No books to display</h3>
                            <Typography color='warning' className="mt-1 text-sm text-gray-500">
                                Please type a book title in the search box to see some results
                            </Typography>
                            <Button variant="contained" color="success" size='small' startIcon={<ListAlt />} onClick={() => setMode('READ_LIST')}>
                                View Reading List
                            </Button>
                        </Box>
                    )}
                </>
            )}

            <Footer />
            <Toaster />
        </Box>
    );
}

export default App;




