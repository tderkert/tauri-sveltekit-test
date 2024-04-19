<script lang="ts">
    import Button from '$lib/components/Button.svelte'
    import Icon from '$lib/components/Icon.svelte';
    import type { Action } from "$lib/types";
    let open = false

    export let actions: Array<Action> = []
    export let direction: string = "SE"
    export let variant: string = "secondary"
    let id = crypto.randomUUID()


    let menu: HTMLDivElement
    let componentWrapper: HTMLDivElement
    

    $: menuDirectionClass = `
        ${direction === "NE" ? 'bottom-11 left-0' : ''}
        ${direction === "NW" ? 'bottom-11 right-0' : ''}
        ${direction === "SW" ? 'top-11 right-0' : ''}
        ${direction === "SE" ? 'top-11 left-0' : ''}
    `

    $:verticalOffsetClass = `
        ${direction === "NE" ? 'transform translate-y-2' : ''}
        ${direction === "NW" ? 'transform translate-y-2' : ''}
        ${direction === "SW" ? 'transform -translate-y-2' : ''}
        ${direction === "SE" ? 'transform -translate-y-2' : ''}
    `

    function toggleOpen() {
        open = !open
    }

    function doAction(action:any){
        if(open) {
            action.action()
            toggleOpen()
        }
        
    }

    function handleClickOutside(event:any) {
        if (open) {
            // Check if click was outside the menu
            if (componentWrapper && !componentWrapper.contains(event.target)) {
                toggleOpen()
            }
        }
    }

</script>
<svelte:window on:click={handleClickOutside}/>

<!-- CONTENXT BUTTON WRAPPER -->
<div bind:this={componentWrapper} class="relative" >
    <Button aria-haspopup="listbox" aria-controls="{id}" on:click={toggleOpen} bind:active={open} icon="more-horizontal" variant={variant}/>
    <!-- MENU -->
    <div role="listbox" id="{id}" bind:this={menu} class="flex flex-col p-1 absolute {menuDirectionClass} bg-background-3 shadow-overlay rounded-lg overflow-hidden transition {open ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none' + verticalOffsetClass}">
        {#each actions as action}
            <Button tabindex="{open ? '' : '-1'}" role="option" variant="ghost" on:click={()=>doAction(action)} icon={action.icon}>{action.name}</Button>
        {/each}
    </div>
</div>