<script lang="ts">
    import PageContainer from "$lib/components/PageContainer.svelte";
    import Button from "$lib/components/Button.svelte";


    import IconsGridOverview from "./icons-grid-overview.svelte";
    import InputText from "$lib/components/InputText.svelte";

    let filterString = ""

    function clearFilter() {
        filterString = ""
    }
    
</script>

<PageContainer>
    <svelte:fragment slot="title">
        Icons (Feather Icons)
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button on:click={clearFilter} variant="{filterString !== "" ? 'primary': 'ghost'}" icon="X">Clear</Button>
        <InputText bind:value={filterString} icon="SEARCH" placeholder="Filter"/>
    </svelte:fragment>
    
    <div class="flex flex-col gap-3">
        <IconsGridOverview bind:filter={filterString}/>

    </div>
</PageContainer>