Set objDraw = CreateObject("ImageFile")
objDraw.Height = Edge
objDraw.Width = Edge
Set objGraph = objDraw.Lock
Dim point1, point2, point3
point1 = Array(1, 1)
point2 = Array(1, 0)
point3 = Array(0, 1)
With objGraph
    .MoveTo point1(0), point1(1)
    .LineTo point2(0), point2(1)
    .LineTo point3(0), point3(1)
    .LineTo point1(0), point1(1)
End With
objDraw.Unlock
