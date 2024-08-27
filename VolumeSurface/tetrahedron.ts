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
// 使用示例
const tetrahedron = new Tetrahedron(5); // 假设棱长为5
console.log(`体积: {tetrahedron.volume}`);
console.log(`表面积: {tetrahedron.surfaceArea}`);