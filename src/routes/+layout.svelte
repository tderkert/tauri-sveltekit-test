<script lang="ts">
    import "../app.pcss";
	import { fade } from 'svelte/transition';
    import WindowTitleBar from '$lib/components/WindowTitleBar.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import ToastHolder from '$lib/components/toast/ToastHolder.svelte';
    import { appWindow } from '@tauri-apps/api/window';
    import { page } from "$app/stores";
    import GlobalState from '$lib/stores/GlobalState.store';
    import Settings from '$lib/stores/Settings.store';
    
    let state = $GlobalState
    let title:string = ""
    let titleLoaded = false
    getTitle()
    
    async function getTitle() {
        let newTitle = await appWindow.title()
        title = newTitle
        titleLoaded = true
    }

    page.subscribe((value) => {
        GlobalState.update((state:any) => {
            state.currentPath = $page.url.pathname
            return state
        });
    })

    
    

</script>

<div id="app-root" data-theme="{$Settings.theme}" class="h-screen w-screen overflow-y-auto overflow-x-hidden flex flex-col items-stretch text-sm select-none bg-background text-foreground">
    <WindowTitleBar title={title}/>
    <div class="flex flex-row items-stretch h-screen w-screen overflow-hidden">
        <Sidebar/>
        <!-- PAGE WRAPPER -->
        <main transition:fade class="flex flex-row items-stretch h-screen w-screen overflow-hidden">
            <slot />
        </main>
    </div>
    <ToastHolder class="top-4" />
</div>


