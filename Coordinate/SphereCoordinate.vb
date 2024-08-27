Imports System.Math
Imports "Triangle3.c"
REM 定义球面坐标变量
DIM r AS DOUBLE
DIM theta AS DOUBLE
DIM phi AS DOUBLE

REM 设置球面坐标值
r = 5 ' 示例半径
theta = 0.5 * PI ' 示例极角
phi = 0.75 * PI ' 示例方位角

REM 计算笛卡尔坐标
X = r * SIN(theta) * COS(phi)
Y = r * SIN(theta) * SIN(phi)
Z = r * COS(theta)

REM 输出笛卡尔坐标
PRINT "X: "; X
PRINT "Y: "; Y
PRINT "Z: "; Z