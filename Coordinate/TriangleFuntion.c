#include <stdio.h>
#include <math.h>
#define PI 3.14159265358979323846
// 定义一个三维向量结构体
typedef struct {
    double x;
    double y;
    double z;
} Vector3;
// 定义一个旋转矩阵结构体
typedef struct {
    double m[3][3];
} RotationMatrix;
// 计算旋转矩阵
void compute_rotation_matrix(double yaw, double pitch, double roll, RotationMatrix *R) {
    double cy = cos(yaw);
    double sy = sin(yaw);
    double cp = cos(pitch);
    double sp = sin(pitch);
    double cr = cos(roll);
    double sr = sin(roll);
    R->m[0][0] = cp * cy;
    R->m[0][1] = cp * sy;
    R->m[0][2] = -sp;
    R->m[1][0] = sr * sp * cy - cr * sy;
    R->m[1][1] = sr * sp * sy + cr * cy;
    R->m[1][2] = sr * cp;
    R->m[2][0] = cr * sp * cy + sr * sy;
    R->m[2][1] = cr * sp * sy - sr * cy;
    R->m[2][2] = cr * cp;
}
// 向量乘以旋转矩阵
Vector3 rotate_vector(Vector3 v, RotationMatrix R) {
    Vector3 result;
    result.x = R.m[0][0] * v.x + R.m[0][1] * v.y + R.m[0][2] * v.z;
    result.y = R.m[1][0] * v.x + R.m[1][1] * v.y + R.m[1][2] * v.z;
    result.z = R.m[2][0] * v.x + R.m[2][1] * v.y + R.m[2][2] * v.z;
    return result;
}
int main() {
    // 定义欧拉角（以弧度为单位）
    double yaw = PI / 4;   // 45度
    double pitch = PI / 4; // 45度
    double roll = PI / 4;  // 45度
    // 初始化旋转矩阵
    RotationMatrix R;
    compute_rotation_matrix(yaw, pitch, roll, &R);
    // 初始化X, Y, Z轴单位向量
    Vector3 X = {1, 0, 0};
    Vector3 Y = {0, 1, 0};
    Vector3 Z = {0, 0, 1};
    // 旋转X, Y, Z轴
    Vector3 X_rotated = rotate_vector(X, R);
    Vector3 Y_rotated = rotate_vector(Y, R);
    Vector3 Z_rotated = rotate_vector(Z, R);
    // 打印旋转后的X, Y, Z轴
    printf("Rotated X axis: (%f, %f, %f)\n", X_rotated.x, X_rotated.y, X_rotated.z);
    printf("Rotated Y axis: (%f, %f, %f)\n", Y_rotated.x, Y_rotated.y, Y_rotated.z);
    printf("Rotated Z axis: (%f, %f, %f)\n", Z_rotated.x, Z_rotated.y, Z_rotated.z);
    return 0;
}