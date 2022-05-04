function stringLength(string) {
    if(string.length >= 1 && string.length <= 10){
        return string.length;
    }else {
        throw new Error("Invalid string length");
    }
   
}

export default stringLength;