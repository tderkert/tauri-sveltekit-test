<script lang="ts">
    export let title: string = "";
    export let container:boolean = false;

    $: containerClass = container ? "bg-background-2 px-4 rounded-xl" : "";
</script>

<style>
    
</style>

<div class="flex flex-col">
    {#if title}
    <h2 class="text-foreground-2 text-sm font-medium uppercase  {container ? 'px-4 mb-2' : ''}">{title}</h2>
    {/if}
    <div class="flex flex-col divide-y divide-border overflow-hidden {containerClass}">
        <slot></slot>
    </div>
</div>