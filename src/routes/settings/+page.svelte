<script lang="ts">
    import PageContainer from "$lib/components/PageContainer.svelte";
    import Button from "$lib/components/Button.svelte";
    import ToggleRow from "$lib/components/ToggleRow.svelte";
    import InputRow from "$lib/components/InputRow.svelte";
    import Settings from "$lib/stores/Settings.store";
    import RowGroup from "$lib/components/RowGroup.svelte";
    import RangeRow from "$lib/components/RangeRow.svelte";

    $: themeBool = $Settings.theme === "dark";
    // Make title case
    $: themeLabel = $Settings.theme.charAt(0).toUpperCase() + $Settings.theme.slice(1);

    // Function to toggle the theme
    function toggleTheme() {
        console.log("toggleTheme")
        $Settings.theme = themeBool ? "light" : "dark";
    }
    let exampleValueScale = 120;
    let exampleValueVolume = 50;
    let exampleValueSize = 50;
</script>

<PageContainer>
    <svelte:fragment slot="title">
        Settings
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button>Action</Button>
    </svelte:fragment>
    <RowGroup container={true}>
        <InputRow label="Sidebar Width" type="number" min={$Settings.sidebarWidthMin} step={40} max={$Settings.sidebarWidthMax} bind:value={$Settings.sidebarWidth}/>
        <ToggleRow value={themeBool} on:click={toggleTheme} label="Mode" trailingLabel={themeLabel}/>
        <ToggleRow value={true} label="Test"/>
    </RowGroup>
    
    <RowGroup container={true}>
        <ToggleRow value={true}  label="Example"/>
        <ToggleRow value={false} label="Get notifications" subtitle="No marketing, we promise"/>
        <ToggleRow value={false} label="Auto-logout"/>
        <RangeRow label="Volume" progress={true} trailingLabel={exampleValueVolume.toString()+'%'} bind:value={exampleValueVolume} min={0} max={100} step={1}/>
        <RangeRow label="Scale" subtitle="50-150%" trailingLabel={exampleValueScale.toString()} bind:value={exampleValueScale} min={50} max={150} step={1}/>
        <RangeRow label="Scale" subtitle="With progress" progress={true} trailingLabel={exampleValueScale.toString()} bind:value={exampleValueScale} min={50} max={150} step={1}/>
        <RangeRow label="Size" subtitle="With progress" progress={true} trailingLabel={exampleValueSize.toString()} bind:value={exampleValueSize} min={-100} max={100} step={20}/>
    </RowGroup>
        

</PageContainer>