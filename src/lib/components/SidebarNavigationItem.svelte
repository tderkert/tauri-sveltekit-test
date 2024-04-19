<script lang="ts">
    export let item: MenuItem;
    import Icon from "$lib/components/Icon.svelte";
    import { page } from "$app/stores";
    import type { MenuItem } from '$lib/types';

    let badgeSizeClass = "h-[1.4rem] min-w-[1.4rem]"

    // $: active = $page.url.pathname === item.route

    // Active is true if the item.route string is included at the beginning of the current page URL
    $: active = $page.url.pathname.startsWith(item.route) && item.route !== "/" || item.route === $page.url.pathname

</script>

<a class="flex flex-row gap-2 items-center py-2 min-h-[2.75rem] px-3 font-medium rounded-md transition group {active ? 'bg-background-selection text-foreground' : 'hover:bg-background-selection hover:text-foreground text-foreground-2' }" href="{item.route}">
    <div class="transition {$page.url.pathname === item.route ? 'text-foreground' : 'text-foreground-2 group-hover:text-foreground'  } ">
        <Icon size="20" name={item.icon}/>
    </div>
    <span class="w-auto flex-grow">{item.name}</span>
    {#if item.badge}
        <div class="flex justify-center items-center {badgeSizeClass} bg-primary text-on-primary rounded-full px-2 text-xs font-medium flex-shrink-0 uppercase">
            {item.badge}
        </div>
    {/if}
</a>

