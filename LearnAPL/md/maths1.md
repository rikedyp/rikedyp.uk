# Dfns and Assignment

<div class="center">
<div></div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/A8xNTh8_F9g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div></div>
</div>

### Dfns
A dfn is a way of writing functions in APL. It starts and ends with curly braces `{}`, has a right argument with `⍵` (omega) and an optional left argument `⍺`.

```APL
      3{⍺}5      ⍝ ⍺ is the (optional) left argument
3     
      {⍵}'apl'   ⍝ ⍵ is the right argument
apl      
      {⍺}5       ⍝ Calling a dyadic function monadically results in an error
VALUE ERROR
      {⍺}5
      ∧            
      3{⍺}       ⍝ Calling a dyadic funcion without a right argument results in an error
SYNTAX ERROR: Missing right argument
      3{⍺}
       ∧
```

### Assignment
Names are assigned with the left array `←`. We say "name gets [function or array]".

```APL
      one←1      
      three←3      
      equals←=      
      plus←+      
      four←4      
      four equals one plus three   ⍝ 1 means true, 0 means false
1
```

We can use a name in the same line in which it is defined. In production code it is best to avoid this unless an expression is very short.
```APL
      ⍝ Squared numbers divided by the sum of squares 
      
      squared÷+/squared←¯1 0 1 2*2 
0.1666666667 0 0.1666666667 0.6666666667`
```
# Problem Set 2: Dfns and Assignment
1. Utility Functions
    1. Without using `≢` (tally), create a function named `Tally` which returns the number of elements in a vector.
    
        ```APL
              Tally 1 2 4 523 1 2 454
        7
        ```
        
    2. Create a function named `Mean` which returns the mean average of a numeric vector.

        ```APL
              Mean 1 2 4 523 1 2 454
        141
        ```
        
    3. Using `⌊` ("floor" i.e. round down), create a function `IsDivisibleBy` which returns `1` if `⍺` is divisible by `⍵` and `0` otherwise.
    
        ```APL
              15 IsDivisibleBy 5
        1        
              15 IsDivisibleBy 6
        0       
              12 IsDivisibleBy ⍳12
        1 1 1 1 0 1 0 0 0 0 0 1
        ```
        
2. What Remains
    1. `Mod` is a **dyadic** function which returns the remainder after its right argument **`⍵`** number is divided by the left argument **`⍺`**.
    
        ```APL
              16÷5  
        3.2              
              5 Mod 16   ⍝ 3 5s and 1 left over
        1              
              0.2×5      ⍝ 0.2 5s left over
        1              
              12 Mod 30
        6        
              13 Mod 56
        4        
              5 Mod 30   ⍝ 5 goes into 25 exactly 6 times      
        0       
        ```
        
        Write the `Mod` function as a dfn.
    2. Write a function named `Split` which takes a fractional number and returns two numbers: its integer and fractional parts.
    
        ```APL
              Split 0
        0 0        
              Split ¯10
        ¯10 0        
              Split 7.62
        7 0.62
        ```
        
3. What Was In That Vector Again?

    You should have a variable named `⎕AVU` in your workspace, from [Part 1](https://problems.tryapl.org/intro.html).
    
    1. How many even numbers are there in `⎕AVU`?
    
        Answer: `132`
        
    2. What percentage of numbers in `⎕AVU` are odd numbers?
    
        Answer: `48.4375`
        
    3. What percentage of numbers in `⎕AVU` are strictly negative?
    
        Answer: `0`
        
    4. What percentage of numbers in `⎕AVU` are strictly positive?
    
        Answer: `99.609375`
        
    5. What do you notice about the percentage of strictly positive and negative numbers?
    
4. Prime Time

    A prime number is divisible only by itself and `1`.
    
    Write a dfn which returns `1` if its argument is prime and `0` otherwise.
    
    ```APL
          IsPrime 21
    0
          IsPrime 17
    1
    ```

