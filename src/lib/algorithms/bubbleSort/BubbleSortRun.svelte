<script>
    import PlusSmIcon from "../../icons/PlusSmIcon.svelte";
    import XCircleIcon from "../../icons/XCircleIcon.svelte";
    import SortDescendingIcon from "../../icons/SortDescendingIcon.svelte";
    import FastForwardIcon from "../../icons/FastForwardIcon.svelte";
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    let toAdd
</script>

<div class="h-full w-full flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 justify-between items-center pl-4 pr-4">
    <div class="h-10 flex justify-center items-center">
        <div class="relative">
            <div class="absolute top-2 left-2">
                <PlusSmIcon iconStyle="h-5 w-5 mt-0.5 text-subfontcolor"/>
            </div>
            <input bind:value={toAdd}
                   type="text"
                   class="h-10 w-72 pl-10 pr-20 rounded-3xl z-0 focus:shadow focus:outline-none shadow-md text-subfontcolor"
                   placeholder="Add something..."/>
            <div class="absolute top-1 right-1">
                <button on:click={dispatch('add-event', toAdd)}
                        class="h-8 w-20 text-white rounded-3xl bg-primary hover:opacity-80">Add
                </button>
            </div>
        </div>
    </div>

    <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 gap-x-3">
        <button
                class="bg-white p-2 h-10 w-32 rounded-3xl text-subfontcolor font-medium flex flex-row-reverse justify-center items-center gap-x-1 shadow-md hover:opacity-80 hover:text-primary hover:font-bold">
            <span>Clear</span>
            <XCircleIcon iconStyle="h-5 w-5 mt-0.5"/>
        </button>

        <button class="bg-white p-2 h-10 w-32 rounded-3xl text-subfontcolor font-medium flex flex-row-reverse justify-center items-center gap-x-1 shadow-md hover:opacity-80 hover:text-primary hover:font-bold">
            <span>Shuffle</span>
            <SortDescendingIcon iconStyle="h-5 w-5 mt-0.5"/>
        </button>

        <button class="bg-white p-2 h-10 w-32 rounded-3xl text-subfontcolor font-medium flex flex-row-reverse justify-center items-center gap-x-1 shadow-md hover:opacity-80 hover:text-primary hover:font-bold">
            <span>Run</span>
            <FastForwardIcon iconStyle="h-5 w-5 mt-0.5"/>
        </button>
    </div>
</div>