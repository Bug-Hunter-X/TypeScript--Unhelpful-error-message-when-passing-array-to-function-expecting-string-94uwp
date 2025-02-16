# TypeScript Unhelpful Error Message

This repository demonstrates a scenario where TypeScript provides an unhelpful error message when an array is passed to a function expecting a string. The error message itself doesn't clearly indicate the type mismatch.

## Bug Description

The `greeter` function expects a string argument. However, when an array of strings is passed, TypeScript throws an error that doesn't explicitly state that the issue is a type mismatch between array and string.

## Solution

The solution involves explicit type checking or using a different approach to handle multiple names, such as using the spread operator to iterate through the array and greet each person individually or modifying the function signature to accept an array of strings. 