/** @jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui";
import { ComponentsProps } from "../../interfaces";

export function Logo({text1, text2}: ComponentsProps) {
    return <Flex sx={{
        padding: '30px',
        fontFamily: "'Orbitron', sans-serif"
    }}>
        <Box sx={{ color: 'deeppink' }}>{text1}</Box>
        <Box sx={{ color: 'gold' }}>{text2}</Box>
    </Flex>

}

export default Logo;

  