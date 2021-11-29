/** @jsxImportSource theme-ui */

import { Flex } from "theme-ui";
import { ComponentsProps } from "../interfaces";

export function OptionList({options, display = 'none', backgroundColor = '#000'}: ComponentsProps) {
    return <div sx={{
        // padding: '30px',
        position: 'absolute',
        top: '65px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        color: '#fff',
        flexDirection: 'column',
        display: display,
        // width: '100%',
    }}>
        {options}
    </div>

}

export default OptionList;

  