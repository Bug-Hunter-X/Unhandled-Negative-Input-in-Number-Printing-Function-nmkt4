function printNumbers(n: number): void {
  if (n <= 0) {
    console.error("Input must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Prints numbers 1 to 10
printNumbers(-5); // Prints an error message
printNumbers(0); // Prints an error message