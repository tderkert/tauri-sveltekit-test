<script>
    import { onMount } from "svelte";
    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let subtitle = "";
    export let trailingLabel = "";
    export let value = "";
    export let type = "text"
    export let disabled = false
    export let step = 1
    export let min = ''
    export let max = ''
    let id = "inputRow-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Added to make sure they are included in tailwind build
    let tailwindClasses = 'w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-full'


    



</script>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>
    {#if type === "number"}
        <input class="p-2 bg-transparent rounded-md text-right transition hover:bg-background-selection active:bg-background-selection" type="number" {id} {step} {min} {max} disabled={disabled} bind:value={value}>
    {:else}
        <input class="p-2 bg-transparent rounded-md text-right transition hover:bg-background-selection active:bg-background-selection" type="text" {id} bind:value={value}>
    {/if}
</RowWrapper>
