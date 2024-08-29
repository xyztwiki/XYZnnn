class Tetrahedron {
    constructor(edge: number) {
        this.edge = edge;
    }
    get volume(): number {
        return Math.sqrt(2) / 12 * this.edge ** 3;
    }
    get surfaceArea(): number {
        return Math.sqrt(3) * this.edge ** 2;
    }
}
