export function removeTypeNames (value) {
    if (Array.isArray(value)) {
        return value.map(removeTypeNames)
    } else if (value !== null && typeof(value) === "object") {
        const newObject = {}
        for (const property in value) {
            if (property !== '__typename' && property !== 'id') {
                newObject[property] = removeTypeNames(value[property])
            }
        }
        return newObject
    } else {
        return value
    }
}