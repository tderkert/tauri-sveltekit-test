<script>
    import ToggleControl from '$lib/components/ToggleControl.svelte';
    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let value = false;
    export let subtitle = "";
    export let trailingLabel = "";
    let id = "toggleRow-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


</script>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>
    <div class="flex items-center">
        <ToggleControl on:change {id} bind:value={value}></ToggleControl>
    </div>
</RowWrapper>

