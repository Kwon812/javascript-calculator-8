function strParser(str){
    const customPattern = /^\/\/(.+)\n(.*)$/
    const match = str.match(customPattern)
    let parsed=[]
    if (match) {
        const [origin,customPattern,numberStr] =match
       parsed=numberStr.split(customPattern)
    } else {
        parsed=str.split(/[,:\n]/)

    }
    return parsed

}
console.log(strParser('//?\\n1?2?3'))