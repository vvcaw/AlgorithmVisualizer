import {BubbleSortRun} from './BubbleSortRun'
import {BubbleSortRenderer} from "./BubbleSortRenderer";

export function BubbleSort(props) {
    return (
        <>
            <div className="p-4 w-full h-2/4 rounded-md bg-white shadow-md">
                <BubbleSortRenderer />
            </div>

            <div className="p-4 w-full h-28 rounded-md bg-primary shadow-md">
                <BubbleSortRun/>
            </div>
        </>
    )
}