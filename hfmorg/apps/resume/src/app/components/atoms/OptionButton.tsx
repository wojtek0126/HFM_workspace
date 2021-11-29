/** @jsxImportSource theme-ui */
import { SyntheticEvent } from "react";
import { Box, Button, Link } from "theme-ui";
import { ComponentsProps } from "../../interfaces";

export function OptionButton({ content, color, onClick, onBlur, backgroundColor = 'transparent', width = '100px' }: ComponentsProps) {


    return <Button onClick={onClick} onBlur={onBlur} sx={{
        miWwidth: 'auto',
                backgroundColor: backgroundColor,
                cursor: 'pointer',
                textAlign: 'center',
                color: color,
                width: width,
                fontFamily: "'Bebas Neue', cursive",        
                textDecoration: 'none',
                padding: '15px',
                textTransform: 'uppercase',
                transition: '1s',
                 '&:hover': {
                     backgroundColor: 'rgb(0, 0, 0)',
                     color: 'rgb(217, 217, 217)',
                     webkitBoxShadow: 'inset 8px 8px 24px 0px rgba(248, 248, 248, 1)',
                     mozBoxShadow: 'inset 8px 8px 24px 0px rgba(248, 248, 248, 1)',
                     boxShadow: 'inset 8px 10px 18px -17px rgba(255, 255, 255, 1)',
                },
                 '&:focus': {
                     backgroundColor: 'rgb(51, 51, 51)',
                       webkitBoxShadow: 'inset 8px 8px 24px 0px rgba(248, 248, 248, 1)',
                     mozBoxShadow: 'inset 8px 8px 24px 0px rgba(248, 248, 248, 1)',
                    boxShadow: 'inset 8px 10px 18px -17px rgba(255, 255, 255, 1)',
                    color: 'rgb(255, 228, 77)',
                    // fontSize: '96%'
                }
    }}>{content}</Button>
}

export default OptionButton;

