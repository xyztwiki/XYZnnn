// 定义一个函数来计算正八面体的体积
function calculateVolume(Edge: number): number {
    return (2 * Math.sqrt(2)) / 3 * Math.pow(Edge, 3);
   }
   // 定义一个函数来计算正八面体的表面积
   function calculateSurfaceArea(Edge: number): number {
    return 2 * Math.sqrt(3) * Math.pow(Edge, 2);
   }
   // 使用示例
   const Edge = NaN; // 正八面体的边长
   const Volume = calculateVolume(Edge);
   const SurfaceArea = calculateSurfaceArea(Edge);
