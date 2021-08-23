# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bloomfieldj/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(array1, array2): asserts the equality of two arrays

* assertEqual(element1, element2): asserts the equality of two elements

* assertObjectsEqual(object1, object2): asserts the equality of two objects
 
* countLetters(string): counts each occurence of a letter in a string

* countOnly(array, itemToCount): counts the number of occurences of an item in an array

* eqArrays(array1, array2): checks the equality of two arrays

* eqObjects(object1, object2): checks the equality of two objects

* findKey(object, callback): finds the key of a nested object 

* findKeyByValue(object, value): returns the key associated with a specified value in an object

* head(array): returns the first element of an array

* letterPositions(string): returns the positions of a letter in a string

* map(array, callback): creates a new array with the results of a function called on the input array

* middle(array): returns the middle elements of an array

* tail(array): returns the last element of an array

* takeUntil(array, callback): creates a new array with the each element of the initial array until a specified value has been encountered

* without(array, itemToRemove): returns a new array without the specified element
