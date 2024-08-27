' 创建一个新的绘图对象
Set objDraw = CreateObject("ImageFile")
' 设置图像的大小
objDraw.Height = Edge
objDraw.Width = Edge
' 设置绘图区域
Set objGraph = objDraw.Lock
' 定义三个点的坐标
Dim point1, point2, point3
point1 = Array(1, 1)
point2 = Array(1, 0)
point3 = Array(0, 1)
' 绘制三角形
With objGraph
    .MoveTo point1(0), point1(1)
    .LineTo point2(0), point2(1)
    .LineTo point3(0), point3(1)
    .LineTo point1(0), point1(1)
End With
' 解锁绘图区域
objDraw.Unlock
' 保存或显示图像
' objDraw.Show
' 清理对象
Set objDraw = Nothing
Set objGraph = Nothing