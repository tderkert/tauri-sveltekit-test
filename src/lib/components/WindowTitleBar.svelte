<script lang="ts">
    export let title: string = ""

    let streetLightSize = 'h-3 w-3'
    let streetLightIconSize = 'h-[0.6rem] w-[0.6rem]'

</script>

<!-- WINDOW TITLE BAR -->
<div data-tauri-drag-region class="flex flex-col justify-center h-title-bar w-full absolute left-0 top-0 right-0 select-none cursor-default font-medium text-sm text-center z-50 transition duration-500 { title === "" ? 'opacity-0' : 'opacity-100'}">
    <!-- STREETLIGHTS -->
    <!-- <div class="flex absolute gap-2 p-2 group">
        <div class="bg-[#FE5F57] text-red-950 rounded-full {streetLightSize} flex justify-center items-center custom-inner-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.8" stroke="currentColor" class="{streetLightIconSize} opacity-0 group-hover:opacity-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="bg-[#FEBC2E] text-yellow-950 rounded-full {streetLightSize} flex justify-center items-center custom-inner-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.8" stroke="currentColor" class="{streetLightIconSize} opacity-0 group-hover:opacity-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
        </div>
        <div class="bg-[#28C840] text-green-950 rounded-full {streetLightSize} flex justify-center items-center custom-inner-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.8" stroke="currentColor" class="{streetLightIconSize} opacity-0 group-hover:opacity-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
        </div>
    </div> -->
    <!-- TITLE -->
    {title}
    
</div>

<style>
    .custom-inner-shadow {
        box-shadow: inset 0px 0px 0px 0.3px rgba(0, 0, 0, 0.15);
    }

</style>

