class LimitNumberHelper {
  static limit(number, { min = 0, max } = {}) {
    if (number <= min) return min;
    if (number >= max) return max;
    return number;
  }
}

module.exports = LimitNumberHelper;
