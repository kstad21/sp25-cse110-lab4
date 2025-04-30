1. Line 9 prints `values added: 20`.
2. Line 13 prints `final result: 20`.
3. You should not use var because it can result in unexpected behavior due to it being function but not block scoped. So while it should be scoped to the if statement starting on line 3, it is actually scoped to the function sumValues.
4. Line 9 prints `values added: 20`.
5. Line 13 prints an error because `result` is not defined. This is because we didn't use var, and there is a block scope for `result` now!
6. Line 9 gives an error because we cannot reset the value of `result` if we declare it as a constant.
7. Line 13 gives an error because we cannot reset the value of `result` if we declare it as a constant. 
