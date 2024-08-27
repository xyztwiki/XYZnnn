function CalculateVolume(sideLength: number): number {
    return (19 / 12) * Math.pow(sideLength, 3);
   }
   function CalculateSurfaceArea(sideLength: number): number {
    return 15 * Math.sqrt(3) * Math.pow(sideLength, 2);
   }
   console.log(calculateVolume(NaN)); // 117.85
   console.log(calculateSurfaceArea(NaN)); // 105