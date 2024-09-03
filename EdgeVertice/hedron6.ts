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

const vertices: Point[] = [
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
    [vertices[0], vertices[1], vertices[2], vertices[3]], // Front face
    [vertices[4], vertices[5], vertices[6], vertices[7]], // Back face
    [vertices[0], vertices[4], vertices[7], vertices[3]], // Right face
    [vertices[1], vertices[5], vertices[6], vertices[2]], // Left face
    [vertices[0], vertices[1], vertices[5], vertices[4]], // Top face
    [vertices[3], vertices[2], vertices[6], vertices[7]]  // Bottom face
];
