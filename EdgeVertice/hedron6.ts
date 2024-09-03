class Point {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const vertice: Point[] = [
    new Point(1, 1, 1),    // 0: front top right
    new Point(-1, 1, 1),   // 1: front top left
    new Point(-1, -1, 1),  // 2: front bottom left
    new Point(1, -1, 1),   // 3: front bottom right
    new Point(1, 1, -1),   // 4: back top right
    new Point(-1, 1, -1),  // 5: back top left
    new Point(-1, -1, -1), // 6: back bottom left
    new Point(1, -1, -1)   // 7: back bottom right
];
const faces: Point[][] = [
    [vertice[0], vertice[1], vertice[2], vertice[3]], // Front face
    [vertice[4], vertice[5], vertice[6], vertice[7]], // Back face
    [vertice[0], vertice[4], vertice[7], vertice[3]], // Right face
    [vertice[1], vertice[5], vertice[6], vertice[2]], // Left face
    [vertice[0], vertice[1], vertice[5], vertice[4]], // Top face
    [vertice[3], vertice[2], vertice[6], vertice[7]]  // Bottom face
];
