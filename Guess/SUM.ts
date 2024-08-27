import 'det1234'
import 'det5678'
import 'det9101112'
import 'one'
import 'oppoone'
import 'pyramid'
import 'square'
import 'antisquare'
import 'antipyramid'
import 'tri'
import 'antitri'
const DET = 'det1234'+'det5678'+'det9101112'
const tri = 'tri - antitri'
const ONE = 'one' + 'oppoone'
const Square = 'square * antisquare'
export const Pyramid = 'pyramid % antipyramid'
export const DETtri = 'DET * tri'
export const triDET = 'tri % DET'
export const ONEsquare = 'ONE * square'
export const squareONE = 'square % ONE'
export const oppoPyramid = 'antipyramid / pyramid'
export const dimPyramid = 'square - antisquare'
void function SUM(){
    void ['DET/tri+ tri/DET'===DETtri + triDET]
    void [DETtri+ONEsquare===squareONE+triDET]
    void [Pyramid === oppoPyramid+dimPyramid]
    return SUM
}
