/** @jsxImportSource theme-ui */
import { SyntheticEvent } from "react";
import { ComponentsProps } from "../../interfaces";

export function LinkButton({ content, color }: ComponentsProps) {
  
    function onLinkClick(e: SyntheticEvent) {
   e.preventDefault();
}


    return <a href="/" onClick={onLinkClick} sx={{
                color: color,
                fontFamily: "'Bebas Neue', cursive",        
                textDecoration: 'none',
                padding: '15px',
        textTransform: 'uppercase',
                transition: '0.5s',
                 '&:hover': {
                     backgroundColor: 'rgb(51, 51, 51)',
                     color: 'rgb(217, 217, 217)',
                    //  -webkit-box-shadow: inset 8px 8px 24px 0px rgba(248, 248, 248, 1);
                    // -moz-box-shadow: inset 8px 8px 24px 0px rgba(248, 248, 248, 1);
                    boxShadow: 'inset 8px 10px 18px -17px rgba(255, 255, 255, 1)',
                },
                 '&:focus': {
                     backgroundColor: 'rgb(51, 51, 51)',
                    boxShadow: 'inset 8px 10px 18px -17px rgba(255, 255, 255, 1)',
                color: 'gold',
                }
    }}>{content}</a>
}

export default LinkButton;

