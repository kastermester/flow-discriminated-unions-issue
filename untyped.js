/**
 * @flow
 */

import * as a from './ast';

export function generateTypedNode() : a.TypedNode {
	return {
		exprNodeType: 'number',
		value: 10,
		exprType: 'number',
		typed: true,
		pos: {
			firstLine: 1,
			firstColumn: 0,
			lastLine: 1,
			lastColumn: 2,
		},
	};
}
