export function cutText(text, length) {
    if(text.length <= length) {
        return text;
    }

    text = text.substring(0, length);
    return(text + "...");
}