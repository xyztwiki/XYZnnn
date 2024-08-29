class Cube {
    private edge: number;
    constructor(edge: number) {
        this.edge = edge;
    }
    get volume(): number {
        return this.edge ** 3;
    }
    get surfaceArea(): number {
        return 6 * this.edge ** 2;
    }
}
