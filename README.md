<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# itercumaxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative maximum absolute value.

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
itercumaxabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumaxabs@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumaxabs@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.itercumaxabs;
})();
</script>
```

#### itercumaxabs( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative maximum absolute value.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumaxabs( arr );

var m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 3.0

m = it.next().value;
// returns 7.0

m = it.next().value;
// returns 7.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumaxabs@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative maximum absolute value:
var it = itercumaxabs( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'maxabs: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/iter/cumax`][@stdlib/stats/iter/cumax]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative maximum value.</span>
-   <span class="package-name">[`@stdlib/stats/iter/cuminabs`][@stdlib/stats/iter/cuminabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative minimum absolute value.</span>
-   <span class="package-name">[`@stdlib/stats/iter/maxabs`][@stdlib/stats/iter/maxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cumaxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cumaxabs

[test-image]: https://github.com/stdlib-js/stats-iter-cumaxabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-cumaxabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cumaxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cumaxabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cumaxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cumaxabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-cumaxabs/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-cumaxabs/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-cumaxabs/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cumaxabs/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cumax]: https://github.com/stdlib-js/stats-iter-cumax/tree/umd

[@stdlib/stats/iter/cuminabs]: https://github.com/stdlib-js/stats-iter-cuminabs/tree/umd

[@stdlib/stats/iter/maxabs]: https://github.com/stdlib-js/stats-iter-maxabs/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
