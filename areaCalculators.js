function calculateRectangle(length,width) {
  if (length , 0 || width<0)  {
    return (NaN);
} else {
  return length * width;
}
}

function calculateTriangle(base,height) {
  if (base < 0 || height < 0) {
    return (NaN);
  } else {
    return base * height / 2;
  }
}

function calculateCircle(radius) {
  if (radius < 0) {
    return (NaN);
  } else {
    return Math.PI * radius * radius;
  }
}