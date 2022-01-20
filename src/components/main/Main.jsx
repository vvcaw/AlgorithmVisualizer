import {BubbleSort} from "../algorithms/bubble_sort/BubbleSort";

export function Main(props) {
    return (
        <>
            <div className={`bg-background w-full flex flex-col p-4 gap-y-4 gap-x-4 ${props.col}`}>
                {/*Container for active algorithm*/}
                <BubbleSort/>
            </div>
        </>
    )
}