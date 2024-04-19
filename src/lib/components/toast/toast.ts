import { writable } from "svelte/store";
import { get } from "svelte/store";

export const toastStore = writable<Toast[]>([]);
let toastCount = 0

// Toast type
export interface Toast {
    id: number;
    message: string;
}

export const toastSettings = writable({
    duration: 5000,
    padding: "1rem",
    position: "top",
    gap: 1,
    animationDuration: 300,
})

toastSettings.subscribe((settings) => {
    console.log("Toast settings changed: ", settings)
})

const toast = function () {
    const toasts = toastStore
    
    let addToast = function (toastMessage: string) {

        let id = toastCount++;
        let newToast:Toast = { 
            id: id, 
            message: toastMessage 
        };
        
        console.log("Adding toast: ", newToast)
        toasts.update((toasts) => {
            toasts.push(newToast)
            return toasts

            // return [newToast, ...toasts];
        });
    }
    let updateSettings = function (newsettings: any) {
        console.log("Updating toast settings: ", newsettings)
        toastSettings.update((currentSettings) => {
            let resolvedSettings = { ...currentSettings, ...newsettings }
            console.log("Resolved settings: ", resolvedSettings)
            return resolvedSettings
        })
    }
    let removeToast = function (id: number) {
        console.log("Removing toast with id: ", id)
        toasts.update((toasts) => {
            return toasts.filter(toast => toast.id !== id);
        });
    }

    return {
        subscribe: toasts.subscribe,
        update: toasts.update,
        add: addToast,
        remove: removeToast,
        updateSettings: updateSettings,
        get: get(toasts)
    }

}


export default toast();