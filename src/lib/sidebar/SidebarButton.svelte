<script>
    import '../icons/MenuIcon.svelte'
    import MenuIcon from "../icons/MenuIcon.svelte";

    export let buttontext
</script>

<button class="text-xl text-fontcolor pt-1.5 pb-1.5 pr-1.5 ml-6 hover:bg-hovercolor hover:font-bold hover:text-primary rounded-md w-full text-left">
    <div class="pl-4 flex items-center">
        <MenuIcon iconStyle="h-6 w-6 mt-0.5 float-left"/>
        <span class="ml-5">{buttontext}</span>
    </div>
</button>