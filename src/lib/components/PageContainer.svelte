<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageUrl } from "$lib/types";
    import Button from "./Button.svelte";

    export let parentPage:PageUrl|null = null;
    let scrollY = 0;
    $: scrolled = scrollY > 10;
    let content:HTMLElement;
    let wrapper:HTMLElement;
    let header:HTMLElement;

    function handleScroll(event:any) {
        scrollY = event.target.scrollTop;
        scrolled = scrollY > 0;
    }

    function handleBack() {
        if(parentPage){
            goto(parentPage.route);
        }
    }

</script>



<div bind:this={wrapper} class="w-full flex flex-col items-stretch h-full overflow-hidden">
    <!-- Page Title -->
    <div bind:this={header} data-tauri-drag-region class="p-6 pt-10 border-border active transition-colors {scrolled ? 'border-b bg-background-2' : ''} ">
        <!-- TITLE CONTENT -->
        <!-- <div class="flex flex-row items-center select-none pointer-events-none transition duration-300 {scrolled ? '' : 'translate-y-4'}"> -->
        <div class="flex flex-row items-center select-none pointer-events-none transition ease-out duration-[70ms]" style="transform:translateY({Math.max(-scrollY/2+10, 0)}px)">
            {#if parentPage}
                <div class="pointer-events-auto -ml-4">
                    <Button variant="ghost" icon="CHEVRON-LEFT" on:click={handleBack} class="pl-2">
                        {parentPage.name}
                    </Button>
                </div>
            {/if}
            <!-- TITLE -->
            <h1 class="grow-1 w-full shrink-1 text-3xl font-bold pointer-events-none {parentPage? 'text-center': ''}">
                <slot name="title"/>
            </h1>
            <!-- ACTIONS -->
            <div class="flex gap-2 grow-0 shrink-0 pointer-events-auto">
                <slot name="actions"/>
            </div>
        </div>
    </div>
    <!-- Page Content -->
    <div on:scroll={handleScroll} bind:this={content} class="flex flex-col gap-3 p-6 leading-relaxed bg-background h-full overflow-x-hidden overflow-y-scroll select-text">
        <slot/>
    </div>
</div>