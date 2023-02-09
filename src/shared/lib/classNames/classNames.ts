// Record - object that recieves param 1 - key, param 2 - value with speacial types
type Mods = Record<string, boolean | string>;

export function cn(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
};