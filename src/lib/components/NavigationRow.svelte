<script lang="ts">
    import { onMount } from "svelte";
    import Button from "$lib/components/Button.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let subtitle = "";
    export let trailingLabel = "";
    export let action = () => {};
    
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    function handleAction(event:any) {
        event.preventDefault()
        // Prevent hyperlink navigation when         
        action();
    }


</script>


<button on:click={handleAction} class="text-left relative transition group">
    <RowWrapper {label} {subtitle} {trailingLabel} {id}>
        <div class="text-foreground-3">
            <Icon size="20" name="CHEVRON-RIGHT" />
        </div>
    </RowWrapper>
    <!-- HOVER PLATE -->
    <div class="text-left absolute inset-0  group-active:bg-background-selection transition -mx-4"></div>
</button>