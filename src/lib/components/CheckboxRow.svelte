<script>
    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";
    import CheckboxControl from '$lib/components/CheckboxControl.svelte';

    export let label = "Label";
    export let value = false;
    export let subtitle = "";
    export let trailingLabel = "";
    let id = "toggleRow-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


</script>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>
    <div class="flex items-center">
        <CheckboxControl {id} bind:value={value}></CheckboxControl>
    </div>
</RowWrapper>

