/** @jsxImportSource theme-ui */

import { ComponentsProps } from "../../interfaces";

export function Logo({text1, text2}: ComponentsProps) {
    return <div sx={{
        padding: '30px',
        fontFamily: "'Orbitron', sans-serif"
    }}>
        <span sx={{ color: 'deeppink' }}>{text1}</span>
        <span sx={{ color: 'gold' }}>{text2}</span>
    </div>

}

export default Logo;

  