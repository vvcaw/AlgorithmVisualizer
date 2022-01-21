import {useEffect, useState} from "preact/compat";
import {gsap} from "gsap";

export const BubbleSortRenderer = (props) => {

    const [sorting, setSorting] = useState(false)
    const [sortingArray, setSortingArray] = useState([])
    const [animation, setAnimation] = useState({})

    const random = () => {
        if (!sorting) {
            let array = Array.from({length: 80}, () => Math.floor(Math.random() * 100) + 1).map((x, i) => ({
                id: `block${i}`,
                value: x
            }))

            setSortingArray(array)
            initializeBars(array)
        }
    }

    const initializeBars = (array) => {
        console.log(array)
        // TODO :: Draw bars on the screen with correct id's
    }


    const sort = () => {
        // State update
        setSorting(true)

        let sorted = false
        let runIsSorted = true
        let index = 0
        let array = sortingArray
        let endIndex = array.length - 1

        while (!sorted) {
            let item = array[index]
            let next = array[index + 1]

            if (index === endIndex) {
                index = 0
                endIndex--

                if (runIsSorted) {
                    sorted = true
                }

                runIsSorted = true
            } else {
                // Swap with next bar
                if (next.value < item.value) {
                    runIsSorted = false
                    array[index + 1] = item
                    array[index] = next
                }

                index++
            }
        }

        setAnimation(animation)

        // animation.start().callback { -> update other state }
        // TODO :: Set animation as state, change array after animation
    }

    useEffect(() => {
        random()
    }, [])

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    return (
        <>
            <div className="flex justify-center items-end h-full">
                {sortingArray.map((item) =>
                    <div className="p-1"
                         style={{
                             height: item.value + "%",
                             width: 100 / sortingArray.length + "%",
                             fontSize: (100 / sortingArray.length) / 2 + "em"
                         }} key={item.id}>
                        <div
                            className="bg-primary rounded-lg h-full text-center text-white items-start"
                        >

                        </div>
                    </div>
                )}
            </div>


        </>
    )
}