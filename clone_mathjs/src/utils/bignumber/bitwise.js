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

