import type { Writable } from "svelte/store";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const localStorageKey = "global-app-state";

const defaultValue = {
    'currentPath': '/',
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
    }
})

export default store;