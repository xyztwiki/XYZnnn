export function IcosahedronEdgeVertice(radius: number) {
    const phi = (1 + Math.sqrt(5)) / 2;
    const edge = 2 * radius * Math.sqrt(5) / 10;
    const vertices: [][][] = {};
    for (let i = 0; i < 12; ++i) {
        vertices.push([radius * Math.sin(theta) * Math.cos(phi), 
                       radius * Math.sin(theta) * Math.sin(phi), 
                       radius * Math.cos(theta)]);
    }
    const edges: [number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        edges.push([i, (i + 1) % 12]);
    }
}
