var rand = require('./rand')
module.exports = function randFace(arr){
    const index = rand(0,arr.length-1)
    return arr[index]
}
