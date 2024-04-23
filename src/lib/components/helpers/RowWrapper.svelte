<script lang="ts">
    export let label = "Label";
    export let subtitle = "";
    export let trailingLabel = "";
    export let id:string

    let paddingY = 'py-2'
    let horizontalGap = 'gap-3'
    let minHeight = 'min-h-[3.75rem]'


</script>



<div class="flex {horizontalGap} w-full items-center group relative" >
    <label class="flex text-foreground items-center gap leading-tight select-none flex-grow flex-shrink-0 tabular-nums {paddingY} {minHeight} w-auto" for="{id}">
        <!-- Stacked Labels -->
        <div class="flex flex-col flex-grow flex-shrink-0">
            <span class="font-medium">{label}</span>
            {#if subtitle}
                <span class="text-foreground-2 text-sm">{subtitle}</span>
            {/if}
        </div>
        {#if trailingLabel}
            <span class="text-foreground-2 text-sm">{trailingLabel}</span>
        {/if}
    </label>
    <slot/>
</div>
