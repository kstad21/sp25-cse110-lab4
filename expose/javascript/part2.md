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
12. a) accessing value of name property: `student.name `
    b) accessing Grad Year: `student['Grad Year']`
    c) calling greeting function: `student.greeting();`
    d) accessing name of favorite teacher: `student['Favorite Teacher'].name`
    e) access index zero of courseLoad: `student.courseLoad[0]`
13. a) `'3' + 2` -> `32` because `3` is a string so `2` just gets concatenated to `3`.

    b) `'3' - 2` -> `1` because the minus foces both elements to be #s. 

    c) `3 + null` -> `3` because `null` will be converted to 0. 

    d) `'3' + null` -> `3null` because the plus operator, unlike the minus, leads to concatenation, which causes `null` to be changed to `'null'`. 

    e) `true + 3` -> `4` because `true` gets converted to 1. 

    f) `false + null` -> `0` because both `false` and `null` get converted to 0!

    g) `'3' + undefined` -> `3undefined` because (similarly to part d) `undefined` is changed to `'undefined'` given the plus operator and the string type of `'3'`.

    h) `'3' - undefined` -> `Not a Number (NaN)` because `undefined` cannot be changed into a number even though the minus operator demands it.

14. a) `'2' > 1` -> `true`, since `2` gets converted to a number and indeed, `2>1`.

    b) `'2' < '12'` -> `false`, since both sides of the operator are strings, resulting in a lexographic comparison. If we think of the first characters in each string on either side of the operator, `2` comes after `1` and therefore is not less than `12`. 

    c) `2 == '2'` -> `true`, as `==` allows type coercion and `'2'` can be coerced to `2` which equals `2`.

    d) `2 === '2'` -> `false`, as `===` is the strict equality, checking value AND type. Since `2` and `'2'` are different types, they are not strictly equal.

    e) `true == 2` -> `false`. `true` (like we saw in #13) gets changed to `1` and `1 != 2`. 

    f) `true === Boolean(2)` -> `true`, because any `Boolean(nonzero #)` -> `true` and `true == true`.

