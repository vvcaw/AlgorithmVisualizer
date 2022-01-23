<script>
    export let click
    let toggled = false
</script>

<button class="w-14 h-14 border border-2 border-subfontcolor rounded-md flex justify-center items-center focus:bg-subfontcolor lg:hidden">
    {#if toggled}

    {:else}

    {/if}
</button>