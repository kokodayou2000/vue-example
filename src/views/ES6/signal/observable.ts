export function observable(value: number) {
  const subscribers = new Set<(value: number) => {}>();

  return {
    increment() {
      value++;
      this.update(value);
    },
    subscribe(fn: (value: number) => {}) {
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    },
    update(value: number) {
      subscribers.forEach(fn => fn(value));
    }
  };
}
