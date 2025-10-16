


export default class StrParser {



    static parse(str){
            const customPattern = /^\/\/(.+)\n(.*)$/
            const match = str.replace(/\\n/g, '\n').match(customPattern)
            let parsed = []
            if (match) {
                const [_, customPattern, numberStr] = match
                parsed = numberStr.trim().split(customPattern).map(num=>num.trim())
            } else {
                parsed = str.trim().split(/[,:\n]/).map(num=>num.trim())

            }
            return parsed

    }
}