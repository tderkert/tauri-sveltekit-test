<script lang="ts">
    import Icon from "$lib/components/Icon.svelte"
    export let icon:string|null = null
    export let variant:string = "secondary"
    export let active = false // to force active state
    let appendClass = ""
    export { appendClass as class };
    $: defaultSlotEmpty = $$slots.default === undefined


    $: variantClasses = `
        ${variant == "primary" ? "bg-primary text-on-primary hover:brightness-90 active:brightness-75" : ""}
        ${variant == "secondary" && !active ? "bg-background-selection hover:bg-background-selection-2 active:bg-background-selection-3" : ""}
        ${variant == "secondary" &&  active ? "bg-background-selection-2" : ""}
        ${variant == "ghost" && !active ?     "hover:bg-background-selection active:bg-background-selection-3" : ""}
        ${variant == "ghost" &&  active ? "bg-background-selection-3" : ""}
    `

    

</script>

<button on:click class="flex shrink-0 min-h-[2.5rem] translate-z-0 {defaultSlotEmpty ? 'w-10  px-0 items-center justify-center' : 'p-2 px-3'} gap-2 items-center text-md rounded-md  cursor-pointer transition duration-100 font-medium {variantClasses} {appendClass}" {...$$restProps}>
    {#if icon}
        <Icon size="20" name={icon}/>
    {/if}
    <slot/>
</button>