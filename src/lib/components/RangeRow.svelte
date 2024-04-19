<script lang="ts">
    import { onMount } from "svelte";
    import RowWrapper from "$lib/components/helpers/RowWrapper.svelte";

    export let label = "Label";
    export let subtitle = "";
    export let trailingLabel = "";
    export let value = 50;
    export let disabled = false
    export let step = 1
    export let min = 0
    export let max = 100
    export let progress:boolean = false
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let rangeElement: HTMLInputElement;
    // calculate progress percent based on min, max, and value
    $: progressPercent = ((value - min) / (max - min)) * 100;
    


</script>

<style>
    input[type="range"]::-moz-range-thumb {
        @apply bg-white border-none appearance-none w-5 h-5 rounded-full shadow-overlay ;
    }
    input[type="range"]::-webkit-slider-thumb {
        @apply bg-white border-none appearance-none h-5 w-5 rounded-full -translate-y-2 shadow-overlay;
    }
    input[type="range"]::-webkit-slider-runnable-track{
        @apply h-1 rounded-full;
    }
    input[type="range"]::-moz-range-track {
        @apply h-1 rounded-full;
    }
    input[type="range"] {
        @apply bg-transparent rounded-md py-4;
    }
</style>

<RowWrapper {label} {subtitle} {trailingLabel} {id}>
    <!-- SLIDER WRAPPER -->
    <div class="flex items-center relative max-w-2xs">
        <!-- TRACK CONTAINER -->
        <div class="flex flex-row items-center w-full h-full absolute top-0 left-0 z-0">
            <!-- TRACK -->
            <div class="h-1 w-full grow-0 shrink-0 bg-background-selection-3 rounded-full overflow-hidden">
                <!-- PROGRESS -->
                {#if progress}
                    <div class="h-full bg-primary" style="width:{progressPercent}%"></div>
                {/if}
            </div>
        </div>
        <!-- RANGE INPUT -->
        <input type="range" {id} {min} {max} {step} {disabled} name="{id}" bind:value={value}  class="w-full appearance-none h-1 z-10 relative"/>
    </div>
    
</RowWrapper>
