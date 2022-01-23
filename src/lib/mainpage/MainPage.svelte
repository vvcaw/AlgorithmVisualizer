<script>
    import BubbleSortMain from "../algorithms/bubbleSort/BubbleSortMain.svelte";

    export let mainStyle
</script>


<div class="bg-background w-full flex flex-col p-4 gap-y-4 gap-x-4 {mainStyle}">
    <BubbleSortMain/>
</div>