interface Point3D{
  x:number;
  y:number;
  z:number;
}
interface Face {
  vertices: number[];
}

interface HexagonPyramid {
  vertices: Vertex[];
  faces: Face[];
}
const hexagonPyramid: HexagonPyramid = {
  vertices: [
    // Base hexagon (vertices 0-5)
    { x: "1", y: "0", z: "-0.5" },
    { x: "0.5", y: "sqrt(3)/2", z: "-0.5" },
    { x: "-0.5", y: "sqrt(3)/2", z: "-0.5" },
    { x: "-1", y: "0", z: "-0.5" },
    { x: "-0.5", y: "-sqrt(3)/2", z: "-0.5" },
    { x: "0.5", y: "-sqrt(3)/2", z: "-0.5" },
    
    // Middle hexagon (vertices 6-11)
    { x: "0.5", y: "0", z: "0" },
    { x: "0.25", y: "sqrt(3)/4", z: "0" },
    { x: "-0.25", y: "sqrt(3)/4", z: "0" },
    { x: "-0.5", y: "0", z: "0" },
    { x: "-0.25", y: "-sqrt(3)/4", z: "0" },
    { x: "0.25", y: "-sqrt(3)/4", z: "0" },
    
    // Apex (vertex 12)
    { x: "0", y: "0", z: "0.5" },
  ],
  faces: [
    { vertices: [0, 1, 2, 3, 4, 5] },  // Base hexagon
    { vertices: [0, 1, 7, 6] },        // Side face 1
    { vertices: [1, 2, 8, 7] },        // Side face 2
    { vertices: [2, 3, 9, 8] },        // Side face 3
    { vertices: [3, 4, 10, 9] },       // Side face 4
    { vertices: [4, 5, 11, 10] },      // Side face 5
    { vertices: [5, 0, 6, 11] },       // Side face 6
    { vertices: [6, 7, 8, 9, 10, 11, 12] }, // Top hexagon with apex
  ]
};
