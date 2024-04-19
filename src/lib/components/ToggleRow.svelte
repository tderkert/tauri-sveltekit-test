<script>
    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let value = false;
    export let subtitle = "";
    export let trailingLabel = "";
    let id = "toggleRow-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Added to make sure they are included in tailwind build
    let tailwindClasses = 'w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-full'

    let paddingX = 'px-3'
    let paddingY = 'py-2'

    $: stateClass = ` ${value ? 'bg-primary group-hover:brightness-110' : 'bg-background-selection-3 group-hover:bg-background-selection-4 hover:bg-background-selection-4'} `
    $: controlStateClass = ` translate-y-.5 ${value ? 'translate-x-5.5' : 'translate-x-.5'} `

    let size = 'w-11 h-6'
    let controlSize = 'w-5 h-5'

    function toggle() {
        value = !value
    }

    



</script>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex items-center" on:click>
        <div class="{stateClass} relative block {size} rounded-full select-none cursor-pointer transition duration-200 ease-out">
            <div class="absolute {controlSize} {controlStateClass} bg-white rounded-full transition duration-200 ease-out pointer-events-none" ></div>
            <input on:change bind:checked={value} type="checkbox" name="{id}" id="{id}" class="block absolute w-full h-full opacity-100 rounded-full appearance-none focus:ring-1 cursor-pointer" />
        </div>
    </div>
</RowWrapper>

