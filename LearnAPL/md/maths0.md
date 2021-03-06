# First steps

<div class="center">
<div></div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/JXCaVuosP0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div></div>
</div>

It is easy to add lists of numbers together
```APL
      1 2 3 + 4 5 6
5 7 9
```

Negative numbers are written with a high minus `¯`, to differentiate between negation `¯3 = -3` and literal negative numbers
```APL
      1 2 3 - 1 0 ¯1
0 2 4
```

### Singleton extension
Dyadic functions (functions with two input arguments, one on the left and one on the right) can map between a single value and an array of values.
```APL
      3 × 1 10 100
3 30 300
      3 = 1 2 3 4 5
0 0 1 0 0
```

### The reduction operator
Adding a list of numbers *could* become very tedious...
```APL
      1+2+3+4+5+6+7+8+9+10+11+12+13+14+15
120
```

The reduce operator `/` inserts the function to its left between parts of the right argument array.
```APL
      +/1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
120
```

### The index generator
The index generator `⍳` generates integers up to the integer right argument `⍵`
```APL
      ⍳10
1 2 3 4 5 6 7 8 9 10
```

So we can do an arithmetic sum as follows

|  |  |
|--|--|
|**Traditional Mathematical Notation (TMN)** | **APL** |
| $$ \sum_{n=1}^N n $$ | `+/⍳N`

### Order of execution
Infix (dyadic) functions have a **short** *left* scope and **long** *right* scope. 
```APL
      10×⍳2+5   
10 20 30 40 50 60 70
```
The expresssion above is "two *times* the indices from 1 to *two plus five*, or in short: "two times iota two plus five". We can make it clearer using (superfluous) **parentheses** `()`.
```APL
      10×(⍳(2+5))
10 20 30 40 50 60 70
```
Of course, we can change the order of execution using different parentheses.
```APL
      (10×⍳2)+5  
15 25
```
# Problems Set 1: The APL Pocket Calculator
1. A Mathematical Notation
    Use APL to evaluate the following
    1. $479001600 = \prod_{n=1}^{12} n$ (multiply together the first twelve integers)

    2. $1785 = \sum_{n=1}^{17}n^2$ (add together the first seventeen squared integers)

    3. $10100 = \sum_{n=1}^{100}2n$ (add together the first one hundred even integers)

    4. $10000 = \sum_{n=1}^{100}2n-1$ (add together the first one hundred odd integers)

    5. In traditional mathematical notation (TMN), the following equation equals `0`, why does the following return `70`?

```APL
      84 - 12 - 1 - 13 - 28 - 9 - 6 - 15  
70
```

2. Pyramid Schemes
    1. Sugar cubes are stacked in an arrangement as shown by **figure 1**.

        <figure>
        <img width=200px src="img/SquaredCubes.png" alt="Figure 1. Stacked sugar cubes">
        <figcaption><strong>Figure 1.</strong> Stacked sugar cubes</figcaption>
        </figure>

        This stack has `4` **layers** and a total of `30` cubes.  
        How many cubes are there in a similar stack with `467` **layers**?
        Answer: `34058310`

    1. Now consider the stack in **figure 2**.

        <figure>
        <img width=280px src="img/OddSquaredCubes.png" alt="Figure 2. Differently stacked sugar cubes">
        <figcaption><strong>Figure 2.</strong> Differently stacked sugar cubes</figcaption>
        </figure>

        The arrangement in **figure 2** has `4` **layers** and `84` cubes.  
        How many cubes are there in a similar stack with 812 **layers**?
        Answer: `713849500`


    1. Now look at **figure 3**.

        <figure>
        <img width=280px src="img/CubedCubes.png" alt="Figure 3. This is just a waste of sugar cubes by now...">
        <figcaption><strong>Figure 3.</strong> This is just a waste of sugar cubes by now...</figcaption>
        </figure>

        The stack in **figure 3** has `3` **"layers"** and `36` cubes in total.  
        How many cubes are there in a similar stack with 68 **"layers"**?
        Answer: `5503716`

3. What's in a Vector?
    `⎕AVU` is a list (vector) of numbers (don't worry about what it represents). Find the following properties of `⎕AVU`.  
    1.  Find the sum of all the values in `⎕AVU`.
	     
        Answer: `646112`

    2.  Find the product of all the values in `⎕AVU`.
         
        Answer: `0`

    3.  What is the length of `⎕AVU`?
        
        Answer: `256`

    4.  Find the mean average value of `⎕AVU`.
        
        Answer: `2523.875`

