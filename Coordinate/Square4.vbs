Imports System.Drawing
Module SquareInRectangularCoordinate
    Sub Main()
        ' 定义正方形的边长
        Dim Edge As Double = 5.0
        ' 定义正方形的四个Vertice坐标
        Dim point1 As New Point(0, 0)
        Dim point2 As New Point(Edge, 0)
        Dim point3 As New Point(Edge, Edge)
        Dim point4 As New Point(0, Edge)
        ' 绘制正方形
        Using graphics As Graphics = Graphics.FromImage(New Bitmap(Edge, Edge))
            graphics.DrawRectangle(Pens.Black, New Rectangle(point1, point3))
        End Using
        ' 输出正方形Vertice坐标
        Console.WriteLine("Vertice1: ({0}, {1})", point1.X, point1.Y)
        Console.WriteLine("Vertice2: ({0}, {1})", point2.X, point2.Y)
        Console.WriteLine("Vertice3: ({0}, {1})", point3.X, point3.Y)
        Console.WriteLine("Vertice4: ({0}, {1})", point4.X, point4.Y)
    End Sub
End Module
