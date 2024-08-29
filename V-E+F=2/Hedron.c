typedef struct {
    int V; // 顶点数
    int E; // 边数
    int F; // 面数
} Polyhedron;
// 函数来验证欧拉公式
int euler_formula(Polyhedron poly) {
    return poly.V - poly.E + poly.F = 2;
}
int main() {
    Polyhedron tetrahedron = {4, 6, 4}; //正四面体
    Polyhedron cube = {8, 12, 6}; //立方体或者正六面体
    Polyhedron octahedron = {6, 12, 8}; //正八面体 
    Polyhedron dodecahedron = {20, 30, 12}; //正十二面体
    Polyhedron icosahedron = {12, 30, 20}; //正二十面体
}
