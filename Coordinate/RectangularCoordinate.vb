Imports System.Math
Imports "Square4.c"
Dim X AS SINGLE
Dim Y AS SINGLE
Dim Z AS SINGLE
' Convert rectangular coordinates to spherical coordinates
Function RectangularToSphere(ByVal X As Single, ByVal Y As Single, ByVal Z As Single) As SphereCoordinate
    Dim r As Single
    Dim theta As Single
    Dim phi As Single
    
    r = Sqr(X * X + Y * Y + Z * Z)
    theta = Atn2(Y, X)
    phi = Atn2(Sqr(X * X + Y * Y), Z)
    
    RectangularToSpherical.R = r