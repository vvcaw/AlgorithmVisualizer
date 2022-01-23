<script>
    import BubbleSortRenderer from "./BubbleSortRenderer.svelte";
    import BubbleSortRun from "./BubbleSortRun.svelte";

    let renderer
</script>

<div class="p-4 w-full lg:h-2/4 h-64 md:h-96 rounded-lg bg-white shadow-md">
    <BubbleSortRenderer bind:this={renderer}/>
</div>

<div class="p-4 w-full lg:h-28 h-auto rounded-lg bg-primary shadow-md">
    <BubbleSortRun on:add-event={e => renderer.add(e.detail)}/>
</div>