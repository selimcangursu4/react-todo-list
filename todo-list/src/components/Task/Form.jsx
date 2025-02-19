
import * as React from 'react';
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '../UI/ButtonOne'


export default function Form(props) {

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
    )
}