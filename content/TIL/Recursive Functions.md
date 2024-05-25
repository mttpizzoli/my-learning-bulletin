---
tags:
  - function
  - programming
  - coding
draft: false
date: 2024-05-05
title: Recursive Functions
---
In programming, a recursive function is *a function that calls itself*.

This is very practical for tasks that can be broken down into similar subtasks. A prime example that you often use when dealing with this is the [[factorial]] function.

If you let $n$ a natural number,  the factorial of $n$ would be:

$$n! = n\cdot(n+1)\cdot(n-2)\dots2\cdot1 $$

It's easy to notice that you can simplify the problem by writing that $n$ factorial is equal to $n$ times $(n-1)$ factorial.
$$n! = n\cdot(n-1)!$$
The latter formula already shows that there is a factorial operator on both sides of the equation. This implies that recursive functions can be applied.

Although such an example can be quickly sorted using standard techniques, those are highly inefficient, making the recursive option even more appealing.

When writing a recursive function, there are two main things you should be dealing with.

1. The **Base Case**. This is the condition under which you stop the recursive function. In other words, if you land in this case, the function stops calling itself. Having such a case is mandatory because otherwise, you would not be able to stop the function.
2. The **Recursive Case**. In this condition, the function calls itself, usually with a subset of the original problem. At this stage, you also decide which information to carry among the calling of the same functions.

When you calculate the factorial of a number, you can use a recursive function. Let's take the example of calculating the factorial of 4. The recursive case is when the function calls itself with the factorial of the previous number. So, to calculate the factorial of 4, the function will call itself with the factorial of 3, which will call itself with the factorial of 2, and so on until it reaches the base case. The base case is when the function input is zero. You can reach this case either when the user inputs zero directly or after a series of iterations in which the input number is gradually decreased. In this case, the function will stop calling itself and return the result.
