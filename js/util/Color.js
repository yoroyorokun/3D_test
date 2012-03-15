//*************************
//
//	color utilities
//
//	rgb_to_lab(r,g,b)
//
//*************************
function rgb_to_lab(r,g,b){
	//** RGB[0..1] -> XYX[0..1] 
	var R,G,B,X,Y,Z;
	R = r / 255;
	G = g / 255;
	B = b / 255;
	X = 0.412453 * R + 0.357584 * G + 0.180423 * B;
	Y = 0.212671 * R + 0.715169 * G + 0.072169 * B;
	Z = 0.019334 * R + 0.119193 * G + 0.950227 * B;
	//** XYZ[0..100] -> L*a*b*
	var Xr,Yr,Zr;
	X = X * 100;
	Y = Y * 100;
	Z = Z * 100;
	Xr = 95.045;
	Yr = 100;
	Zr = 108.892;
	X = X / Xr;
	Y = Y / Yr;
	Z = Z / Zr;
	var l,a,b_;
	l  = 116 * color_f(Y) - 16;
	a  = 500 * ( color_f(X) - color_f(Y) );
	b_ = 200 * ( color_f(Y) - color_f(Z) );
	result = {l: l,a: a,b: b_};
	return result
}

function color_f(t){
	if(t > 0.008856){
		return Math.pow(t,1/3);
	}else{
		return (903.3 * t + 16)/116;
	}
}


