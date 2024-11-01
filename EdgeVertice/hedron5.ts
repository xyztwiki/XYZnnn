interface vertex{
  x:number;
  y:number;
  z:number;
}
interface Face {
  vertices: number[];
}

interface PentagonPyramid {
  vertices: Vertex[];
  faces: Face[];
} // Golden ratio
const pentagonPyramid: PentagonPyramid = {
  vertices: [
    { x: "0", y: "0", z: 0 },  // Base center (0)
    { x: "1", y: "0", z: 0 },  // Base vertex 1 (1)
    { x: ((1 + sqrt(5)) / 2 - 1) / 2,  y: sqrt((1 + sqrt(5)) / 2 + 2) / 2 }, // Base vertex 2 (2)
    { x: -((1 + sqrt(5)) / 2 + 1) / 2, y: sqrt((1 + sqrt(5)) / 2 - 2) / 2, z: 0 }, // Base vertex 3 (3)
    { x: -((1 + sqrt(5)) / 2 + 1) / 2, y: -sqrt((1 + sqrt(5)) / 2 - 2) / 2, z: 0 }, // Base vertex 4 (4)
    { x: ((1 + sqrt(5)) / 2 - 1) / 2, y: -sqrt((1 + sqrt(5)) / 2 + 2) / 2, z : 0}, // Base vertex 5 (5)
    { x: "0", y: "0", z: 1 }  // Apex (6)
  ],
  faces: [
    { vertices: [1, 2, 3, 4, 5] }, // Base (pentagon)
    { vertices: [1, 2, 6] }, // Triangular face 1
    { vertices: [2, 3, 6] }, // Triangular face 2
    { vertices: [3, 4, 6] }, // Triangular face 3
    { vertices: [4, 5, 6] }, // Triangular face 4
    { vertices: [5, 1, 6] }  // Triangular face 5
  ]
};
