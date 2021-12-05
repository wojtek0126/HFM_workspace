/** @jsxImportSource theme-ui */

import { Flex } from "theme-ui";
import { ComponentsProps } from "../interfaces";

export function OptionList({opacity, options, display = 'none', backgroundColor = '#000', top = '65px', zIndex = '1', position = 'absolute'}: ComponentsProps) {
    return <div sx={{
        // padding: '30px',
        position: position,
        top: top,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        color: '#fff',
        flexDirection: 'column',
        display: display,
        zIndex: zIndex,
        transition: '1s',
        opacity: opacity
        // width: '100%',
    }}>
        {options}
    </div>

}

export default OptionList;

  