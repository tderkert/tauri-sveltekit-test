<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import toast from "$lib/components/toast/toast";

    let itemClass = "flex flex-col gap-2 items-center justify-center aspect-square w-full h-full"

    function handleIconClick(event:MouseEvent) {
        // get all text content in event.target
        if (event.target instanceof HTMLElement) {
            let text = event.target.textContent
            // Check if text is a string
            if (text && typeof text === "string") {
                // Clear all whitespace
                text = text.replace(/\s/g, '')
                // Copy text to clipboard
                navigator.clipboard.writeText(`${text}`)
                // Show toast notification
                toast.add(`Copied to clipboard: ${text}`)
            }
        }
    }
</script>

<style>
    .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    }
    .icon-grid .item {
        transition: background-color 0.2s;
    }
    .icon-grid .item:hover {
        background-color: var(--color-background-selection);
    }
</style>


<div class="icon-grid gap-1 text-center text-2xs">
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ACTIVITY"/>
            <span class="text-foreground-2 h-[1em]">ACTIVITY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="AIRPLAY"/>
            <span class="text-foreground-2 h-[1em]">AIRPLAY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALERT-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">ALERT-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALERT-OCTAGON"/>
            <span class="text-foreground-2 h-[1em]">ALERT-OCTAGON</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALERT-TRIANGLE"/>
            <span class="text-foreground-2 h-[1em]">ALERT-TRIANGLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALIGN-CENTER"/>
            <span class="text-foreground-2 h-[1em]">ALIGN-CENTER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALIGN-JUSTIFY"/>
            <span class="text-foreground-2 h-[1em]">ALIGN-JUSTIFY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALIGN-LEFT"/>
            <span class="text-foreground-2 h-[1em]">ALIGN-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ALIGN-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">ALIGN-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ANCHOR"/>
            <span class="text-foreground-2 h-[1em]">ANCHOR</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="APERTURE"/>
            <span class="text-foreground-2 h-[1em]">APERTURE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARCHIVE"/>
            <span class="text-foreground-2 h-[1em]">ARCHIVE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-DOWN-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">ARROW-DOWN-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-DOWN-LEFT"/>
            <span class="text-foreground-2 h-[1em]">ARROW-DOWN-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-DOWN-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">ARROW-DOWN-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-DOWN"/>
            <span class="text-foreground-2 h-[1em]">ARROW-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-LEFT-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">ARROW-LEFT-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-LEFT"/>
            <span class="text-foreground-2 h-[1em]">ARROW-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-RIGHT-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">ARROW-RIGHT-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">ARROW-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-UP-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">ARROW-UP-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-UP-LEFT"/>
            <span class="text-foreground-2 h-[1em]">ARROW-UP-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-UP-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">ARROW-UP-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ARROW-UP"/>
            <span class="text-foreground-2 h-[1em]">ARROW-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="AT-SIGN"/>
            <span class="text-foreground-2 h-[1em]">AT-SIGN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="AWARD"/>
            <span class="text-foreground-2 h-[1em]">AWARD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BAR-CHART-2"/>
            <span class="text-foreground-2 h-[1em]">BAR-CHART-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BAR-CHART"/>
            <span class="text-foreground-2 h-[1em]">BAR-CHART</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BATTERY-CHARGING"/>
            <span class="text-foreground-2 h-[1em]">BATTERY-CHARGING</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BATTERY"/>
            <span class="text-foreground-2 h-[1em]">BATTERY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BELL-OFF"/>
            <span class="text-foreground-2 h-[1em]">BELL-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BELL"/>
            <span class="text-foreground-2 h-[1em]">BELL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BLUETOOTH"/>
            <span class="text-foreground-2 h-[1em]">BLUETOOTH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BOLD"/>
            <span class="text-foreground-2 h-[1em]">BOLD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BOOK-OPEN"/>
            <span class="text-foreground-2 h-[1em]">BOOK-OPEN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BOOK"/>
            <span class="text-foreground-2 h-[1em]">BOOK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BOOKMARK"/>
            <span class="text-foreground-2 h-[1em]">BOOKMARK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BOX"/>
            <span class="text-foreground-2 h-[1em]">BOX</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="BRIEFCASE"/>
            <span class="text-foreground-2 h-[1em]">BRIEFCASE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CALENDAR"/>
            <span class="text-foreground-2 h-[1em]">CALENDAR</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CAMERA-OFF"/>
            <span class="text-foreground-2 h-[1em]">CAMERA-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CAMERA"/>
            <span class="text-foreground-2 h-[1em]">CAMERA</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CAST"/>
            <span class="text-foreground-2 h-[1em]">CAST</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHECK-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">CHECK-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHECK-SQUARE"/>
            <span class="text-foreground-2 h-[1em]">CHECK-SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHECK"/>
            <span class="text-foreground-2 h-[1em]">CHECK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRON-DOWN"/>
            <span class="text-foreground-2 h-[1em]">CHEVRON-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRON-LEFT"/>
            <span class="text-foreground-2 h-[1em]">CHEVRON-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRON-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">CHEVRON-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRON-UP"/>
            <span class="text-foreground-2 h-[1em]">CHEVRON-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRONS-DOWN"/>
            <span class="text-foreground-2 h-[1em]">CHEVRONS-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRONS-LEFT"/>
            <span class="text-foreground-2 h-[1em]">CHEVRONS-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRONS-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">CHEVRONS-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHEVRONS-UP"/>
            <span class="text-foreground-2 h-[1em]">CHEVRONS-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CHROME"/>
            <span class="text-foreground-2 h-[1em]">CHROME</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLIPBOARD"/>
            <span class="text-foreground-2 h-[1em]">CLIPBOARD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOCK"/>
            <span class="text-foreground-2 h-[1em]">CLOCK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOUD-DRIZZLE"/>
            <span class="text-foreground-2 h-[1em]">CLOUD-DRIZZLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOUD-LIGHTNING"/>
            <span class="text-foreground-2 h-[1em]">CLOUD-LIGHTNING</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOUD-OFF"/>
            <span class="text-foreground-2 h-[1em]">CLOUD-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOUD-RAIN"/>
            <span class="text-foreground-2 h-[1em]">CLOUD-RAIN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOUD-SNOW"/>
            <span class="text-foreground-2 h-[1em]">CLOUD-SNOW</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CLOUD"/>
            <span class="text-foreground-2 h-[1em]">CLOUD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CODE"/>
            <span class="text-foreground-2 h-[1em]">CODE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CODEPEN"/>
            <span class="text-foreground-2 h-[1em]">CODEPEN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CODESANDBOX"/>
            <span class="text-foreground-2 h-[1em]">CODESANDBOX</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="COFFEE"/>
            <span class="text-foreground-2 h-[1em]">COFFEE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="COLUMNS"/>
            <span class="text-foreground-2 h-[1em]">COLUMNS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="COMMAND"/>
            <span class="text-foreground-2 h-[1em]">COMMAND</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="COMPASS"/>
            <span class="text-foreground-2 h-[1em]">COMPASS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="COPY"/>
            <span class="text-foreground-2 h-[1em]">COPY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-DOWN-LEFT"/>
            <span class="text-foreground-2 h-[1em]">CORNER-DOWN-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-DOWN-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">CORNER-DOWN-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-LEFT-DOWN"/>
            <span class="text-foreground-2 h-[1em]">CORNER-LEFT-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-LEFT-UP"/>
            <span class="text-foreground-2 h-[1em]">CORNER-LEFT-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-RIGHT-DOWN"/>
            <span class="text-foreground-2 h-[1em]">CORNER-RIGHT-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-RIGHT-UP"/>
            <span class="text-foreground-2 h-[1em]">CORNER-RIGHT-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-UP-LEFT"/>
            <span class="text-foreground-2 h-[1em]">CORNER-UP-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CORNER-UP-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">CORNER-UP-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CPU"/>
            <span class="text-foreground-2 h-[1em]">CPU</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CREDIT-CARD"/>
            <span class="text-foreground-2 h-[1em]">CREDIT-CARD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CROP"/>
            <span class="text-foreground-2 h-[1em]">CROP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="CROSSHAIR"/>
            <span class="text-foreground-2 h-[1em]">CROSSHAIR</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DATABASE"/>
            <span class="text-foreground-2 h-[1em]">DATABASE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DELETE"/>
            <span class="text-foreground-2 h-[1em]">DELETE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DISC"/>
            <span class="text-foreground-2 h-[1em]">DISC</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DIVIDE-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">DIVIDE-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DIVIDE-SQUARE"/>
            <span class="text-foreground-2 h-[1em]">DIVIDE-SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DIVIDE"/>
            <span class="text-foreground-2 h-[1em]">DIVIDE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DOLLAR-SIGN"/>
            <span class="text-foreground-2 h-[1em]">DOLLAR-SIGN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DOWNLOAD-CLOUD"/>
            <span class="text-foreground-2 h-[1em]">DOWNLOAD-CLOUD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DOWNLOAD"/>
            <span class="text-foreground-2 h-[1em]">DOWNLOAD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DRIBBBLE"/>
            <span class="text-foreground-2 h-[1em]">DRIBBBLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="DROPLET"/>
            <span class="text-foreground-2 h-[1em]">DROPLET</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="EDIT-2"/>
            <span class="text-foreground-2 h-[1em]">EDIT-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="EDIT-3"/>
            <span class="text-foreground-2 h-[1em]">EDIT-3</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="EDIT"/>
            <span class="text-foreground-2 h-[1em]">EDIT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="EXTERNAL-LINK"/>
            <span class="text-foreground-2 h-[1em]">EXTERNAL-LINK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="EYE-OFF"/>
            <span class="text-foreground-2 h-[1em]">EYE-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="EYE"/>
            <span class="text-foreground-2 h-[1em]">EYE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FACEBOOK"/>
            <span class="text-foreground-2 h-[1em]">FACEBOOK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FAST-FORWARD"/>
            <span class="text-foreground-2 h-[1em]">FAST-FORWARD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FEATHER"/>
            <span class="text-foreground-2 h-[1em]">FEATHER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FIGMA"/>
            <span class="text-foreground-2 h-[1em]">FIGMA</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FILE-MINUS"/>
            <span class="text-foreground-2 h-[1em]">FILE-MINUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FILE-PLUS"/>
            <span class="text-foreground-2 h-[1em]">FILE-PLUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FILE-TEXT"/>
            <span class="text-foreground-2 h-[1em]">FILE-TEXT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FILE"/>
            <span class="text-foreground-2 h-[1em]">FILE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FILM"/>
            <span class="text-foreground-2 h-[1em]">FILM</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FILTER"/>
            <span class="text-foreground-2 h-[1em]">FILTER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FLAG"/>
            <span class="text-foreground-2 h-[1em]">FLAG</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FOLDER-MINUS"/>
            <span class="text-foreground-2 h-[1em]">FOLDER-MINUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FOLDER-PLUS"/>
            <span class="text-foreground-2 h-[1em]">FOLDER-PLUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FOLDER"/>
            <span class="text-foreground-2 h-[1em]">FOLDER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FRAMER"/>
            <span class="text-foreground-2 h-[1em]">FRAMER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="FROWN"/>
            <span class="text-foreground-2 h-[1em]">FROWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GIFT"/>
            <span class="text-foreground-2 h-[1em]">GIFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GIT-BRANCH"/>
            <span class="text-foreground-2 h-[1em]">GIT-BRANCH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GIT-COMMIT"/>
            <span class="text-foreground-2 h-[1em]">GIT-COMMIT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GIT-MERGE"/>
            <span class="text-foreground-2 h-[1em]">GIT-MERGE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GIT-PULL-REQUEST"/>
            <span class="text-foreground-2 h-[1em]">GIT-PULL-REQUEST</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GITHUB"/>
            <span class="text-foreground-2 h-[1em]">GITHUB</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GITLAB"/>
            <span class="text-foreground-2 h-[1em]">GITLAB</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GLOBE"/>
            <span class="text-foreground-2 h-[1em]">GLOBE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="GRID"/>
            <span class="text-foreground-2 h-[1em]">GRID</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HARD-DRIVE"/>
            <span class="text-foreground-2 h-[1em]">HARD-DRIVE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HASH"/>
            <span class="text-foreground-2 h-[1em]">HASH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HEADPHONES"/>
            <span class="text-foreground-2 h-[1em]">HEADPHONES</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HEART"/>
            <span class="text-foreground-2 h-[1em]">HEART</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HELP-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">HELP-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HEXAGON"/>
            <span class="text-foreground-2 h-[1em]">HEXAGON</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="HOME"/>
            <span class="text-foreground-2 h-[1em]">HOME</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="IMAGE"/>
            <span class="text-foreground-2 h-[1em]">IMAGE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="INBOX"/>
            <span class="text-foreground-2 h-[1em]">INBOX</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="INFO"/>
            <span class="text-foreground-2 h-[1em]">INFO</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="INSTAGRAM"/>
            <span class="text-foreground-2 h-[1em]">INSTAGRAM</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ITALIC"/>
            <span class="text-foreground-2 h-[1em]">ITALIC</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="KEY"/>
            <span class="text-foreground-2 h-[1em]">KEY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LAYERS"/>
            <span class="text-foreground-2 h-[1em]">LAYERS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LAYOUT"/>
            <span class="text-foreground-2 h-[1em]">LAYOUT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LIFE-BUOY"/>
            <span class="text-foreground-2 h-[1em]">LIFE-BUOY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LINK-2"/>
            <span class="text-foreground-2 h-[1em]">LINK-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LINK"/>
            <span class="text-foreground-2 h-[1em]">LINK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LINKEDIN"/>
            <span class="text-foreground-2 h-[1em]">LINKEDIN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LIST"/>
            <span class="text-foreground-2 h-[1em]">LIST</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LOADER"/>
            <span class="text-foreground-2 h-[1em]">LOADER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LOCK"/>
            <span class="text-foreground-2 h-[1em]">LOCK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LOG-IN"/>
            <span class="text-foreground-2 h-[1em]">LOG-IN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="LOG-OUT"/>
            <span class="text-foreground-2 h-[1em]">LOG-OUT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MAIL"/>
            <span class="text-foreground-2 h-[1em]">MAIL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MAP-PIN"/>
            <span class="text-foreground-2 h-[1em]">MAP-PIN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MAP"/>
            <span class="text-foreground-2 h-[1em]">MAP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MAXIMIZE-2"/>
            <span class="text-foreground-2 h-[1em]">MAXIMIZE-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MAXIMIZE"/>
            <span class="text-foreground-2 h-[1em]">MAXIMIZE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MEH"/>
            <span class="text-foreground-2 h-[1em]">MEH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MENU"/>
            <span class="text-foreground-2 h-[1em]">MENU</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MESSAGE-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">MESSAGE-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MESSAGE-SQUARE"/>
            <span class="text-foreground-2 h-[1em]">MESSAGE-SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MIC-OFF"/>
            <span class="text-foreground-2 h-[1em]">MIC-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MIC"/>
            <span class="text-foreground-2 h-[1em]">MIC</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MINIMIZE-2"/>
            <span class="text-foreground-2 h-[1em]">MINIMIZE-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MINIMIZE"/>
            <span class="text-foreground-2 h-[1em]">MINIMIZE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MINUS-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">MINUS-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MINUS-SQUARE"/>
            <span class="text-foreground-2 h-[1em]">MINUS-SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MINUS"/>
            <span class="text-foreground-2 h-[1em]">MINUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MONITOR"/>
            <span class="text-foreground-2 h-[1em]">MONITOR</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MOON"/>
            <span class="text-foreground-2 h-[1em]">MOON</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MORE-HORIZONTAL"/>
            <span class="text-foreground-2 h-[1em]">MORE-HORIZONTAL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MORE-VERTICAL"/>
            <span class="text-foreground-2 h-[1em]">MORE-VERTICAL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MOUSE-POINTER"/>
            <span class="text-foreground-2 h-[1em]">MOUSE-POINTER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MOVE"/>
            <span class="text-foreground-2 h-[1em]">MOVE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="MUSIC"/>
            <span class="text-foreground-2 h-[1em]">MUSIC</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="NAVIGATION-2"/>
            <span class="text-foreground-2 h-[1em]">NAVIGATION-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="NAVIGATION"/>
            <span class="text-foreground-2 h-[1em]">NAVIGATION</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="OCTAGON"/>
            <span class="text-foreground-2 h-[1em]">OCTAGON</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PACKAGE"/>
            <span class="text-foreground-2 h-[1em]">PACKAGE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PAPERCLIP"/>
            <span class="text-foreground-2 h-[1em]">PAPERCLIP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PAUSE-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">PAUSE-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PAUSE"/>
            <span class="text-foreground-2 h-[1em]">PAUSE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PEN-TOOL"/>
            <span class="text-foreground-2 h-[1em]">PEN-TOOL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PERCENT"/>
            <span class="text-foreground-2 h-[1em]">PERCENT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE-CALL"/>
            <span class="text-foreground-2 h-[1em]">PHONE-CALL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE-FORWARDED"/>
            <span class="text-foreground-2 h-[1em]">PHONE-FORWARDED</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE-INCOMING"/>
            <span class="text-foreground-2 h-[1em]">PHONE-INCOMING</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE-MISSED"/>
            <span class="text-foreground-2 h-[1em]">PHONE-MISSED</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE-OFF"/>
            <span class="text-foreground-2 h-[1em]">PHONE-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE-OUTGOING"/>
            <span class="text-foreground-2 h-[1em]">PHONE-OUTGOING</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PHONE"/>
            <span class="text-foreground-2 h-[1em]">PHONE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PIE-CHART"/>
            <span class="text-foreground-2 h-[1em]">PIE-CHART</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PLAY-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">PLAY-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PLAY"/>
            <span class="text-foreground-2 h-[1em]">PLAY</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PLUS-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">PLUS-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PLUS-SQUARE"/>
            <span class="text-foreground-2 h-[1em]">PLUS-SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PLUS"/>
            <span class="text-foreground-2 h-[1em]">PLUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="POCKET"/>
            <span class="text-foreground-2 h-[1em]">POCKET</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="POWER"/>
            <span class="text-foreground-2 h-[1em]">POWER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="PRINTER"/>
            <span class="text-foreground-2 h-[1em]">PRINTER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="RADIO"/>
            <span class="text-foreground-2 h-[1em]">RADIO</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="REFRESH-CCW"/>
            <span class="text-foreground-2 h-[1em]">REFRESH-CCW</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="REFRESH-CW"/>
            <span class="text-foreground-2 h-[1em]">REFRESH-CW</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="REPEAT"/>
            <span class="text-foreground-2 h-[1em]">REPEAT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="REWIND"/>
            <span class="text-foreground-2 h-[1em]">REWIND</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ROTATE-CCW"/>
            <span class="text-foreground-2 h-[1em]">ROTATE-CCW</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ROTATE-CW"/>
            <span class="text-foreground-2 h-[1em]">ROTATE-CW</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="RSS"/>
            <span class="text-foreground-2 h-[1em]">RSS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SAVE"/>
            <span class="text-foreground-2 h-[1em]">SAVE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SCISSORS"/>
            <span class="text-foreground-2 h-[1em]">SCISSORS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SEARCH"/>
            <span class="text-foreground-2 h-[1em]">SEARCH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SEND"/>
            <span class="text-foreground-2 h-[1em]">SEND</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SERVER"/>
            <span class="text-foreground-2 h-[1em]">SERVER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SETTINGS"/>
            <span class="text-foreground-2 h-[1em]">SETTINGS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHARE-2"/>
            <span class="text-foreground-2 h-[1em]">SHARE-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHARE"/>
            <span class="text-foreground-2 h-[1em]">SHARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHIELD-OFF"/>
            <span class="text-foreground-2 h-[1em]">SHIELD-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHIELD"/>
            <span class="text-foreground-2 h-[1em]">SHIELD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHOPPING-BAG"/>
            <span class="text-foreground-2 h-[1em]">SHOPPING-BAG</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHOPPING-CART"/>
            <span class="text-foreground-2 h-[1em]">SHOPPING-CART</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SHUFFLE"/>
            <span class="text-foreground-2 h-[1em]">SHUFFLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SIDEBAR"/>
            <span class="text-foreground-2 h-[1em]">SIDEBAR</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SKIP-BACK"/>
            <span class="text-foreground-2 h-[1em]">SKIP-BACK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SKIP-FORWARD"/>
            <span class="text-foreground-2 h-[1em]">SKIP-FORWARD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SLACK"/>
            <span class="text-foreground-2 h-[1em]">SLACK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SLASH"/>
            <span class="text-foreground-2 h-[1em]">SLASH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SLIDERS"/>
            <span class="text-foreground-2 h-[1em]">SLIDERS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SMARTPHONE"/>
            <span class="text-foreground-2 h-[1em]">SMARTPHONE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SMILE"/>
            <span class="text-foreground-2 h-[1em]">SMILE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SPEAKER"/>
            <span class="text-foreground-2 h-[1em]">SPEAKER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SQUARE"/>
            <span class="text-foreground-2 h-[1em]">SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="STAR"/>
            <span class="text-foreground-2 h-[1em]">STAR</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="STOP-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">STOP-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SUN"/>
            <span class="text-foreground-2 h-[1em]">SUN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SUNRISE"/>
            <span class="text-foreground-2 h-[1em]">SUNRISE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="SUNSET"/>
            <span class="text-foreground-2 h-[1em]">SUNSET</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TABLE"/>
            <span class="text-foreground-2 h-[1em]">TABLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TABLET"/>
            <span class="text-foreground-2 h-[1em]">TABLET</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TAG"/>
            <span class="text-foreground-2 h-[1em]">TAG</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TARGET"/>
            <span class="text-foreground-2 h-[1em]">TARGET</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TERMINAL"/>
            <span class="text-foreground-2 h-[1em]">TERMINAL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="THERMOMETER"/>
            <span class="text-foreground-2 h-[1em]">THERMOMETER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="THUMBS-DOWN"/>
            <span class="text-foreground-2 h-[1em]">THUMBS-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="THUMBS-UP"/>
            <span class="text-foreground-2 h-[1em]">THUMBS-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TOGGLE-LEFT"/>
            <span class="text-foreground-2 h-[1em]">TOGGLE-LEFT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TOGGLE-RIGHT"/>
            <span class="text-foreground-2 h-[1em]">TOGGLE-RIGHT</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TOOL"/>
            <span class="text-foreground-2 h-[1em]">TOOL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRASH-2"/>
            <span class="text-foreground-2 h-[1em]">TRASH-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRASH"/>
            <span class="text-foreground-2 h-[1em]">TRASH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRELLO"/>
            <span class="text-foreground-2 h-[1em]">TRELLO</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRENDING-DOWN"/>
            <span class="text-foreground-2 h-[1em]">TRENDING-DOWN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRENDING-UP"/>
            <span class="text-foreground-2 h-[1em]">TRENDING-UP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRIANGLE"/>
            <span class="text-foreground-2 h-[1em]">TRIANGLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TRUCK"/>
            <span class="text-foreground-2 h-[1em]">TRUCK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TV"/>
            <span class="text-foreground-2 h-[1em]">TV</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TWITCH"/>
            <span class="text-foreground-2 h-[1em]">TWITCH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TWITTER"/>
            <span class="text-foreground-2 h-[1em]">TWITTER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="TYPE"/>
            <span class="text-foreground-2 h-[1em]">TYPE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="UMBRELLA"/>
            <span class="text-foreground-2 h-[1em]">UMBRELLA</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="UNDERLINE"/>
            <span class="text-foreground-2 h-[1em]">UNDERLINE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="UNLOCK"/>
            <span class="text-foreground-2 h-[1em]">UNLOCK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="UPLOAD-CLOUD"/>
            <span class="text-foreground-2 h-[1em]">UPLOAD-CLOUD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="UPLOAD"/>
            <span class="text-foreground-2 h-[1em]">UPLOAD</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="USER-CHECK"/>
            <span class="text-foreground-2 h-[1em]">USER-CHECK</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="USER-MINUS"/>
            <span class="text-foreground-2 h-[1em]">USER-MINUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="USER-PLUS"/>
            <span class="text-foreground-2 h-[1em]">USER-PLUS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="USER-X"/>
            <span class="text-foreground-2 h-[1em]">USER-X</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="USER"/>
            <span class="text-foreground-2 h-[1em]">USER</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="USERS"/>
            <span class="text-foreground-2 h-[1em]">USERS</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VIDEO-OFF"/>
            <span class="text-foreground-2 h-[1em]">VIDEO-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VIDEO"/>
            <span class="text-foreground-2 h-[1em]">VIDEO</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VOICEMAIL"/>
            <span class="text-foreground-2 h-[1em]">VOICEMAIL</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VOLUME-1"/>
            <span class="text-foreground-2 h-[1em]">VOLUME-1</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VOLUME-2"/>
            <span class="text-foreground-2 h-[1em]">VOLUME-2</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VOLUME-X"/>
            <span class="text-foreground-2 h-[1em]">VOLUME-X</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="VOLUME"/>
            <span class="text-foreground-2 h-[1em]">VOLUME</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="WATCH"/>
            <span class="text-foreground-2 h-[1em]">WATCH</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="WIFI-OFF"/>
            <span class="text-foreground-2 h-[1em]">WIFI-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="WIFI"/>
            <span class="text-foreground-2 h-[1em]">WIFI</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="WIND"/>
            <span class="text-foreground-2 h-[1em]">WIND</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="X-CIRCLE"/>
            <span class="text-foreground-2 h-[1em]">X-CIRCLE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="X-OCTAGON"/>
            <span class="text-foreground-2 h-[1em]">X-OCTAGON</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="X-SQUARE"/>
            <span class="text-foreground-2 h-[1em]">X-SQUARE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="X"/>
            <span class="text-foreground-2 h-[1em]">X</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="YOUTUBE"/>
            <span class="text-foreground-2 h-[1em]">YOUTUBE</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ZAP-OFF"/>
            <span class="text-foreground-2 h-[1em]">ZAP-OFF</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ZAP"/>
            <span class="text-foreground-2 h-[1em]">ZAP</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ZOOM-IN"/>
            <span class="text-foreground-2 h-[1em]">ZOOM-IN</span>
        </div>
    </Button>
    <Button on:click={handleIconClick}>
        <div class="{itemClass}">
            <Icon size="24" name="ZOOM-OUT"/>
            <span class="text-foreground-2 h-[1em]">ZOOM-OUT</span>
        </div>
    </Button>
</div>