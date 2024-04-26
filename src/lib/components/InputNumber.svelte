<script lang="ts">

    export let label: string = "";
    export let value: number = 0;
    export let textAlign: "start" | "center" | "end" = "start";
    export let disabled:boolean = false
    export let step = 1
    export let min:number|undefined = undefined
    export let max:number|undefined = undefined
    export let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Added to make sure they are included in tailwind build
    let tailwindClasses = 'w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-full'

    $: textAlignClass = `
        ${textAlign === "start" ? "text-start" : ""}
        ${textAlign === "center" ? "text-center" : ""}
        ${textAlign === "end" ? "text-end" : ""}`
    



</script>

<!-- MAIN WRAPPER -->
<div class="flex flex-col gap-1 w-60">
    <!-- LABEL -->
    {#if label !== ""}
        <label for="{id}">{label}</label>
    {/if}
    <!-- INPUT -->
    <input class="p-2 rounded-md {textAlignClass} h-10 transition bg-background-selection hover:bg-background-selection-2 active:bg-background-selection-2" 
    type="number" 
    {step} 
    min="{min}"
    max="{max}"
    {id} 
    disabled="{disabled}"
    bind:value={value}>

</div>
