function toSpherical(x: number, y: number, z: number): { r: number; theta: number; phi: number } {
    const r = Math.sqrt(x * x + y * y + z * z);
    const theta = Math.acos(z / r);
    let phi = Math.acos(x / Math.sqrt(x * x + y * y));
    // Adjust phi for the correct quadrant
    if (y < 0) {
        phi = 2 * Math.PI - phi;
    }
    return { r, theta, phi };
}
// Define the vertices of the dodecahedron
const vertices: Array<[number, number, number]> = [
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, 1],
    [1, -1, -1],
    [-1, 1, 1],
    [-1, 1, -1],
    [-1, -1, 1],
    [-1, -1, -1],
    [phi, 0, 1 / phi],
    [phi, 0, -1 / phi],
    [-phi, 0, 1 / phi],
    [-phi, 0, -1 / phi],
    [0, phi, 1 / phi],
    [0, phi, -1 / phi],
    [0, -phi, 1 / phi],
    [0, -phi, -1 / phi],
    [1 / phi, phi, 0],
    [1 / phi, -phi, 0],
    [-1 / phi, phi, 0],
    [-1 / phi, -phi, 0]
];
// Convert each vertex to spherical coordinates and print them
vertices.forEach(vertex => {
    const { r, theta, phi } = toSpherical(vertex[0], vertex[1], vertex[2]);
    console.log(`Cartesian: [{vertex[0]}, {vertex[1]}, {vertex[2]}] -> Spherical: r={r}, theta={theta.toFixed(4)} radians, phi={phi.toFixed(4)} radians`);
});
