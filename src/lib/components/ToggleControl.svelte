<script>
    export let value = false;
    export let id = ""

    $: stateClass = ` ${value ? 'bg-primary group-hover:brightness-110' : 'bg-background-selection-3 group-hover:bg-background-selection-4 hover:bg-background-selection-4'} `
    $: controlStateClass = ` translate-y-.5 ${value ? 'translate-x-5.5' : 'translate-x-.5'} `

    let size = 'w-11 h-6'
    let controlSize = 'w-5 h-5'


    



</script>

<div class="{stateClass} relative block {size} rounded-full select-none cursor-pointer transition duration-200 ease-out">
    <div class="absolute {controlSize} {controlStateClass} bg-white rounded-full transition duration-200 ease-out pointer-events-none" ></div>
    <input on:change bind:checked={value} type="checkbox" name="{id}" id="{id}" class="block absolute w-full h-full opacity-100 rounded-full appearance-none focus:ring-1 cursor-pointer" />
</div>

