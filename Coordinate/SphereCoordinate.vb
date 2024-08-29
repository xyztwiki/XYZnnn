Imports System.Math
Imports "Triangle3.c"
DIM r AS DOUBLE
DIM theta AS DOUBLE
DIM phi AS DOUBLE

Byval X = r * SIN(theta) * COS(phi)
Byval Y = r * SIN(theta) * SIN(phi)
Byval Z = r * COS(theta)
Redim X ^ 2 + Y ^ 2 = Z ^ 2
