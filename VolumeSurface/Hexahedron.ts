class Cube {
    private edge: number;
    constructor(edge: number) {
        this.edge = edge;
    }
    volume(): number {
        return this.edge * 3;
    }
    surfaceArea(): number {
        return 6 * this.edge * 2;
    }
}
