# GraphJS

GraphJS is a super basic repository that allow you to make basic graphs

## Getting Started

Let's go

### Prerequisites

What things you need to install the software and how to install them

```
Basic knowledge of JavaScript
```

### Installing

Download 'GraphsJS - compressed'

Add import of JS to your project
```
<script src="GraphJS - compressed.js" type="text/javascript"></script>
```

If you would you can download also the test.html for test GraphJS

### Sintax

Sintax of class Graph

```
new Graph("id of canvas", data (as object array), true (for now only true), false (lagless), 'rgba(255,0,0,1)' (color cart[X, Y]), 1 (opacity cart[X, Y]), 'rgba(255,0,0,1)' (color bg), 0.25 (opacity bg), 'rgba(30,76,255,1)' (color line), 1.5 (opacity line));
```

All colors and opacity are not essentials

### Resize of canvas

In test.html i used css to modify size of canvas, like this:

```
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

Important! Remove margin of window and set its height to 100%

```
html, body {
  height: 100%;
  margin: 0;
}
```

## License

This project is free for all
