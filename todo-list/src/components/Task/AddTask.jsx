import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react'
import Button from '../UI/ButtonOne'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddTask(props) {
    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Yeni Todo Değişkenleri
    const [todo, setTodo] = useState();
    const [status, setStatus] = useState();

    // Form Todo Değeri
    function todoChange(e) {
        setTodo(e.target.value);
    }
    // Form Status Değeri
    function statusChange(e) {
        setStatus(e.target.value);
    }
    // Form Submit Fonksiyonu
    function addTodoSubmit(e) {
        e.preventDefault();
        console.log(todo, status);

        props.newTodo(prevState => [
            ...prevState,
            {
                id: Date.now(),
                todo: todo,
                status: status
            }
        ]);
    }


    return (
        <div className="flex justify-end mb-3">
            <Button onClick={handleOpen} size="small">Todo Ekle</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Yeni Todo Ekleme Formu
                        </Typography>
                        <form onSubmit={addTodoSubmit}>
                            <TextField onChange={todoChange} id="outlined-basic" className='w-84' label="Todo Giriniz." variant="outlined" />
                            <br /><br />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Durum</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="status"
                                    onChange={statusChange}
                                >
                                    <MenuItem value={1}>Yapıldı</MenuItem>
                                    <MenuItem value={2}>Yapılmadı</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                            <Button type="submit" className="w-84">Listeye Ekle</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}