1. At line 12, `i` is printed, which ends up printing `3`. This is because `i` is in the foor loop and its final value is `3`.
2. At line 13, `150` will be printed, because this is the last-set value of `discountedPrice`.
3. At line 14, `150` will be printed, because this is the last-set value of `finalPrice`.
4. The function will return the list `discounted` with `[50, 100, 150]`. This is the prices list that was provided with the discount of `0.5` applied.
5. Line 12 gives an error because using `let` to declare `i` makes it only accessible in the for loop, not outside of the for loop where line 12 is.
6. Line 13 will give an error because we declared `discountedPrice` with `let` inside the for loop.
7. Line 14 will print 150 because this is the final value of `finalPrice`, and we are in the scope of declaration.
8. This function will return a list with the discounts applied, `[100, 200, 300]`. This is because even though `discounted` is declared with at `let` inside of the function, the return value is a copy of the value of `discounted` at the end of the function.
9. This will be an error, because we're trying to access `i` outside of its scope of declaration.
10. This will print `3` because this is the length of `prices` and we are in the same scope of declaration. 
11. This will return a list with discounts applied, `[50, 100, 150]`. This is because even though `discounted` is declared as a constant, we can add to the list without reassigning it.
