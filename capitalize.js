export function capitilize(toBeCap) {
    if ((typeof toBeCap) === 'string') {
        const newString =  toBeCap.charAt(0).toUpperCase() + toBeCap.slice(1);
        return  newString
    } else {
        return toBeCap;
    }
    
}