<script lang="ts">
    export let label: string = "";
    export let value: string = "";
    export let placeholder: string = "";
    export let textAlign: "start" | "center" | "end" = "start";
    export let disabled:boolean = false
    export let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    export let icon: string = ""

    import Icon from '$lib/components/Icon.svelte'

    // Added to make sure they are included in tailwind build
    let tailwindClasses = 'w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-full'

    $: textAlignClass = `
        ${textAlign === "start" ? "text-start" : ""}
        ${textAlign === "center" ? "text-center" : ""}
        ${textAlign === "end" ? "text-end" : ""}`
    



</script>

<!-- MAIN WRAPPER -->
<div class="flex flex-col gap-1 w-60 text-foreground-2">
    <!-- LABEL -->
    {#if label !== ""}
    <label for="{id}">{label}</label>
    {/if}

    <!-- FIELD WRAPPER -->
    <div class="relative">
        <!-- INPUT -->
        <input class="p-2 rounded-md w-full h-10 text-foreground transition bg-background-selection hover:bg-background-selection-2 active:bg-background-selection-2 {textAlignClass} {icon !== "" ? 'pl-8' : ''}" 
        type="text" 
        {id} 
        {placeholder}
        disabled="{disabled}"
        bind:value={value}>
        <!-- ICON -->
        {#if icon !== ""}
            <div class="absolute h-full flex items-center justify-center top-0 p-2 text-foreground-2">
                <Icon size="20" strokeWidth="2" name={icon}/>
            </div>
        {/if}
    </div>
</div>

