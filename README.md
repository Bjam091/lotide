# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bjam091/lotide`

**Require it:**

`const _ = require('@bjam091/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertEqual`: assert that two values are equal
* `assertArraysEqual`: assert two arrays are equal
* `assertObjectsEqual`: assert two objects are equal
* `countLetters`: count the number of letters in a string
* `countOnly`: count the number of objects and return the number of them
* `eqArrays`: checks to see if two arrays are the same
* `eqObjects`: checks to see if two objects are the same
* `findKey`: finds the key of an object
* `findKeyByValue`: finds the key by using the values
* `flatten`: flatten nested arrays down to a signle array
* `head`: brings back the first object in an array
* `letterPositions`: returns the zero-based position in a string when a specific character is found
* `map`: returns a new array based on the results of the callback function
* `middle`: brings back the middle object in an array
* `takeUntil`: will return a slice of the array after it hits a specific value to stop
* `tail`: brings back everything but the first item in an array
* `withouts`: removes items from the first array, based on the specifications of the second array