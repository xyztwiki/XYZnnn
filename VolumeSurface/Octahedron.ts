// 定义一个函数来计算正八面体的体积
function calculateVolume(sideLength: number): number {
    return (2 * Math.sqrt(2)) / 3 * Math.pow(sideLength, 3);
   }
   // 定义一个函数来计算正八面体的表面积
   function calculateSurfaceArea(sideLength: number): number {
    return 2 * Math.sqrt(3) * Math.pow(sideLength, 2);
   }
   // 使用示例
   const sideLength = 4; // 正八面体的边长
   const Volume = calculateVolume(sideLength);
   const SurfaceArea = calculateSurfaceArea(sideLength);
