export default function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}