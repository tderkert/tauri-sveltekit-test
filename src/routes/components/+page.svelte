<script lang="ts">
    import Settings from "$lib/stores/Settings.store";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import Button from "$lib/components/Button.svelte";
    import ContextMenu from "$lib/components/ContextMenu.svelte";
    import toast from "$lib/components/toast/toast";
    import ToggleRow from "$lib/components/ToggleRow.svelte";
    import InputRow from "$lib/components/InputRow.svelte";
    import InputNumberRow from "$lib/components/InputNumberRow.svelte";
    import RangeRow from "$lib/components/RangeRow.svelte";
    import NavigationRow from "$lib/components/NavigationRow.svelte";
    import CheckboxRow from "$lib/components/CheckboxRow.svelte";
    import RowGroup from "$lib/components/RowGroup.svelte";

    import ColorSwatch from "./colorSwatch.svelte";
    import { goto } from "$app/navigation";
    import ToggleControl from "$lib/components/ToggleControl.svelte";
    import CheckboxControl from "$lib/components/CheckboxControl.svelte";
    import InputText from "$lib/components/InputText.svelte";
    import InputNumber from "$lib/components/InputNumber.svelte";

    $: invertedTheme = $Settings.theme === "dark" ? "light" : "dark";

    let exampleActions = [
        { name: "Settings", icon: "settings", action: () => toast.add("Action: Settings") },
        { name: "About", icon: "info", action: () => toast.add("Action: About") },
        { name: "Quit", icon: "power", action: () => toast.add("Action: Quit") },
    ]
    let exampleValueScale = 120;
    let exampleValueVolume = 50;
    let exampleValueSize = 50;
</script>

