<script lang="ts">
    import { get } from 'svelte/store';
    import toast, { toastSettings } from './toast'
    import ToastItem from './ToastItem.svelte';
    import { flip } from 'svelte/animate';

    let addClasses = ''
    export { addClasses as class };

    $: settings = $toastSettings
    

    $: positionClass = `
        ${settings.position === 'left' ? 'left-0 top-0 bottom-0' : ''}
        ${settings.position === 'top' ? 'top-0 left-0 right-0' : ''}
        ${settings.position === 'bottom' ? 'bottom-0 left-0 right-0' : ''}
        ${settings.position === 'right' ? 'right-0 top-0 bottom-0' : ''}
        `
    // $: console.log(positionClass)


    $: directionClass = `${settings.position === ' bottom' ? 'flex-col' : 'flex-col-reverse'}`

    $: gapClass = `
        ${settings.gap == 1 ? 'gap-1' : ''}
        ${settings.gap == 2 ? 'gap-2' : ''}
        ${settings.gap == 3 ? 'gap-3' : ''}
        ${settings.gap == 4 ? 'gap-4' : ''}
        ${settings.gap == 5 ? 'gap-5' : ''}
        ${settings.gap == 6 ? 'gap-6' : ''}
        ${settings.gap == 7 ? 'gap-7' : ''}
        ${settings.gap == 8 ? 'gap-8' : ''}
        ${settings.gap == 9 ? 'gap-9' : ''}
        ${settings.gap == 10 ? 'gap-10' : ''}
        `

    function handleRemoveToast (event:any) {
        let id = event.detail.id
        toast.remove(id)
    }

</script>


<div style="padding: {$toastSettings.padding}; z-index: 500;" class="flex {directionClass} {gapClass} pointer-events-none  absolute {positionClass} items-center {addClasses}">
    {#each $toast as item, index (item.id)}
        <div style="z-index:{200-index}" animate:flip={{duration: settings.animationDuration}}>
            <ToastItem on:remove-toast={handleRemoveToast} toast={item} />
        </div>
    {/each}
    <!-- Each loop with index -->
    <!-- {#each $toast as item, index (item.id)} -->
</div>