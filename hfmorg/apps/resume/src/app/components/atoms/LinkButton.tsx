import { ComponentsProps } from "../../interfaces";

export function LinkButton({content, color}: ComponentsProps) {
    return <a href="/" style={{
                color: color,
                textDecoration: 'none',
                padding: '15px',
                textTransform: 'uppercase',
    }}>{content}</a>
}

export default LinkButton;

