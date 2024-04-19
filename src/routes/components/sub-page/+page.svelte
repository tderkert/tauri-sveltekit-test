<script lang="ts">
    import PageContainer from "$lib/components/PageContainer.svelte";
    import Button from "$lib/components/Button.svelte";
    import type { PageUrl } from "$lib/types";

    let parentPage:PageUrl = {
        route: "/components",
        name: "Components"

    };

</script>

<PageContainer parentPage={parentPage}>
    <svelte:fragment slot="title">
        About Components
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button icon="settings">Settings</Button>
        <Button variant="primary">Save data</Button>
    </svelte:fragment>

    <!-- PAGE CONTENT -->
    <div class="flex flex-col gap-3 text-lg">
        <p class="text-2xl">
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
        </p>
        <p class="text-foreground-2">
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
        </p>
        <p class="text-foreground-2">
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
        </p>
        <p class="text-foreground-2">
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
        </p>
        <p class="text-foreground-2">
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
            A guide to configuring and customizing your Tailwind installation.
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
        </p>
    </div>
</PageContainer>