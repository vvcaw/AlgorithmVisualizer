<script>
    import Subheader from './Subheader.svelte';
    import SidebarButton from './SidebarButton.svelte';
    import Logo from './Logo.svelte'
    import Toggle from "./Toggle.svelte";

    let toggled = true
</script>

<div class="bg-white lg:h-screen h-auto lg:pb-0 lg:pr-12 lg:col-span-3 col-span-12">
    <div class="pl-10 lg:pt-10 pt-5 pr-10 pb-5 lg:pb-0">
        <div class="flex justify-between">
            <Logo/>
            <Toggle bind:toggled={toggled}/>
        </div>
    </div>

    {#if toggled}
        <div class="pl-10">
            <Subheader text={"SORTING"}/>
        </div>

        <SidebarButton buttontext={"Quick Sort"}/>
        <SidebarButton buttontext={"Bubble Sort"}/>
        <SidebarButton buttontext={"Radix Sort"}/>
        <SidebarButton buttontext={"Merge Sort"}/>

        <div class="pl-10">
            <Subheader text={"TREE"}/>
        </div>

        <SidebarButton buttontext={"Binary Tree"}/>
        <SidebarButton buttontext={"AVL Tree"}/>

        <div class="pb-10"></div>
    {/if}
</div>