<PageContainer>
    <svelte:fragment slot="title">
        Icons
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button icon="settings">Settings</Button>
        <Button variant="primary">Save data</Button>
    </svelte:fragment>
    
    <div class="flex flex-col gap-3">

        <h2 class="text-2xl font-semibold mt-4">Buttons</h2>
        <div class="flex flex-col gap-2">
            <!-- ROW -->
            <div class="flex gap-2">
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
            </div>
            <!-- ROW -->
            <div class="flex gap-2">
                <Button icon="CLOUD-DRIZZLE">Default</Button>
                <Button icon="CLOUD-DRIZZLE" variant="primary">Primary</Button>
                <Button icon="CLOUD-DRIZZLE" variant="ghost">Ghost</Button>
            </div>
            <!-- ROW -->
            <div class="flex gap-2">
                <Button icon="PEN-TOOL"></Button>
                <Button icon="PEN-TOOL" variant="primary"></Button>
                <Button icon="PEN-TOOL" variant="ghost"></Button>
            </div>
        </div>

        <h2 class="text-2xl font-semibold mt-4">Context Menu</h2>
        <div class="flex flex-col gap-2">
            <!-- ROW -->
            <div class="flex gap-2">
                <ContextMenu actions={exampleActions}/>
                <ContextMenu actions={exampleActions} direction="NE"/>
                <ContextMenu actions={exampleActions} direction="SW"/>
                <ContextMenu actions={exampleActions} direction="NW"/>
            </div>
            <!-- ROW -->
            <div class="flex gap-2">
                <ContextMenu variant="primary" actions={exampleActions}/>
                <ContextMenu variant="primary" actions={exampleActions} direction="NE"/>
                <ContextMenu variant="primary" actions={exampleActions} direction="SW"/>
                <ContextMenu variant="primary" actions={exampleActions} direction="NW"/>
            </div>
            <!-- ROW -->
            <div class="flex gap-2">
                <ContextMenu variant="ghost" actions={exampleActions}/>
                <ContextMenu variant="ghost" actions={exampleActions} direction="NE"/>
                <ContextMenu variant="ghost" actions={exampleActions} direction="SW"/>
                <ContextMenu variant="ghost" actions={exampleActions} direction="NW"/>
            </div>
        </div>

        <h2 class="text-2xl font-semibold mt-4">Inputs</h2>
        <div class="flex flex-row gap-2">
            <InputText label="Input Text" value="Example text" />
            <InputNumber label="Input Number" min={0} max={100} step={10} value={2} />
            
        </div>
        <div class="flex flex-row gap-2">
            <InputText value="" icon="search" />   
            <InputText value="" icon="calendar" />    
        </div>
        

        <h2 class="text-2xl font-semibold mt-4">Controls</h2>
        <!-- ROW -->
        <div class="flex gap-2 items-center">
            <ToggleControl value={true} /> 
            <ToggleControl value={false} />
            <CheckboxControl value={true} />
            <CheckboxControl value={false} />
        </div>

        <h2 class="text-2xl font-semibold mt-4">Rows</h2>
        <!-- COL -->
        <RowGroup container={true}>
            <ToggleRow label="Toggle Row" on:change={() => toast.add('toggle change')}/>
            <ToggleRow label="Toggle Row" subtitle="Subtitle" />
            <ToggleRow label="Toggle Row" trailingLabel="Trailing Label"/>
        </RowGroup>
        <RowGroup container={true}>
            <InputRow label="Input Row" value="Example text" />
            <InputRow label="Input Row" subtitle="Subtitle" value="Example text" />
            <InputNumberRow label="Input Row" subtitle="Subtitle" value={20} />
            <InputNumberRow label="Input Row (Step 40) (0-80)" subtitle="Subtitle" step={40} min={0} max={80} value={20} />

        </RowGroup>
        <RowGroup container={true}>
            <RangeRow label="Volume" progress={true} trailingLabel={exampleValueVolume.toString()+'%'} bind:value={exampleValueVolume} min={0} max={100} step={1}/>
            <RangeRow label="Scale" subtitle="50-150%" trailingLabel={exampleValueScale.toString()+'%'} bind:value={exampleValueScale} min={50} max={150} step={1}/>
            <RangeRow label="Size" subtitle="Progress and step-size 20" progress={true} trailingLabel={exampleValueSize.toString()} bind:value={exampleValueSize} min={-100} max={100} step={20}/>
        </RowGroup>
        <RowGroup container={true}>
            <NavigationRow action={()=> goto('sub-page')} label="Navigation Row" />
            <NavigationRow action={()=> goto('sub-page')} label="Navigation Row" subtitle="Subtitle" />
            <NavigationRow action={()=> goto('sub-page')} label="Navigation Row" trailingLabel="Trailing Label"/>
        </RowGroup>

        <RowGroup container={true}>
            <CheckboxRow label="Checkbox Row" value={true}/>
            <CheckboxRow label="Checkbox Row" />
        </RowGroup>

        <RowGroup title="Container = falses">
            <ToggleRow label="Toggle Row" />
            <InputRow label="Input Row" value="Example text" />
            <RangeRow label="Volume" progress={true} trailingLabel={exampleValueVolume.toString()+'%'} bind:value={exampleValueVolume} min={0} max={100} step={1}/>
            <NavigationRow action={()=> goto('sub-page')} label="Navigation Row" />
        </RowGroup>

        
        

        <h2 class="text-2xl font-semibold mt-4">Toasts</h2>
        <!-- ROW -->
        <div class="flex gap-2">
            <Button on:click={()=>{ toast.add("Example toast was sent") }} icon="SEND">Send Toast</Button>
        </div>

        <h2 class="text-2xl font-semibold mt-4">Colors</h2>
        <div class="grid gap-2 grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col gap-1 bg-background p-4 rounded-md border border-border">
                <h2 class="text-foreground">Active Theme</h2>
                <!-- Swatch -->
                <ColorSwatch color="bg-primary" />
                <ColorSwatch color="bg-primary-icon" />
                <ColorSwatch color="bg-primary-border" />
                <ColorSwatch color="bg-on-primary" />
                <ColorSwatch color="bg-background" />
                <ColorSwatch color="bg-background-2" />
                <ColorSwatch color="bg-background-3" />
                <ColorSwatch color="bg-background-selection" />
                <ColorSwatch color="bg-background-selection-2" />
                <ColorSwatch color="bg-background-selection-3" />
                <ColorSwatch color="bg-background-selection-4" />
                <ColorSwatch color="bg-foreground" />
                <ColorSwatch color="bg-foreground-2" />
                <ColorSwatch color="bg-foreground-3" />
                <ColorSwatch color="bg-border" />
            </div>
            
            <div class="flex flex-col gap-1 bg-background text-foreground p-4 rounded-md" data-theme="{invertedTheme}">
                <h2 class="text-foreground">{invertedTheme}</h2>
                <!-- Swatch -->
                <ColorSwatch color="bg-primary" />
                <ColorSwatch color="bg-primary-icon" />
                <ColorSwatch color="bg-primary-border" />
                <ColorSwatch color="bg-on-primary" />
                <ColorSwatch color="bg-background" />
                <ColorSwatch color="bg-background-2" />
                <ColorSwatch color="bg-background-3" />
                <ColorSwatch color="bg-background-selection" />
                <ColorSwatch color="bg-background-selection-2" />
                <ColorSwatch color="bg-background-selection-3" />
                <ColorSwatch color="bg-background-selection-4" />
                <ColorSwatch color="bg-foreground" />
                <ColorSwatch color="bg-foreground-2" />
                <ColorSwatch color="bg-foreground-3" />
                <ColorSwatch color="bg-border" />
            </div>
        </div>
    
    </div>
</PageContainer>