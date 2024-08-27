' 定义五边形的五个顶点坐标
Dim point(4, 1) As Double
point(0, 0) = 1.0: point(0, 1) = 1.0
point(1, 0) = 2.0: point(1, 1) = 1.0
point(2, 0) = 2.0: point(2, 1) = 2.0
point(3, 0) = 1.0: point(3, 1) = 2.0
point(4, 0) = 1.0: point(4, 1) = 1.0
' 计算五边形的面积calculate the area of pentagon
Function CalculateArea(points() As Double) As Double
    Dim area As Double
    Dim i As Integer
    Dim j As Integer
    Dim n As Integer = points.Length \ 2
    area = 0.0
    For i = 0 To n - 1
        area = area + points(i * 2, 0) * points(i * 2 + 1, 1)
    Next
    For i = 0 To n - 2
        area = area + points(i * 2, 1) * points(i * 2 + 2, 0)
    Next
    area = area + points(n * 2 - 2, 1) * points(0, 0)
    area = 0.5 * Abs(area)
    Return area
End Function
' 主程序main program
Sub Main()
    Dim area As Double = CalculateArea(point)
    Console.WriteLine("The area of the pentagon is: " & area)
End Sub