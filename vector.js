// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
class Vec2 {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getAngle() {
    return atan2(this.y, this.x);
  }

  setAngle(angle) {
    let beforeLength = this.getLength();
    this.x = beforeLength * cos(angle);
    this.y = beforeLength * sin(angle);
  }

  getLength() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  setLength(length) {
    let beforeangle = this.getAngle();
    this.x = length * cos(beforeangle);
    this.y = length * sin(beforeangle);
  }

  add(v2) {
    return new Vec2(this.x + v2.x, this.y + v2.y);
  }

  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
  }

  subtract(v2) {
    return new Vec2(this.x - v2.x, this.y - v2.y);
  }

  subtractFrom(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
  }

  multiply(value) {
    return new Vec2(this.x * value, this.y * value);
  }

  multiplyBy(value) {
    this.x *= value;
    this.y *= value;
  }

  divide(value) {
    return new Vec2(this.x / value, this.y / value);
  }

  divideBy(value) {
    this.x /= value;
    this.y /= value;
  }

}