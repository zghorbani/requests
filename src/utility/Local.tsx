export function setLocal({ key, value, ttl }: { key: string, value: any[], ttl: number }) {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }

    localStorage.setItem(key, JSON.stringify(item))
}