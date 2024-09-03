abstract class tetrahedron(){
    constructor(r:string, theta:number, phi:number){
        const x = this.r * Math.sin(this.theta) * Math.cos(this.phi);
        const y = this.r * Math.sin(this.theta) * Math.sin(this.phi);
        const z = this.r * Math.cos(this.phi);
    }
    const tetrahedronAngle = Math.acos(-1/3);
        return [
            new SphericalPoint(radius, 0, 0),
            new SphericalPoint(radius, 0, tetrahedronAngle),
            new SphericalPoint(radius, 2 * Math.PI / 3, tetrahedronAngle),
            new SphericalPoint(radius, 4 * Math.PI / 3, tetrahedronAngle)
        ];
}
