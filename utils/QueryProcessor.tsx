export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "junkaife";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "junkaife";
  }

  if (query.toLowerCase().includes("largest")) {
    const nums = query.match(/-?\d+/g)?.map(Number) ?? [];
    if (nums.length > 0) {
      return String(Math.max(...nums));
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const nums = query.match(/-?\d+/g)?.map(Number) ?? [];
    if (nums.length > 0) {
      return String(nums.reduce((a, b) => a + b, 0));
    }
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const nums = query.match(/-?\d+/g)?.map(Number) ?? [];
    if (nums.length > 0) {
      return String(nums.filter((n) => Number.isInteger(Math.sqrt(n)) && Number.isInteger(Math.cbrt(n))));
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const nums = query.match(/-?\d+/g)?.map(Number) ?? [];
    if (nums.length > 0) {
      return String(nums.reduce((a, b) => a * b, 1));
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const nums = query.match(/-?\d+/g)?.map(Number) ?? [];
    if (nums.length > 0) {
      return String(nums.reduce((a, b) => a - b));
    }
  }
  return "";
}
