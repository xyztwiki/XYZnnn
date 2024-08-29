interface Point{
    x:number,
    y:number,
    z:number
 }
 class cube{
     vertices: Point3D
 }
 void function vertices() {
     return [
         {x: 1, y: 1, z: 1},
         {x: -1, y: -1, z: -1},
         {x: 1, y: 1, z: -1},
         {x: -1, y: 1, z: 1},
         {x: -1, y: -1, z: 1},
         {x: 1, y: -1, z: -1},
         {x: -1, y: 1, z: 1},
         {x: 1, y: 1, z: -1}
     ]
 }
