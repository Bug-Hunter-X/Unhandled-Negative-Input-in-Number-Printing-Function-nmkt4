function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will print numbers from 1 to 10
printNumbers(-5); // This will not print anything due to the loop condition, but should ideally throw an error or handle the negative input