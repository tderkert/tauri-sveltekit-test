<script lang="ts">
    import { onMount } from "svelte";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import Button from "$lib/components/Button.svelte";
    import ContextMenu from "$lib/components/ContextMenu.svelte";
    import toast from "$lib/components/toast/toast";


</script>
<PageContainer>
    <svelte:fragment slot="title">
        Home
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <ContextMenu variant="ghost" actions={[
            { name: "Settings", icon: "settings", action: () => toast.add("Action: Settings") },
            { name: "About", icon: "info", action: () => toast.add("Action: About") },
            { name: "Quit", icon: "power", action: () => toast.add("Action: Quit") },
        ]}/>
        <Button on:click={()=>{ toast.add("Action: Log Out") }} icon="log-out">Log out</Button>
    </svelte:fragment>

    <!-- CONTENT -->
    <div class="flex items-center justify-center w-full h-full flex-grow-1 p-8 gap-8">
        <div class="flex justify-center flex-grow-1 p-8 gap-8">
            <div class="w-24 h-24 bg-gradient-to-br from-red-500 to-blue-500 rounded-full shrink-0 grow-0"></div>
            <div class="flex flex-col gap-8">
                <h1 class="font-medium text-5xl text-foreground-3">
                    A <span class="text-foreground">Tauri+SvelteKit Boilerplate</span> <br>
                    <span class="text-foreground">MacOS</span> Application.
                </h1>
                <p class="text-xl max-w-[46ch] text-foreground-2">
                    This is a boilerplate for creating MacOS applications using Tauri and SvelteKit.
                    It comes with a pre-configured with components.
                </p>
            </div>
        </div>
    </div>
</PageContainer>
