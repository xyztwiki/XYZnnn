' 定义五边形的五个顶点坐标
Dim point(4, 1) As Double
point(0, 0) = 1.0: point(0, 1) = 1.0
point(1, 0) = 2.0: point(1, 1) = 1.0
point(2, 0) = 2.0: point(2, 1) = 2.0
point(3, 0) = 1.0: point(3, 1) = 2.0
point(4, 0) = 1.0: point(4, 1) = 1.0
' 计算五边形的面积calculate the SurfaceArea of pentagon
Function CalculateSurfaceArea(points() As Double) As Double
    Dim SurfaceArea As Double
    Dim i As Integer
    Dim j As Integer
    Dim n As Integer = points.Length \ 2
    SurfaceArea = 0.0
    For i = 0 To n - 1
        SurfaceArea = SurfaceArea + points(i * 2, 0) * points(i * 2 + 1, 1)
    Next
    For i = 0 To n - 2
        SurfaceArea = SurfaceArea + points(i * 2, 1) * points(i * 2 + 2, 0)
    Next
    SurfaceArea = SurfaceArea + points(n * 2 - 2, 1) * points(0, 0)
    SurfaceArea = 0.5 * Abs(SurfaceArea)
    Return SurfaceArea
End Function
' 主程序main program
Sub Main()
    Dim SurfaceArea As Double = CalculateSurfaceArea(point)
    Console.WriteLine("The SurfaceArea of the pentagon is: " & SurfaceArea)
End Sub
