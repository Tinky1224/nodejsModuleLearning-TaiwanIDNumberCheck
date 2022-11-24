function sidNoCheck (sidNo) {
    if (typeof sidNo !== 'string') {
        console.error(`TypeError: input type must be string, but got ${typeof sidNo}.`)
        return false
    }
    if (sidNo.length !== 10) {
        console.error(`LengthError: input string length must be 10, but got ${sidNo.length}.`)
        return false
    }
    if (!/[A-Z][0-9]{9}/.test(sidNo)) {
        console.error('input is invalid.')
        return false
    }
    const firstMap = [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3]
    const secondMap = [0, 1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 0, 1, 2, 5, 3, 4, 5, 6, 7, 8, 9, 2, 0, 1, 3]
    let ind = sidNo.charCodeAt(0) - 'A'.charCodeAt(0)
    let checkNum = firstMap[ind] + secondMap[ind]*9
    for (let i = 1; i < 10; i++) checkNum += Math.max(9-i, 1) * Number(sidNo[i])
    if (checkNum%10 !== 0) {
        console.error('input is invalid')
        return false
    }
    return true
}

module.exports = sidNoCheck