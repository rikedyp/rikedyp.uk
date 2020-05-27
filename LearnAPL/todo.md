# To do

### History of APL (link to APL wiki & HOPL paper?)
- ppt 1
    - Type ball: slide 37
### Motivation
- Notation as a tool of thought
- Comparison to TMN (link to APL wiki)   

### APL Language    
- Syntax overview
    array | fn arg | larg fn rarg | fn op | lfn op rfn | array[indices]        
    - Scalar vs. Non-scalar functions
    - Order of execution
    - Chars and Nums
        - Quotes `''`, double quotes `''''`
        - Real, Complex, Engineering
- Primitives
    - `+ × - ÷ ⌹ * ⍟ ! |`
    - Reduce `/ ⌿` Scan `\ ⍀`
    - Replicate, Expand
        - Most commonly, Compress
    - `⌈ ⌊ ⍋ ⍒ < ≤ = ≥ > ≠ ≡ ≢`
    - `∊ ∪ ∩ ~ ⍷`
        - Link to Progressive-index-of webinar
    - `⍝ ⎕ ⍞`
    - `⍴≢,⍪↑↓`
    - `⌽⍉⊖`
    - `⍳ ?`
        - `⎕RL`
    - `○` 
    - `⍬ ''`
    - `⋄`
    
- Selecting from Arrays
    - Link to Webinar
    - Index-of `⍳`
    - `[]` `⌷` 
    - High rank selection
        - The shape of the result
        - `⌷[]` vs `⌷⍤`        
- Products
    - ∘.f
    - f.g
- Naming / Assignment
    - (strand assignment)←v1 v2
    - Selective assignment 
    - Indexed assignment 
    - Modified assignment
    - `a_ó∆ø1⍙ `
    - Names do not begin with a `⎕D` digit
    
### Using the session 
- System commands
    ```APL
    )vars )fns )obs )save )load )erase
    ```

### Out in the wild
- `⎕← ⊢ +` as Identity / Print-out functions 
    - Only use `⎕←` in production
- Goto
    - `→/` Goto-reduction *\*shudders\**
    - `:Goto`
    - `:Labels`
    - `→⎕LC`

### Errors
- Common errors
    - LENGTH
    - DOMAIN
    - SYNTAX
    - RANK
    - VALUE
    - WS FULL
- ⎕DMX 
- ⎕TRAP, :Trap 
- ⎕SIGNAL

### Terminology
- Scalar
- List 
- Table 
- Vector 
- Matrix
- Rank 
- Array 
- Variable 
- Naming / Assignment 
- System commands 
- Integer 
- Floating point number 
- E-notation
    - Scientific notation 
    - Engineering notation 
    - Exponential notation
- Primitive function 
- Scalar function 
- Structural function 
- Monadic
- Dyadic
- Niladic
- Lamp 
- IME (Input Method Editor)
- Constant / Literal
- Stranding

### Interpreter internals
- APL arrays are self-describing
- Automatic memory management (ppt1, slide 15)
- Dynamically typed
    - Bit booleans
    - Int... Float
    - Complex
    - Decf
    - Engineering notation
- Data copied only if necessary
- Unicode (unless Classic)
    
### Tools & Interfaces
- GUI IDE
    - )ED / Shift-Enter
    - Ctrl-Enter
- Classic vs Unicode (ppt1, slide 42)
    - Classic 
        - ⎕AV
    - Unicode 
        - UPPERCASE before lowercase
- Typing APL 
    - Windows IME
    - Language bar
    - APL Wiki
- OOP
- Parallel
    - Vector instructions
    - Compile to GPU
    - Multi-process with Futures & Isolates
- OLE/COM and Microsoft .NET
- SQL
- `⎕XML`, `⎕JSON`, `⎕CSV`
- Inter-operable
    - Win, AIX, Linux, Pi, macOS
    - Code can be used across platforms without conversion
    - Data files can be used across 32/64 bit, Unicode vs Classic, Big- vs Little-Endian
        - Even if transmitted via TCP sockets
    
### User-defined functions & operators
- Primitive function 
- Scalar function 
- Structural function 
- Monadic
- Dyadic
- Niladic
- Dfns
    - Guards
    - Recursion
- Dops
- Tradfns
    - Local names
    - Control structures
    - Session
- Tradops
- Multi-line functions
- Tacit (point-free) programming
- `⎕FIX` `⎕FX`

### Where to find out more
- F1 / web help
- Google
- support@dyalog.com
- rpark@dyalog.com 

    

Tutorial
--------

Handout
-------