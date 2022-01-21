import {FastForwardIcon} from "@heroicons/react/outline"
import {SortDescendingIcon} from "@heroicons/react/outline"
import {XCircleIcon} from "@heroicons/react/outline"
import {PlusSmIcon} from "@heroicons/react/outline"

export function BubbleSortRun(props) {
    return (
        <>
            <div
                className="h-full w-full flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 justify-between items-center pl-4 pr-4">
                <div className="h-10 flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute top-2 left-2">
                            <PlusSmIcon className="h-5 w-5 mt-0.5 text-subfontcolor"/>
                        </div>
                        <input type="text"
                               className="h-10 w-72 pl-10 pr-20 rounded-3xl z-0 focus:shadow focus:outline-none shadow-md text-subfontcolor"
                               placeholder="Add something..."/>
                        <div className="absolute top-1 right-1">
                            <button
                                className="h-8 w-20 text-white rounded-3xl bg-primary hover:opacity-80">Add
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 gap-x-3">
                    <button
                        className="bg-white p-2 h-10 w-32 rounded-3xl text-subfontcolor font-medium flex flex-row-reverse justify-center items-center gap-x-1 shadow-md hover:opacity-80 hover:text-primary hover:font-bold">
                        <span>Clear</span>
                        <XCircleIcon className="h-5 w-5 mt-0.5"/>
                    </button>

                    <button
                        className="bg-white p-2 h-10 w-32 rounded-3xl text-subfontcolor font-medium flex flex-row-reverse justify-center items-center gap-x-1 shadow-md hover:opacity-80 hover:text-primary hover:font-bold">
                        <span>Shuffle</span>
                        <SortDescendingIcon className="h-5 w-5 mt-0.5"/>
                    </button>

                    <button
                        className="bg-white p-2 h-10 w-32 rounded-3xl text-subfontcolor font-medium flex flex-row-reverse justify-center items-center gap-x-1 shadow-md hover:opacity-80 hover:text-primary hover:font-bold">
                        <span>Run</span>
                        <FastForwardIcon className="h-5 w-5 mt-0.5"/>
                    </button>
                </div>
            </div>
        </>
    )
}