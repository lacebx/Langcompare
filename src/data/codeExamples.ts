
export interface CodeExample {
  id: string;
  title: string;
  description: string;
  category: string;
  languages: {
    [key: string]: {
      code: string;
      explanation: string;
      compilable: boolean;
    }
  }
}

const formatCode = (code: string): string => {
  // Simple syntax highlighting with HTML
  return code
    .replace(/(\/\/.*|#.*)/g, '<span class="code-comment">$1</span>')
    .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="code-string">$1</span>')
    .replace(/\b(function|def|fn|func|class|if|else|while|for|return|import|from|let|const|var|pub|fn|fun|async|await)\b/g, '<span class="code-keyword">$1</span>')
    .replace(/\b([A-Za-z_][A-Za-z0-9_]*\()/g, '<span class="code-function">$1</span>')
    .replace(/\b(\d+(\.\d+)?)\b/g, '<span class="code-number">$1</span>');
};

export const codeExamples: CodeExample[] = [
  {
    id: "variables",
    title: "Variable Declaration",
    description: "How to declare and initialize variables",
    category: "Basics",
    languages: {
      "Python": {
        code: formatCode(`# Variable declaration in Python
name = "John"     # String
age = 30          # Integer
height = 5.9      # Float
is_student = True # Boolean

# Python is dynamically typed
x = 10
x = "hello"  # This is valid in Python
`),
        explanation: "Python variables are dynamically typed and don't require an explicit type declaration. Variable names should be snake_case by convention.",
        compilable: true
      },
      "JavaScript": {
        code: formatCode(`// Variable declaration in JavaScript
let name = "John";     // String
const age = 30;        // Integer
let height = 5.9;      // Float
const isStudent = true; // Boolean

// Different ways to declare variables
var oldWay = "Legacy"; // Function scoped
let newWay = "Block scoped";
const constant = "Cannot reassign";

// JavaScript is dynamically typed
let x = 10;
x = "hello";  // This is valid in JavaScript
`),
        explanation: "JavaScript offers three variable declaration keywords. 'const' creates a constant reference, 'let' provides block-scoped variables, and 'var' is function-scoped and generally avoided in modern code. Variables are camelCase by convention.",
        compilable: true
      },
      "TypeScript": {
        code: formatCode(`// Variable declaration in TypeScript
let name: string = "John";      // String
const age: number = 30;         // Integer
let height: number = 5.9;       // Float
const isStudent: boolean = true; // Boolean

// Type inference
let inferred = "TypeScript infers this as string";

// Type safety
let x: number = 10;
// x = "hello";  // Error: Type 'string' is not assignable to type 'number'

// Union types
let mixed: string | number;
mixed = "hello";
mixed = 42;
`),
        explanation: "TypeScript extends JavaScript with static type checking. Types can be explicitly declared or inferred. This provides compile-time type safety.",
        compilable: true
      },
      "Rust": {
        code: formatCode(`// Variable declaration in Rust
fn main() {
    let name = "John";       // String (&str)
    let age = 30;            // Integer (i32)
    let height = 5.9;        // Float (f64)
    let is_student = true;   // Boolean
    
    // Mutability
    let mut mutable_value = 10;
    mutable_value = 20;  // OK
    
    // Type annotations
    let typed_value: i32 = 42;
    
    // Rust is statically typed
    let x: i32 = 10;
    // x = "hello";  // Error: mismatched types
}
`),
        explanation: "Rust variables are immutable by default. The 'mut' keyword is needed for mutable variables. Rust has strong, static typing with type inference.",
        compilable: true
      },
      "Go": {
        code: formatCode(`// Variable declaration in Go
package main

import "fmt"

func main() {
    // Explicit declaration
    var name string = "John"
    var age int = 30
    var height float64 = 5.9
    var isStudent bool = true
    
    // Short declaration
    shortName := "John"
    
    // Multiple declaration
    var a, b int = 1, 2
    
    // Go is statically typed
    x := 10
    // x = "hello"  // Error: cannot use "hello" (type string) as type int
}
`),
        explanation: "Go offers both explicit variable declarations with 'var' and short declarations with ':='. Go is statically typed, enforcing type safety at compile time.",
        compilable: true
      },
      "Java": {
        code: formatCode(`// Variable declaration in Java
public class Variables {
    public static void main(String[] args) {
        String name = "John";    // String
        int age = 30;            // Integer
        double height = 5.9;     // Float
        boolean isStudent = true; // Boolean
        
        // Primitive types
        byte smallNumber = 127;
        short mediumNumber = 32767;
        long largeNumber = 9223372036854775807L;
        float decimalNumber = 3.14f;
        char singleCharacter = 'A';
        
        // Java is statically typed
        int x = 10;
        // x = "hello";  // Error: incompatible types
    }
}
`),
        explanation: "Java requires explicit type declarations for all variables. It distinguishes between primitive types and reference types. Java uses strong, static typing checked at compile time.",
        compilable: true
      }
    }
  },
  {
    id: "functions",
    title: "Function Definition",
    description: "How to define and call functions",
    category: "Basics",
    languages: {
      "Python": {
        code: formatCode(`# Function definition in Python
def greet(name):
    """Simple greeting function"""
    return f"Hello, {name}!"

# Function with default parameters
def greet_with_time(name, time="morning"):
    return f"Good {time}, {name}!"

# Function with arbitrary arguments
def sum_all(*numbers):
    return sum(numbers)

# Lambda function (anonymous)
double = lambda x: x * 2

# Calling the functions
result = greet("Alice")
print(greet_with_time("Bob", "evening"))
print(sum_all(1, 2, 3, 4, 5))
print(double(5))  # Outputs: 10
`),
        explanation: "Python functions are defined with the 'def' keyword, can have docstrings, default parameters, and support various parameter types. Python also supports lambda functions for simple, anonymous functions.",
        compilable: true
      },
      "JavaScript": {
        code: formatCode(`// Function definition in JavaScript
// Function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Arrow function expression
const greetArrow = (name) => {
    return \`Hello, \${name}!\`;
};

// Short arrow function
const double = x => x * 2;

// Function with default parameters
function greetWithTime(name, time = "morning") {
    return \`Good \${time}, \${name}!\`;
}

// Rest parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Calling the functions
const result = greet("Alice");
console.log(greetWithTime("Bob", "evening"));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(double(5));  // Outputs: 10
`),
        explanation: "JavaScript offers multiple ways to define functions: function declarations, function expressions, and arrow functions. It supports default parameters and rest parameters similar to Python's *args.",
        compilable: true
      },
      "Rust": {
        code: formatCode(`// Function definition in Rust
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Function with multiple parameters
fn add(a: i32, b: i32) -> i32 {
    a + b  // Implicit return (no semicolon)
}

// Function with mutable references
fn increment(number: &mut i32) {
    *number += 1;
}

// Functions with generics
fn first<T>(list: &[T]) -> Option<&T> {
    if list.is_empty() {
        None
    } else {
        Some(&list[0])
    }
}

fn main() {
    // Calling the functions
    let result = greet("Alice");
    println!("{}", result);
    
    let sum = add(5, 7);
    println!("Sum: {}", sum);
    
    let mut value = 10;
    increment(&mut value);
    println!("Incremented: {}", value);
    
    let numbers = vec![1, 2, 3];
    if let Some(first_num) = first(&numbers) {
        println!("First: {}", first_num);
    }
}
`),
        explanation: "Rust functions require explicit type signatures for parameters and return values. The last expression in a function body becomes the return value if it doesn't end with a semicolon. Rust ownership system impacts how data is passed to and from functions.",
        compilable: true
      },
      "Go": {
        code: formatCode(`// Function definition in Go
package main

import "fmt"

// Simple function
func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

// Named return values
func rectangle(width, height float64) (area, perimeter float64) {
    area = width * height
    perimeter = 2 * (width + height)
    return // "naked" return
}

// Variadic function
func sumAll(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

func main() {
    // Calling the functions
    result := greet("Alice")
    fmt.Println(result)
    
    quotient, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", quotient)
    }
    
    area, perimeter := rectangle(5, 3)
    fmt.Printf("Area: %f, Perimeter: %f\\n", area, perimeter)
    
    sum := sumAll(1, 2, 3, 4, 5)
    fmt.Println("Sum:", sum)
}
`),
        explanation: "Go functions can return multiple values, which is often used for returning a result and an error. Named return values and variadic parameters are supported. Go doesn't have default parameter values or function overloading.",
        compilable: true
      },
      "TypeScript": {
        code: formatCode(`// Function definition in TypeScript
// Function with type annotations
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

// Arrow function with types
const greetArrow = (name: string): string => {
    return \`Hello, \${name}!\`;
};

// Function with optional parameters
function createUser(name: string, age?: number): object {
    return { name, age };
}

// Function with default parameters
function greetWithTime(name: string, time: string = "morning"): string {
    return \`Good \${time}, \${name}!\`;
}

// Rest parameters with types
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Generic functions
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Calling the functions
const result = greet("Alice");
console.log(greetWithTime("Bob", "evening"));
console.log(sumAll(1, 2, 3, 4, 5));
const first = firstElement([1, 2, 3]);
console.log(first);  // Outputs: 1
`),
        explanation: "TypeScript adds static typing to JavaScript functions, allowing clear specification of parameter and return types. It supports generics, optional parameters, and all the features of JavaScript functions.",
        compilable: true
      }
    }
  },
  {
    id: "loops",
    title: "Loops and Iterations",
    description: "Different ways to iterate and loop through data",
    category: "Control Flow",
    languages: {
      "Python": {
        code: formatCode(`# Loops in Python
# For loop with range
for i in range(5):
    print(i)  # Prints 0 to 4

# For loop with list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with enumeration
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# List comprehension
squares = [x*x for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 8:
        break     # Stop at 8
    print(i)
`),
        explanation: "Python offers traditional for and while loops, but also powerful comprehensions for creating lists, sets, and dictionaries. The 'enumerate()' function is commonly used to get both indices and values.",
        compilable: true
      },
      "JavaScript": {
        code: formatCode(`// Loops in JavaScript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // Prints 0 to 4
}

// For...of loop (ES6)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// For...in loop (for object keys)
const person = {name: "John", age: 30};
for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do...while loop
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);

// forEach method
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});

// map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x * x);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
`),
        explanation: "JavaScript offers traditional C-style for loops, while loops, and do-while loops. Modern JavaScript also includes for...of loops for iterables and array methods like forEach, map, filter, and reduce for functional programming patterns.",
        compilable: true
      },
      "Rust": {
        code: formatCode(`// Loops in Rust
fn main() {
    // For loop with range
    for i in 0..5 {
        println!("{}", i);  // Prints 0 to 4
    }
    
    // For loop with iterator
    let fruits = vec!["apple", "banana", "cherry"];
    for fruit in fruits.iter() {
        println!("{}", fruit);
    }
    
    // For loop with enumeration
    for (index, fruit) in fruits.iter().enumerate() {
        println!("{}: {}", index, fruit);
    }
    
    // While loop
    let mut count = 0;
    while count < 5 {
        println!("{}", count);
        count += 1;
    }
    
    // Loop with break and continue
    let mut counter = 0;
    loop {
        counter += 1;
        
        if counter == 3 {
            continue;  // Skip 3
        }
        
        println!("{}", counter);
        
        if counter == 5 {
            break;  // Stop at 5
        }
    }
    
    // Loop with labeled break
    'outer: for x in 0..5 {
        for y in 0..5 {
            if x * y > 10 {
                println!("Breaking at x={}, y={}", x, y);
                break 'outer;
            }
        }
    }
    
    // Iterators and functional patterns
    let numbers = vec![1, 2, 3, 4, 5];
    let squares: Vec<_> = numbers.iter().map(|x| x * x).collect();
    let evens: Vec<_> = numbers.iter().filter(|&&x| x % 2 == 0).collect();
    let sum: i32 = numbers.iter().sum();
}
`),
        explanation: "Rust includes for loops over ranges and iterators, while loops, and an infinite 'loop' construct. Rust's iterators provide powerful functional programming capabilities with methods like map, filter, and fold.",
        compilable: true
      },
      "Go": {
        code: formatCode(`// Loops in Go
package main

import "fmt"

func main() {
    // Basic for loop
    for i := 0; i < 5; i++ {
        fmt.Println(i)  // Prints 0 to 4
    }
    
    // For as a while loop
    count := 0
    for count < 5 {
        fmt.Println(count)
        count++
    }
    
    // Infinite loop with break
    counter := 0
    for {
        counter++
        if counter > 5 {
            break
        }
        fmt.Println(counter)
    }
    
    // For loop with range (slice)
    fruits := []string{"apple", "banana", "cherry"}
    for index, fruit := range fruits {
        fmt.Printf("%d: %s\\n", index, fruit)
    }
    
    // For loop with range (map)
    person := map[string]interface{}{
        "name": "John",
        "age":  30,
    }
    for key, value := range person {
        fmt.Printf("%s: %v\\n", key, value)
    }
    
    // Skipping values with _
    for _, fruit := range fruits {
        fmt.Println(fruit)  // Only print the value, not the index
    }
    
    // Continue statement
    for i := 0; i < 10; i++ {
        if i%2 == 0 {
            continue  // Skip even numbers
        }
        fmt.Println(i)
    }
}
`),
        explanation: "Go has only one loop construct: 'for'. However, it can be used like while loops and infinite loops. The 'range' keyword is used to iterate over arrays, slices, strings, maps, and channels.",
        compilable: true
      }
    }
  }
];

export const allCategories = Array.from(
  new Set(codeExamples.map(example => example.category))
);

export const allLanguages = Array.from(
  new Set(codeExamples.flatMap(example => Object.keys(example.languages)))
);
