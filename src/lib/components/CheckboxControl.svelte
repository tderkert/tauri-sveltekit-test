<script>
    import Icon from "./Icon.svelte";
    import { elasticOut } from "svelte/easing";
    import { scale } from "svelte/transition";
    export let value = false;
    export let id = ""
    
    $: CheckboxClass = ` ${value ? 'bg-primary border-transparent' : ' border-foreground-4 group-hover:border-foreground-3'} `
    $: checkmarkClass = `text-on-primary transition-all duration-150 ease-out`
    let size = 'w-7 h-7'
</script>

<div class="{CheckboxClass} relative block {size} border-2 rounded-md select-none cursor-pointer transition duration-200 ease-out">
    <!-- BOX -->
    <div class="absolute w-full h-full pointer-events-none flex items-center justify-center" >
        <!-- CHECKMARK WRAPPER -->
        {#if value}
            <div in:scale={{start:0.8, duration: 1000, easing: elasticOut}} class="{checkmarkClass}">
                <Icon name="CHECK" strokeWidth="2.4" size="20" />
            </div>
        {/if}
    </div>
    <!-- INPUT -->
    <input on:change bind:checked={value} type="checkbox" name="{id}" id="{id}" class="block absolute w-full h-full opacity-100 rounded-md appearance-none cursor-pointer" />
</div>

