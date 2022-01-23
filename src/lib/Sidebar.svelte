<script>
    import Subheader from './Subheader.svelte';
    import SidebarButton from './SidebarButton.svelte';

</script>

<div class="bg-white lg:h-screen h-auto lg:pb-0 lg:pr-12 pr-10 lg:col-span-3 col-span-12">


    <div class="pl-10 pt-10">

        <Subheader text={"SORTING"}/>

        <!--  <Logo/>    !-->
    </div>


    <SidebarButton buttontext={"Quick Sort"}/>
    <SidebarButton buttontext={"Bubble Sort"}/>
    <SidebarButton buttontext={"Radix Sort"}/>
    <SidebarButton buttontext={"Merge Sort"}/>

    <div class="pl-10">
        <Subheader buttontext={"TREE"}/>
    </div>

    <SidebarButton buttontext={"Binary Tree"}/>
    <SidebarButton buttontext={"AVL Tree"}/>
</div>