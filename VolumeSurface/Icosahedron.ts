// 定义正二十面体的边长
const edgeLength: number = 1; // 示例边长
// 计算体积
const volume = (5 / 12) * (3 + Math.sqrt(5)) * Math.pow(edgeLength, 3);
// 计算表面积
const surfaceArea = 5 * Math.sqrt(3) * Math.pow(edgeLength, 2);
console.log(`Volume`);
console.log(`Surface Area`);