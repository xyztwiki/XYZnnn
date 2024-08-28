class Cube {
    private edgeLength: number;
    constructor(edgeLength: number) {
        this.edgeLength = edgeLength;
    }
    get volume(): number {
        return this.edgeLength ** 3;
    }
    get surfaceArea(): number {
        return 6 * this.edgeLength ** 2;
    }
}
