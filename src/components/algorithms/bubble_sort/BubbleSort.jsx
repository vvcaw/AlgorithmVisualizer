import {BubbleSortRun} from './BubbleSortRun'
import {BubbleSortRenderer} from "./BubbleSortRenderer";

export function BubbleSort(props) {
    return (
        <>
            <div className="p-4 w-full lg:h-2/4 h-64 md:h-96 rounded-lg bg-white shadow-md">
                <BubbleSortRenderer/>
            </div>

            <div className="p-4 w-full lg:h-28 h-auto rounded-lg bg-primary shadow-md">
                <BubbleSortRun/>
            </div>
        </>
    )
}