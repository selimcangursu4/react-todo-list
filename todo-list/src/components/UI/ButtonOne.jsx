import Button from '@mui/material/Button';

export default function ButtonOne(props)
{
    return(
         <Button data-id={props.dataId} type={props.type} onClick={props.onClick} color={props.color} size={props.size} className={props.className} variant="contained">{props.children}</Button>
    )
}