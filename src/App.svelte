<script>
    import Sidebar from "./lib/sidebar/Sidebar.svelte";
    import MainPage from "./lib/mainpage/MainPage.svelte";
</script>

<main>
    <div class="grid grid-cols-12">
        <Sidebar/>
        <MainPage mainStyle="lg:col-span-9 col-span-12"/>
    </div>
</main>
