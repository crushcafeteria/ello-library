import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Alert({ open, setOpen, confirmAlert }: { open: boolean, setOpen: (open: boolean) => void, confirmAlert: () => void }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" color={'red'}>
                    Confirm Destructive Action
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to remove this book from your reading list? This action cannot be reversed.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus variant='outlined'>No, cancel</Button>
                    <Button onClick={() => confirmAlert()} variant='contained' color='error' >
                        Yes, Remove this book
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
