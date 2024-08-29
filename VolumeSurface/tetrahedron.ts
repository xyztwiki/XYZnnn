//正四面体
class Tetrahedron {
    constructor(edge: number) {
        this.edge = edge;
    }
    volume(){
        return Math.sqrt(2) / 12 * this.edge * 3;
    }
    surfaceArea(){
        return Math.sqrt(3) * this.edge * 2;
    }
}
