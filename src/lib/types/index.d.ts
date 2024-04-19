// Action Interface
export interface Action {
    name: string,
    icon?: string,
    route?: string,
    action?: () => void
}

interface MenuItem {
    name: string,
    icon: string,
    route: string,
    badge?: number|string
}

export interface PageUrl {
    route: string;
    name: string;
}