<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import toast from "$lib/components/toast/toast";
    import IconNames from "$lib/utils/IconNames";

    export let filter = ""

    $:filteredIconNames = IconNames.filter(name => name.toLowerCase().includes(filter.toLowerCase()))
    $:inverseFilteredIconNames = IconNames.filter(name => !name.toLowerCase().includes(filter.toLowerCase()))

    let itemClass = "flex flex-col gap-2 items-center justify-center aspect-square w-full h-full"

    function handleIconClick(event:MouseEvent) {
        // get all text content in event.target
        if (event.target instanceof HTMLElement) {
            let text = event.target.textContent
            // Check if text is a string
            if (text && typeof text === "string") {
                // Clear all whitespace
                text = text.replace(/\s/g, '')
                // Copy text to clipboard
                navigator.clipboard.writeText(`${text}`)
                // Show toast notification
                toast.add(`Copied to clipboard: ${text}`)
            }
        }
    }
</script>

<style>
    .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    }
    .icon-grid .item {
        transition: background-color 0.2s;
    }
    .icon-grid .item:hover {
        background-color: var(--color-background-selection);
    }
</style>


<div class="icon-grid gap-1 text-center text-2xs">
    {#each filteredIconNames as name }
        <Button on:click={handleIconClick}>
            <div class="{itemClass}">
                <Icon size="24" name="{name}"/>
                <span class="text-foreground-2 h-[1em]">{name}</span>
            </div>
        </Button>
    {/each}    

    {#each inverseFilteredIconNames as name }
            <Button on:click={handleIconClick} class="opacity-30">
                <div class="{itemClass}">
                    <Icon size="24" name="{name}"/>
                    <span class="text-foreground-2 h-[1em]">{name}</span>
                </div>
            </Button>

    {/each}  


</div>