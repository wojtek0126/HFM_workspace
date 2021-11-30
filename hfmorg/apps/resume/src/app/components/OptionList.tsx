/** @jsxImportSource theme-ui */

import { Flex } from "theme-ui";
import { ComponentsProps } from "../interfaces";

export function OptionList({options, display = 'none', backgroundColor = '#000', top = '65px', zIndex = '1'}: ComponentsProps) {
    return <div sx={{
        // padding: '30px',
        position: 'absolute',
        top: top,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        color: '#fff',
        flexDirection: 'column',
        display: display,
        zIndex: zIndex,
        transition: '1s'
        // width: '100%',
    }}>
        {options}
    </div>

}

export default OptionList;

  