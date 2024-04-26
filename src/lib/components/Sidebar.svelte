<script lang="ts">
  import SidebarNavigationItem from './SidebarNavigationItem.svelte';

    import Icon from "$lib/components/Icon.svelte";
    import GlobalState from "$lib/stores/GlobalState.store";
    import Settings from "$lib/stores/Settings.store";
    import { page } from "$app/stores";
    import Button from './Button.svelte';
    import type { MenuItem } from '$lib/types';

    let menuData: Array<MenuItem> = [
        {
            name: "Home",
            icon: "HOME",
            route: "/",
        },
        {
            name: "About",
            icon: "INFO",
            route: "/about/",
            badge: "12",
        },
        {
            name: "Settings",
            icon: "SETTINGS",
            route: "/settings/",
        },
        {
            name: "Components",
            icon: "PACKAGE",
            route: "/components/",
        },
        {
            name: "Icons",
            icon: "INFO",
            route: "/icons/",
        },
    ];

    function toggleTheme() {
        console.log("toggleTheme")
        Settings.update((state:any) => {
            console.log(state)
            state.theme = state.theme === "dark" ? "light" : "dark";
            return state
        });
    }

    /* HANDLE DRAGGING EDGE */

    let dragging = false;
    let dragStartX = 0
    let sidebarStartWidth = 0

    function handleDragEdgeStart(event:any) {
        event.preventDefault()
        dragStartX = event.clientX
        sidebarStartWidth = $Settings.sidebarWidth
        dragging = true
    }
    function handleMousemove(event:any) {
        if (dragging) {
            let offset = event.clientX - dragStartX
            let newWidth = sidebarStartWidth + offset

            if (newWidth > $Settings.sidebarWidthMax) {
                newWidth = $Settings.sidebarWidthMax
            }else if (newWidth < $Settings.sidebarWidthMin) {
                newWidth = $Settings.sidebarWidthMin
            }
            $Settings.sidebarWidth = newWidth
        }
    }
    function handleMouseup() {
        dragging = false
    }

</script>

<svelte:window
    on:mousemove={handleMousemove}
    on:mouseup={handleMouseup} 
/>



<!-- SIDEBAR -->
<div style="width:{$Settings.sidebarWidth}px" class="w-64 grow-0 shrink-0 h-full bg-background-2 text-foreground flex flex-col gap-1 pt-8 divide-y divide-border border-r border-border tracking-wide relative {dragging ? '' : 'transition-all'}">
    <!-- MAIN STACK -->
    <div class="flex flex-col h-full gap-1 p-2 overflow-x-hidden">
        <!-- ITEM -->
        {#each menuData as item}
            <SidebarNavigationItem {item} />
        {/each}
    </div>
    <!-- BOTTOM STACK -->
    <div class="flex flex-col gap-1 p-2">
        <Button variant="ghost" icon="LOG-OUT">Logout</Button>
        <Button on:click={toggleTheme} variant="ghost">
            <div class="flex justify-between w-full items-center">
                <div>Mode</div>
                <div class="flex items-center gap-2 capitalize text-foreground-2">
                    <Icon size="16" name={$Settings.theme === "dark" ? "MOON" : "SUN"}/>
                    {$Settings.theme} 
                </div>
            </div>
        </Button>
        <Button variant="ghost">
            <div class="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-full"></div>
            <div class="flex flex-col text-left">
                Profile
                <span class="text-foreground-2">Test Appleseed</span>
            </div>
        </Button>
    </div>


    <!-- DRAG EDGE AREA -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:mousedown={handleDragEdgeStart} class="absolute w-4 -right-2 -top-20 bottom-0 z-20 cursor-ew-resize {dragging ? 'opacity-100' : 'opacity-0 hover:opacity-100'} transition delay-50  hover:delay-50 select-none">
        <div class="w-1 ml-1.5 h-full bg-primary-border z-20"/>
    </div>
</div>

