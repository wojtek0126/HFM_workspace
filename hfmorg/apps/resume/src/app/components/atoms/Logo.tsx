/** @jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui";
import { ComponentsProps } from "../../interfaces";

export function Logo({text1, text2}: ComponentsProps) {
    return <Flex sx={{
        padding: '30px',
        fontFamily: "'Orbitron', sans-serif",
        // webkitBoxShadow: 'inset -2px 12px 100px 43px rgba(17, 17, 17, 1)',
        // mozBoxShadow: 'inset -2px 12px 100px 43px rgba(17, 17, 17, 1)',
        boxShadow: 'inset -2px 12px 100px 6px rgba(17, 17, 17, 1)',
        backgroundColor: 'seagreen'
    }}>
        <Box sx={{ color: 'deeppink' }}>{text1}</Box>
        <Box sx={{ color: 'gold' }}>{text2}</Box>
    </Flex>

}

export default Logo;

  