# Selecting from Lists

<div class="center">
<div></div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Gb7KFDlJV1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div></div>
</div>

### Indexing
In many other programming languages, "selection" is used to describe control structures such as "if then else" or "switch case". In APL, we can get a similar effect by literally "selecting" elements from arrays. 

```APL
      'APPLE'[1 3 4]                         ⍝ Select elements 1, 3 and 4
APL      
      ⍸ 1 0 0 1 0 1                          ⍝ Where are the 1s?
1 4 6
      (⍳5) IsDivisibleBy 2                   ⍝ 1 Where ⍺ is even
0 1 0 1 0
      {⍵[⍸⍵ IsDivisibleBy 123]}⎕AVU          ⍝ Numbers in ⎕AVU divisible by 123
0 123 8364 246
```

# Problem Set 3: Selecting from Lists

1. Simple Simon says select these elements
    1. Write a function to get even numbers from a numeric list.
        
        ```APL
              Even ⍳10
        2 4 6 8 10
              Even 1 17 19 22 32 15
        22 32   
        ```
        
    1. Write a function to get numbers which are divisible by `5` from a numeric list. 
    
        ```APL
              Div5 ⍳50
        5 10 15 20 25 30 35 40 45 50
              Div5 12 13 15 20 19 55 16
        15 20 55    
        ```
        
    1. Write a function to get numbers which are divisible by `⍺` from a numeric list. 
    
        ```APL
              3 Div ⍳30
        3 6 9 12 15 18 21 24 27 30
              7 Div 11 17 21 42 18 7 0 70
        21 42 7 0 70          
        ```
        
1. Without without
Not using `~`, write a dfn which removes spaces from a text vector. 

    ```APL
          NoSpace'here is some text'
    hereissometext
          NoSpace'there   are   more   spaces   here'
    therearemorespaceshere
    ```

1. sdrawkcab s'taht woN
Not using `⌽`, write a dfn which reverses its right argument. 

    ```APL
          Reverse 'Some characters'
    sretcarahc emoS
          Reverse ⍳10
    10 9 8 7 6 5 4 3 2 1       
    ```