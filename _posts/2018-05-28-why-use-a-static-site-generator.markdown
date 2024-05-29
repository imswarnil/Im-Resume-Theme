---
layout: post
title: "My First Post"
date: 2024-05-22
image: "https://via.placeholder.com/600x400"
permalink : /post
sidebar : true
---
{% include utility/codeHeader.html %}
```
function test() {
  console.log("notice the blank line before this function?");
}
```

{% include utility/codeHeader.html %}
```
fun test() {
    println("notice the blank line before this function?")
}

fun add(a: Int, b: Int): Int {
    return a + b
}

fun multiply(a: Int, b: Int): Int {
    return a * b
}

fun main() {
    test()
    println(add(3, 5))
    println(multiply(4, 7))

    for (i in 0 until 5) {
        println("Iteration $i")
    }

    val greeter = Greeter("World")
    greeter.greet()
}

class Greeter(private val name: String) {
    fun greet() {
        println("Hello, $name")
    }
}
```
# Welcome to My First Post




Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt vestibulum ligula, eu tempor nunc fermentum eget. Nullam varius risus vel nulla vehicula, quis placerat nisi bibendum. Integer vitae sodales odio.

## Section 1

Suspendisse potenti. Nunc scelerisque bibendum metus, sed sodales purus interdum at. Nulla facilisi. Proin a ligula nec nisi consequat ultricies.

## Section 2

Vivamus fermentum tincidunt augue, eget dignissim lorem tincidunt nec. Mauris ut dui sit amet justo ultricies commodo.

![Placeholder Image](https://via.placeholder.com/600x400)
