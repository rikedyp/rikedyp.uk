# To do
More course material coming soon...

3 Day Course
============
Day 1: Problem solving in APL 
--------------------------------
Students watch the introductory video 
    + - × = ⍳ ()
Students attempt Problem Set 1: The APL Pocket Calculator
- typing APL
- syntax
- 2 data types (char and num*)
- ⎕A, ⎕D
- Comments ⍝
- High minus ¯
- Naming ←
- The interface (Windows)
- ]box on
- ]rows -fold=3
- problems.tryapl.org
- Empty arrays, high rank arrays

+ - × ÷ ⍝ ¯

Day 1 PM: What Dyalog can do
----------------------------
- Input & Output
  - ⎕ ⍞ ⍕ ⎕FMT ⎕VFI 
  - ⎕CSV ⎕XML ⎕JSON ⎕F ⎕N  
]HttpCommand, Conga
OLE / COM
Jarvis
MiServer
Component files

Day 2 AM: Further APL
---------------------
- *⎕DR number, character, complex, engineering
  - Compute Pi via monte-carlo
- Array internals
- Cells vs Dimensions, Rank vs Axis
- ]disp, ]display
- Dfns, Tradfns and Tacit programming
- More problem solving

Day 2 PM: APL & Computer Stuff
------------------------------
- Namespaces, classes, objects
- Control structures
- Error trapping

Day 3: Using Dyalog in anger
----------------------------
- Warts one is likely to encounter / conveniences which should be used carefully in production code
  - GoTo
  - Niladic functions
  - Stranded assignment
  - Selective assignment
  - Modified assignment
  
- How to find out more
- Where to go to get help
- Try to create demo projects from scratch from spec
It is likely that content from the first two days will overrun (especially the first time this is run). So the final portion of the course should be flexible and, as much as possible, tailored to what the customer will be doing in their day-to-day.

What you need to learn in week 1
================================
Terminology
APL which works in v12.0 (Mark v14+ language features, include summary in handout)
Typing APL
Parsing APL
What is array-oriented thinking?
Dfns, Tradfns and Tacit
:Control statements
Getting help / finding things out
- documentation
- F1
- aplcart 
- apl wiki
- apl orchard
- support@dyalog
User commands
- ]box, ]rows

More
----
Excercises
Practising finding answers for yourself

Less
----
Teacher talk

What you DON'T need to 
======================
What all the primitives do
The history of APL / KEI's life
The "motivation" for APL in terms of teaching tensor algebra / replacing Traditional Mathematical Notation

Meta
----
Why :AndIf?