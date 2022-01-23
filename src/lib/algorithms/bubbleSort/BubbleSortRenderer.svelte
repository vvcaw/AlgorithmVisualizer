<script>
    let sortingArray = []

    const random = () => {
        sortingArray = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1).map((x, i) => ({
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

    random()
</script>

<div class="flex justify-center items-end h-full">
    {#each sortingArray as item, index}
        <div id={item.id} class="p-1" style="height: {item.value}%; width: {100 / sortingArray.length}%;">
            <div class="bg-primary opacity-50 rounded-lg h-full text-center text-white items-start"></div>
        </div>
    {/each}
</div>