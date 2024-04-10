import { Localprops } from "./type"

export function setLocal({ key, value, ttl }: Localprops) {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }

    localStorage.setItem(key, JSON.stringify(item))
}