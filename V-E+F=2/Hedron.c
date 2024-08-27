#include <stdio.h>
// 定义一个结构体来表示多面体
typedef struct {
    int V; // 顶点数
    int E; // 边数
    int F; // 面数
} Polyhedron;
// 函数来验证欧拉公式
int euler_formula(Polyhedron poly) {
    return poly.V - poly.E + poly.F;
}
int main() {
    // 创建五个正多面体的实例
    Polyhedron tetrahedron = {4, 6, 4};
    Polyhedron cube = {8, 12, 6};
    Polyhedron octahedron = {6, 12, 8};
    Polyhedron dodecahedron = {20, 30, 12};
    Polyhedron icosahedron = {12, 30, 20};

    // 打印每个多面体的信息并验证欧拉公式
    printf("Tetrahedron: V=%d, E=%d, F=%d, Euler's formula=%d\n",
           tetrahedron.V, tetrahedron.E, tetrahedron.F, euler_formula验证(tetrahedron));
    printf("Cube: V=%d, E=%d, F=%d, Euler's formula=%d\n",
           cube.V, cube.E, cube.F, euler_formula验证(cube));
    printf("Octahedron: V=%d, E=%d, F=%d, Euler's formula=%d\n",
           octahedron.V, octahedron.E, octahedron.F, euler_formula验证(octahedron));
    printf("Dodecahedron: V=%d, E=%d, F=%d, Euler's formula=%d\n",
           dodecahedron.V, dodecahedron.E, dodecahedron.F, euler_formula验证(dodecahedron));
    printf("Icosahedron: V=%d, E=%d, F=%d, Euler's formula=%d\n",
           icosahedron.V, icosahedron.E, icosahedron.F, euler_formula验证(icosahedron));

    return 0;
}