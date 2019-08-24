
var keyValue = 1000000
export const uniqueKey = () => {
    keyValue++
    return keyValue.toString()
} 

export const getPrice = (text, startingString=":", endingString="€") => {
    /*
     * Return float value between starting and ending strings
     * Notice: the first ending striung bust be after the last starting string
     */
    let start = text.lastIndexOf(startingString) + 1
    let end = text.indexOf(endingString) - 1
    let subText = ""
    if (start > -1 && end > start) {
        subText = text.substring(start, end)
    } else {
        subText = text
    }
    let price = parseFloat(subText.trim())
    if (isNaN(price)) {
        price = 0
    }
    return price
}
