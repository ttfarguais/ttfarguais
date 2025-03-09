export default function separatorUderscoreString(str) {
    return str.split("/").pop().replace(/_/g, " ").replace(/\.(pdf|jpg|jpeg|png|gif|bmp|tiff)$/i, "");
}
