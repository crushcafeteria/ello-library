import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function AppAppBar() {
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor: 'white',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <Typography variant="h6" component="h6" sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                fontSize: 25,
                                ml: 3,
                                cursor: 'pointer',
                            }} onClick={() => window.location.reload()}>
                                Book Assign
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                color="primary"
                                variant="text"
                                size="large"
                                component="a"
                                target="_blank"

                            >
                                Show Reading List
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
}

export default AppAppBar;