export default function separatorUderscoreString(str) {
    return str
        .split("/")
        .pop()
        .replace(/_/g, " ")
        .replace(/\.[^/.]+$/, "");
}
