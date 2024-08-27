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
// 使用示例
const cube = new Cube(5);
console.log(`体积:{cube.volume}, 表面积:{cube.surfaceArea}`);