class LimitNumberHelper {
  static exceed(number, { min = 0, max } = {}) {
    if (number >= min && number < max) {
      return number;
    }
    if (number >= max) {
      return number % max;
    }
    if (number <= min) {
      return max - (Math.abs(number) % max);
    }
  }
}

module.exports = LimitNumberHelper;
