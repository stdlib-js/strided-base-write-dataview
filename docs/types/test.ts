/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import writeDataView = require( './index' );


// TESTS //

// The function returns a DataView...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView( x.length, x, 1, y, 1, true ); // $ExpectType DataView
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView( '10', x, 1, y, 1, true ); // $ExpectError
	writeDataView( true, x, 1, y, 1, true ); // $ExpectError
	writeDataView( false, x, 1, y, 1, true ); // $ExpectError
	writeDataView( null, x, 1, y, 1, true ); // $ExpectError
	writeDataView( undefined, x, 1, y, 1, true ); // $ExpectError
	writeDataView( [], x, 1, y, 1, true ); // $ExpectError
	writeDataView( {}, x, 1, y, 1, true ); // $ExpectError
	writeDataView( ( x: number ): number => x, x, 1, y, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView( x.length, 10, 1, y, 1, true ); // $ExpectError
	writeDataView( x.length, true, 1, y, 1, true ); // $ExpectError
	writeDataView( x.length, false, 1, y, 1, true ); // $ExpectError
	writeDataView( x.length, null, 1, y, 1, true ); // $ExpectError
	writeDataView( x.length, undefined, 1, y, 1, true ); // $ExpectError
	writeDataView( x.length, {}, 1, y, 1, true ); // $ExpectError
	writeDataView( x.length, ( x: number ): number => x, 1, y, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView( x.length, x, '10', y, 1, true ); // $ExpectError
	writeDataView( x.length, x, true, y, 1, true ); // $ExpectError
	writeDataView( x.length, x, false, y, 1, true ); // $ExpectError
	writeDataView( x.length, x, null, y, 1, true ); // $ExpectError
	writeDataView( x.length, x, undefined, y, 1, true ); // $ExpectError
	writeDataView( x.length, x, [], y, 1, true ); // $ExpectError
	writeDataView( x.length, x, {}, y, 1, true ); // $ExpectError
	writeDataView( x.length, x, ( x: number ): number => x, y, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a DataView...
{
	const x = new Float32Array( 10 );

	writeDataView( x.length, x, 1, 10, 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, '10', 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, true, 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, false, 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, null, 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, undefined, 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, [ '1' ], 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, {}, 1, true ); // $ExpectError
	writeDataView( x.length, x, 1, ( x: number ): number => x, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView( x.length, x, 1, y, '10', true ); // $ExpectError
	writeDataView( x.length, x, 1, y, true, true ); // $ExpectError
	writeDataView( x.length, x, 1, y, false, true ); // $ExpectError
	writeDataView( x.length, x, 1, y, null, true ); // $ExpectError
	writeDataView( x.length, x, 1, y, undefined, true ); // $ExpectError
	writeDataView( x.length, x, 1, y, [], true ); // $ExpectError
	writeDataView( x.length, x, 1, y, {}, true ); // $ExpectError
	writeDataView( x.length, x, 1, y, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a boolean...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView( x.length, x, 1, y, 1, '10' ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, 0 ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, null ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, undefined ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, [] ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, {} ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView(); // $ExpectError
	writeDataView( x.length ); // $ExpectError
	writeDataView( x.length, x ); // $ExpectError
	writeDataView( x.length, x, 1 ); // $ExpectError
	writeDataView( x.length, x, 1, y ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1 ); // $ExpectError
	writeDataView( x.length, x, 1, y, 1, true, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a DataView...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectType DataView
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( '10', x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( true, x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( false, x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( null, x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( undefined, x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( [], x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( {}, x, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, 10, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, true, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, false, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, null, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, undefined, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, {}, 1, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, x, '10', 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, true, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, false, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, null, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, undefined, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, [], 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, {}, 0, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, x, 1, '10', y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, true, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, false, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, null, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, undefined, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, [], y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, {}, y, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a DataView...
{
	const x = new Float32Array( 10 );

	writeDataView.ndarray( x.length, x, 1, 0, 10, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, '10', 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, true, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, false, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, null, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, undefined, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, {}, 1, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, x, 1, 0, y, '10', 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, true, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, false, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, null, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, undefined, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, [], 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, {}, 0, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, x, 1, 0, y, 1, '10', true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, true, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, false, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, null, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, undefined, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, [], true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, {}, true ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a boolean...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new DataView( new ArrayBuffer( 100 ) );

	writeDataView.ndarray(); // $ExpectError
	writeDataView.ndarray( x.length ); // $ExpectError
	writeDataView.ndarray( x.length, x ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1 ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0 ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	writeDataView.ndarray( x.length, x, 1, 0, y, 1, 0, true, 10 ); // $ExpectError
}
