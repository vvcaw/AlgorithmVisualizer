<script>
    import XIcon from "../icons/XIcon.svelte";
    import MenuAlt4Icon from "../icons/MenuAlt4Icon.svelte";

    export let toggled = false

    const toggle = () => { toggled = !toggled }
</script>

<button on:click={toggle} class="w-14 h-14 border border-2 border-subfontcolor rounded-md flex justify-center items-center focus:bg-subfontcolor lg:hidden">
    {#if toggled}
        <XIcon iconStyle="w-14 h-14 text-fontcolor"/>
    {:else}
        <MenuAlt4Icon iconStyle="w-14 h-14 text-fontcolor"/>
    {/if}
</button>