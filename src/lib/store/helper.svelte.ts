export function ref<T>(initial: T) {
    let v = $state(initial) as T;
    return {
        get value() { return v; },
        set value(next: T) { v = next; },
    };
}