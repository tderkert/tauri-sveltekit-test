<script lang="ts">
    import InputText from '$lib/components/InputText.svelte';

    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let subtitle = "";
    export let trailingLabel = "";
    export let value:string = "";
    export let disabled = false
    let id = "inputRow-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Added to make sure they are included in tailwind build
    let tailwindClasses = 'w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-full'


    



</script>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>

        <InputText {disabled} {id} bind:value={value}></InputText>
    
</RowWrapper>
