class Tetrahedron {
    private edgeLength: number;
    constructor(edgeLength: number) {
        this.edgeLength = edgeLength;
    }
    get volume(): number {
        return Math.sqrt(2) / 12 * this.edgeLength ** 3;
    }
    get surfaceArea(): number {
        return Math.sqrt(3) * this.edgeLength ** 2;
    }
}
