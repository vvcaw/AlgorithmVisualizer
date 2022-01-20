import {Logo} from "./logo";

export function SubHeader(props) {
    return (
        <>

            <div className={`text-subfontcolor text-lg ${props.style}`}>
                {props.text}
            </div>
        </>

    )
}