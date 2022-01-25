<script>
    import {gsap} from "gsap";
    import * as Q from 'jquery';

    let sortingArray = []
    let timeline = gsap.timeline({paused: true, smoothChildTiming: false})
    let animationStep = 0.4

    const random = () => {
        sortingArray = generateArray()
    }

    const generateArray = () => {
        return Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1).map((x, i) => ({
            id: `block${i}`,
            value: x
        }));
    }

    export const add = (v) => {
        sortingArray = [
            ...sortingArray,
            {
                id: `block${sortingArray.length}`,
                value: v
            }
        ]
    }

    export const shuffle = () => {
        sortingArray = generateArray()
    }


    export const clear = () => {
        timeline.clear()
        sortingArray = []
    }

    export const run = () => {
        startAlgo()
    }

    const startAlgo = () => {
        let animationDelay = 0

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
                timeline.set(`#${item.id}-inner`, {backgroundColor: "#000000"}, animationDelay)

                if (next.value < item.value) {
                    // Render bars
                    let barWidth = Q(`#${next.id}`).outerWidth()
                    timeline.to(`#${item.id}`, {duration: animationStep, x: '+=' + `${barWidth}`}, animationDelay)

                    timeline.to(`#${next.id}`, {duration: animationStep, x: '-=' + `${barWidth}`}, animationDelay)

                    /*timeline.to(`#${next.id}-inner`, {backgroundColor: "#000000"}, animationDelay)
                    timeline.to(`#${next.id}-inner`, {backgroundColor: "#768DF7"}, animationDelay + animationStep)*/

                    animationDelay += animationStep

                    // Swap bars in list
                    runIsSorted = false
                    array[index + 1] = item
                    array[index] = next
                } else {
                    /*timeline.to(`#${item.id}-inner`, {backgroundColor: "#768DF7"}, animationDelay)*/
                }

                timeline.set(`#${item.id}-inner`, {backgroundColor: "#768DF7"}, animationDelay + animationStep)

                index++
            }

        }

        timeline.play().then(() => {
            // Reset css
            array.forEach((v) => {
                gsap.set(`#${v.id}`, {x: 0})
            })

            sortingArray = array
        })
    }

    random()
</script>

<div class="flex justify-center items-end h-full">
    {#each sortingArray as item, index}
        <div id={item.id} class="p-1" style="height: {item.value}%; width: {100 / sortingArray.length}%;">
            <div id={`${item.id}-inner`} class="opacity-50 rounded-lg h-full text-center text-white items-start" style="background-color: #768DF7"></div>
        </div>
    {/each}
</div>

