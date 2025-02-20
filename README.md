# Incorrect useState Hook Usage
This repository demonstrates a common error when using React's `useState` hook within nested functions.  The issue arises from how closures work with asynchronous updates in React.

## Problem
The `count` variable is not updated correctly, resulting in an unexpected increment behavior. The `incorrectIncrement` function uses the old value of count. 

## Solution
The solution involves ensuring that the `setCount` function always uses the latest value of the state variable. Using functional updates pattern can resolve this issue.