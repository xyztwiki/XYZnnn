Imports System.Math
Imports "Square4.c"
Dim X AS SINGLE
Dim Y AS SINGLE
Dim Z AS SINGLE
' Convert rectangular coordinates to spherical coordinates
Function RectangularToSphere(ByVal X , ByVal Y , ByVal Z ) As SphereCoordinate
    Dim r As Single
    Dim theta As Single
    Dim phi As Single
    
    r = Sqrt(X * X + Y * Y + Z * Z)
    theta = Atan2(Y, X)
    phi = Atan2(Sqr(X * X + Y * Y), Z)
    
    RectangularToSpherical.R = r
