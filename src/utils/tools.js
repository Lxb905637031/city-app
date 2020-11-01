export default {
    formatJSON(array, key) {
        return array.filter((item) => {
            if (item[key]) {
                item[key] = item[key].split(',')
            }
            return item
        })
    },
    jsonToArr(str) {
        return JSON.parse(str)
    },
    strToArr(str) {
        return str.split(',')
    },
    replaceToSpace(str) {
        return str.replace(/,/g, ' ')
    },
    trimSpace(str) {
        return str.replace(/\s+/g, '')
    },
    throttle(fn, delay) {
        let t = null
        let begin = new Date().getTime()
        return function () {
            const self = this
            const args = arguments
            let cur = new Date().getTime()
            clearTimeout(t)
            if (cur - begin >= delay) {
                fn.apply(self, args)
                begin = cur
            } else {
                t = setTimeout(function () {
                    fn.apply(self, args)
                },delay)
            }
        }
    }
}