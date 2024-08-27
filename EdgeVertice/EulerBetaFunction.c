#include <stdio.h>
#include <math.h>
int main() {
    double angle = 1.0; // 示例角度值，单位为弧度
    double sinValue = sin(angle);
    printf("The sine of %.2f radians is %.2f\n", angle, sinValue);
    return 0;
}