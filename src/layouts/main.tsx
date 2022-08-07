import {ReactNode} from "react";

const Main = (props: { children?: ReactNode }) => {
    return (
        <>
            {props.children}
        </>
    )
}
export default Main