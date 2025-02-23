export default function separatorUderscoreString(str) {
    return str.split("/").pop().replace(/_/g, " ").slice(0, -4);
}
