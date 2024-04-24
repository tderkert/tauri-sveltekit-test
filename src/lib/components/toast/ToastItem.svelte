<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly, scale } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import { toastSettings, type Toast } from "./toast";

    export let toast:Toast

    const dispatch = createEventDispatcher();
    $: settings = $toastSettings
    let timeoutMs = $toastSettings.duration
    let element


    onMount(() => {
        setTimeout(() => {
            dispatch("remove-toast", { id: toast.id });
        }, timeoutMs);
    });
    

</script>

<div in:scale={{start:0.9,/*y:20,*/ duration: settings.animationDuration, delay:100}} 
    out:scale={{start:0.9,/*y:-20,*/ duration: settings.animationDuration}} 
    bind:this={element} 
    class="py-2 px-4 transition-opacity duration-700 bg-foreground text-background rounded-xl shadow-overlay">
        {toast.message}
</div>