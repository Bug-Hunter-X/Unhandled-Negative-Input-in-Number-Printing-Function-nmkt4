# Unhandled Negative Input in TypeScript Number Printing Function

This repository demonstrates a common issue in TypeScript: functions not gracefully handling invalid input.  Specifically, the `printNumbers` function fails to handle negative input values, leading to unexpected behavior.

The bug is that when a negative number is passed to `printNumbers`, the loop does not execute at all, resulting in no output. Ideally, the function should either throw an error or handle the negative input in a meaningful way, such as printing an error message or returning an appropriate value.

The solution provided shows how to address this issue by adding input validation and handling negative inputs appropriately.
