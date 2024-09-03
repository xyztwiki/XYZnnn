import "../Coordinate/RectangularCoordinate.ts"
interface Point{
    x:number,
    y:number,
    z:number
}
function vertice(){
     return [
       vertice[1] = {x: 1,  y: 0,  z: 0},
       vertice[2] = {x: -1, y: 0,  z: 0},
       vertice[3] = {x: 0,  y: 1,  z: 0},
       vertice[4] = {x: 0,  y: -1, z: 0},
       vertice[5] = {x: 0,  y: 0,  z: 1},
       vertice[6] = {x: 0,  y: 0,  z:-1},
     ]
 }
function face(){
    return [
      [vertice[1],vertice[3],vertice[5]],
      [vertice[1],vertice[4],vertice[5]],
      [vertice[1],vertice[3],vertice[6]],
      [vertice[1],vertice[4],vertice[6]],
        
      [vertice[2],vertice[3],vertice[5]],
      [vertice[2],vertice[4],vertice[5]],
      [vertice[2],vertice[3],vertice[6]],
      [vertice[2],vertice[4],vertice[6]], 
    ]
}
