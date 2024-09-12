<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# writeDataView

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy elements from an input strided array to elements in a strided [`DataView`][@stdlib/array/dataview].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import writeDataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-write-dataview@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-write-dataview@esm/index.mjs';
```

#### writeDataView( N, x, strideX, view, strideView, littleEndian )

Copies elements from an input strided array to elements in a strided [`DataView`][@stdlib/array/dataview].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import DataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs';

var x = [ 1.0, 2.0, 3.0, 4.0 ];

var buf = new ArrayBuffer( 32 );
var view = new DataView( buf );

var out = writeDataView( 4, x, 1, view, 8, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 0, true );
// returns 1.0

v = view.getFloat64( 8, true );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input strided array.
-   **strideX**: index increment for `x`.
-   **view**: output [`DataView`][@stdlib/array/dataview].
-   **strideView**: index increment (in bytes) for `y`.
-   **littleEndian**: boolean indicating whether to store values in little-endian format.

The `N` and stride parameters determine which elements in `x` and `view` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import DataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs';

var x = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ];

var buf = new ArrayBuffer( 64 );
var view = new DataView( buf );

var out = writeDataView( 4, x, 2, view, -8, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 0, true );
// returns 4.0

v = view.getFloat64( 8, true );
// returns 3.0
```

Note that indexing is relative to the first index. To introduce an offset, use typed array views.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import DataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial array:
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create an offset view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Create an output DataView:
var buf = new ArrayBuffer( 64 );
var view = new DataView( buf );

var out = writeDataView( 4, x1, 1, view, 8, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat32( 0, true );
// returns 2.0

v = view.getFloat32( 8, true );
// returns 3.0
```

#### writeDataView.ndarray( N, x, strideX, offsetX, view, strideView, offsetView, littleEndian )

Copies elements from an input strided array to elements in a strided [`DataView`][@stdlib/array/dataview] using alternative indexing semantics.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import DataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs';

var x = [ 1.0, 2.0, 3.0, 4.0 ];

var buf = new ArrayBuffer( 32 );
var view = new DataView( buf );

var out = writeDataView.ndarray( 4, x, 1, 0, view, 8, 0, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 0, true );
// returns 1.0
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetView**: starting index (in bytes) for `view`.

While typed array views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `view` in reverse order,

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import DataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs';

var x = [ 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0 ];

var buf = new ArrayBuffer( 64 );
var view = new DataView( buf );

var out = writeDataView.ndarray( 4, x, 2, 1, view, -8, 56, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 32, true );
// returns 4.0

v = view.getFloat64( 40, true );
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import DataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs';
import typedarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-typed@esm/index.mjs';
import bytesPerElement from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import IS_LITTLE_ENDIAN from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import writeDataView from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-write-dataview@esm/index.mjs';

// Specify the array data type:
var dtype = 'float64';

// Resolve the number of bytes per element:
var nbytes = bytesPerElement( dtype );

// Generate an array of random numbers:
var x = discreteUniform( 10, 0, 100, {
    'dtype': dtype
});

// Create a DataView:
var buf = new ArrayBuffer( x.length*nbytes );
var view = new DataView( buf );

// Copy the numbers to the DataView:
writeDataView( x.length, x, 1, view, nbytes, IS_LITTLE_ENDIAN );

// Create a view of the DataView:
var y = typedarray( view.buffer, dtype );

// Print the results:
logEach( '%d -> %d', x, y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-write-dataview.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-write-dataview

[test-image]: https://github.com/stdlib-js/strided-base-write-dataview/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-write-dataview/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-write-dataview/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-write-dataview?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-write-dataview.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-write-dataview/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-write-dataview/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-write-dataview/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-write-dataview/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-write-dataview/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-write-dataview/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-write-dataview/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-write-dataview/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-write-dataview/main/LICENSE

[@stdlib/array/dataview]: https://github.com/stdlib-js/array-dataview/tree/esm

</section>

<!-- /.links -->
