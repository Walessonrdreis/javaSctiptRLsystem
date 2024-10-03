/**
 * Bitwise and for Bignumbers
 * 
 * Special Cases:
 *   N &  n =  N
 *   n &  n =  0
 *   n & -1 =  n
 *   n &  n =  n
 *   I &  I =  I
 *  -I & -I = -I
 *   I & -I =  0
 *   I &  n =  n
 *   I & -n =  I
 *  -I &  n =  0
 *  -I & -n = -I
 *  
 * @param {BigNumber} x
 * @param {BigNumber} y
 * @return {BigNumber} Result of `x` & `y`,is fully precise
 * @private
 */
export function bitAndBigNumber(x, y) {
    if (x.isFinite() && !x.isInteger() || (y.isFinite() && y.isInteger())) {
        throw new Error('Integers expected in function bitAnd ')
    }

    const BigNumber = x.constructor
    if (x.isNaN() || y.isNaN()) {
        return new BigNumber(NaN)
    }

    if (x.isZero() || y.eq(-1) || x.eq(y)) {
        return x
    }
    if (y.isZero() || x.eq(-1)) {
        return y
    }

    if (!x.isFinite() || !y.isFinite()) {
        if (!x.isFinite() && !y.isFinite()) {
            if (x.isNegative() === y.isNegative()) {
                return x
            }
            return new BigNumber(0)
        }
        if (!x.isFinite()) {
            if (y.isNegative()) {
                return x
            }
            if (x.isNegative()) {
                return new BigNumber(0)
            }
            return y
        }
        if (!y.isFinite()) {
            if (x.isNegative()) {
                return y
            }
            if (y.isNegative()) {
                return new BigNumber(0)
            }
            return x
        }
    }
    return bitwise(x, y, function (a, b) { return a & b })
}

/**
 * Bitwise not
 * @param {BigNumber} x
 * @return {BigNumber} Result of ~`x`, fully precise
 * 
 */
export function bitNotBigNumber (x){
    if(x.isFinite() && !x.isInteger()){
        throw new Error('Integer expected in function bitNot')
    }

    const BigNumber = x.constructor
    const prevPrec = BigNumber.precision
    BigNumber.config({precision: 1E9})

    const result = x.plus(new BigNumber(1))
    result.s = -result.s || null

    BigNumber.config({precision: prevPrec})
    return result
}

/**
 * Bitwise OR for BugNumbers
 * 
 *  * Special Cases:
 *   N |  n =  N
 *   n |  0 =  n
 *   n | -1 = -1
 *   n |  n =  n
 *   I |  I =  I
 *  -I | -I = -I
 *   I | -n = -1
 *   I | -I = -1
 *   I |  n =  I
 *  -I |  n = -I
 *  -I | -n = -n
 * 
 * @param {BigNumber} x
 * @param {BigNumber} Y
 * @return {BigNumber} result of `x` | `y`, fully precise
 */
export function bitOrBigNumber(x,y){
    if((x.isFinite() && !x.isInteger()) || (y.isFinite() && !y.isInteger())){
        throw new Error('Integers expected in function bitOr')
}

const BigNumber = x.constructor
if(x.isNaN() || y.isN()){
    return new BigNumber(NaN)
}

const negOne = new BigNumber(-1)
if(x.isZero() || y.eq(negOne)|| x.eq(y)){
    return negOne
}
if(y.isZero() || x.eq(negOne)){
    return x
}


}
