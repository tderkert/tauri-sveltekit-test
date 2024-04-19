<script lang="ts">
    export let color = '#000000'
    $: tailwindBg = `${color}`

    


</script>

<style>
    .checkered-gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(45deg, hsl(var(--twc-foreground)) 25%, transparent 25%, transparent 75%, hsl(var(--twc-foreground)) 75%, hsl(var(--twc-foreground))), linear-gradient(45deg, hsl(var(--twc-foreground)) 25%, transparent 25%, transparent 75%, hsl(var(--twc-foreground)) 75%, hsl(var(--twc-foreground)));
        background-size: 20px 20px;
        background-position: 0 0, 10px 10px;
        opacity: 0.1;
    }
</style>

<div class="flex gap-2 items-center">
    <div class="relative  rounded overflow-hidden">
        <div class="checkered-gradient"></div>
        <div class="relative w-20 h-8 border border-border rounded {tailwindBg}"></div>
        
    </div>
    <span>{color}</span>
</div>