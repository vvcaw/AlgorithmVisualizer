import {useEffect, useState} from "preact/compat";

export const BubbleSortRenderer = (props) => {

    const [sorting, setSorting] = useState(false)
    const [sortingArray, setSortingArray] = useState([])
    const [animation, setAnimation] = useState({})

    const random = () => {
        if (!sorting) {
            let array = Array.from({length: 10}, () => Math.floor(Math.random() * 100)).map((x, i) => ({
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

    return (
        <>

        </>
    )
}