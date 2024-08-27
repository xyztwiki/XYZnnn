
import './sphere.ts'
import './color.java'
import './Red.js'
import './Green.js'
import './Blue.js'
import './anti.js'
void function CylinderXY(){
    const element1 =
        [[0][1][0][1],
        [1][0][1][0],
        [0][0][0][1],
        [0][0][0][0]]
    const element2 =
        [[0][1][0][1],
        [0][0][1][0],
        [0][1][0][1],
        [0][0][0][0]]
    const element3 =
        [[0][1][0][1],
        [0][0][1][0],
        [0][0][0][1],
        [0][0][1][0]]
    const element4 =
        [[0][1][0][1],
        [0][0][1][0],
        [0][0][0][1],
        [1][0][0][0]]
}
void function CylinderYZ(){
    const element5 =
           [[1][0][1][0],
            [0][1][0][0],
            [0][0][1][0],
            [0][0][0][1]]

    const element6 =
           [[1][0][0][0],
            [0][1][0][1],
            [0][0][1][0],
            [0][0][0][1]]

    const element7 =
           [[1][0][0][0],
            [0][1][0][0],
            [0][0][1][0],
            [0][1][0][1]]

    const element8 =
           [[1][0][0][0],
            [0][1][0][0],
            [1][0][1][0],
            [0][0][0][1]]
}
void function CylinderXZ() {
    const element9 =
           [[0][1][0][1],
            [1][0][1][0],
            [0][0][0][1],
            [0][0][0][0]]

    const element10 =
           [[0][1][0][1],
            [0][0][1][0],
            [0][1][0][1],
            [0][0][0][0]]

    const element11 =
           [[0][1][0][1],
            [0][0][1][0],
            [0][0][0][1],
            [0][0][1][0]]

    const element12 =
           [[0][1][0][1],
            [0][0][1][0],
            [0][0][0][1],
            [1][0][0][0]]
}
void function CylinderXYZ(){
    const element13 =
           [[0][1][0][1],
            [1][0][0][0],
            [0][0][0][1],
            [0][0][1][0]]

    const element14 =
           [[0][1][0][0],
            [1][0][1][0],
            [0][0][0][1],
            [0][0][1][0]]

    const element15 =
           [[0][1][0][0],
            [1][0][0][0],
            [0][1][0][1],
            [0][0][1][0]]

    const element16 =
           [[0][1][0][0],
            [1][0][0][0],
            [0][0][0][1],
            [1][0][1][0]]

    const element17 =
           [[1][0][1][0],
            [0][0][0][1],
            [1][0][0][0],
            [0][1][0][0]]

    const element18 =
           [[0][0][1][0],
            [0][1][0][1],
            [1][0][0][0],
            [0][1][0][0]]

    const element19 =
           [[0][0][1][0],
            [0][0][0][1],
            [1][0][1][0],
            [0][1][0][0]]
    
    const element20 =
           [[0][0][1][0],
            [0][0][0][1],
            [1][0][0][0],
            [0][1][0][1]]
}
void function Cylinder(X:number,Y:number,Z:number){
    const CylinderXY = 'Cylinder.X + Cylinder.Y'
    const CylinderYZ = 'Cylinder.Y + Cylinder.Z'
    const CylinderZX = 'Cylinder.Z + Cylinder.X'
    const CylinderXYZ = 'Cylinder.X + Cylinder.Y + Cylinder.Z'
    return [CylinderXY,CylinderYZ,CylinderZX,CylinderXYZ,X,Y,Z]
}
