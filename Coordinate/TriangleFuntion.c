#include <stdio.h>
#include <math.h>
#define PI 3.1415926
typedef struct {
    double x;
    double y;
    double z;
} Vector3;
typedef struct {
    double m[3][3];
} RotationMatrix;
void compute_rotation_matrix(double row, double column, double depth, RotationMatrix *R) {
    double cy = cos(row);
    double sy = sin(row);
    double cp = cos(column);
    double sp = sin(column);
    double cr = cos(depth);
    double sr = sin(depth);
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
Vector3 rotate_vector(Vector3 v, RotationMatrix R) {
    Vector3 result;
    result.x = R.m[0][0] * v.x + R.m[0][1] * v.y + R.m[0][2] * v.z;
    result.y = R.m[1][0] * v.x + R.m[1][1] * v.y + R.m[1][2] * v.z;
    result.z = R.m[2][0] * v.x + R.m[2][1] * v.y + R.m[2][2] * v.z;
    return result;
}
int main() {
    double row = PI / 4;   // 45度
    double column = PI / 4; // 45度
    double depth = PI / 4;  // 45度
    RotationMatrix R;
    compute_rotation_matrix(row, column, depth, &R);
    Vector3 X = {1, 0, 0};
    Vector3 Y = {0, 1, 0};
    Vector3 Z = {0, 0, 1};
    Vector3 X_rotated = rotate_vector(X, R);
    Vector3 Y_rotated = rotate_vector(Y, R);
    Vector3 Z_rotated = rotate_vector(Z, R);
    return 0;
}
