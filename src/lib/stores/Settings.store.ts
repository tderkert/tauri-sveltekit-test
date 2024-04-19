import type { Writable } from "svelte/store";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const localStorageKey = "app-settings";

const defaultValue = {
    theme: "dark",
    sidebarWidth: 400,
    sidebarWidthMax: 500,
    sidebarWidthMin: 300,
};



// Set initial value from localStorage if available
// Fall back to default value if not available
let initialValue = defaultValue
if (browser){
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
        let parsedStoredValue = JSON.parse(storedValue);
        initialValue = {...defaultValue, ...parsedStoredValue};
    }else{
        localStorage.setItem(localStorageKey, JSON.stringify(defaultValue));
    }
}


// Writable Store for State
const store: Writable<any> = writable(initialValue);

// Subscribe to the store and save the value to localStorage
store.subscribe((value) => {
    console.log(`${localStorageKey} updated:`, value);
    if (browser) {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
        // if theme is dark, set html background to black
        if (value.theme === "dark") {
            document.documentElement.style.backgroundColor = "black";
        } else {
            document.documentElement.style.backgroundColor = "white";
        }
        
    }
})


export default store;