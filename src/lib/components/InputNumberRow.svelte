<script lang="ts">
    import InputNumber from '$lib/components/InputNumber.svelte';

    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let subtitle = "";
    export let trailingLabel = "";
    export let value:number = 0;
    export let disabled = false
    export let step = 1
    export let min:number|undefined = undefined
    export let max:number|undefined = undefined

    $: addMin = min ? `min="${min}""` : ""

    let id = "inputRow-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Added to make sure they are included in tailwind build
    let tailwindClasses = 'w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-full'


    



</script>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>

        <InputNumber {disabled} {id} {step} min="{min}" max="{max}" bind:value={value}></InputNumber>
    
</RowWrapper>
