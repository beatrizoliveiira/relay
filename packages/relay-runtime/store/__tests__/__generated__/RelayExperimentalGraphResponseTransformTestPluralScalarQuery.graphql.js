/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<07e524ed88117c3786955e60a0329ce7>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type RelayExperimentalGraphResponseTransformTestPluralScalarQuery$variables = {||};
export type RelayExperimentalGraphResponseTransformTestPluralScalarQueryVariables = RelayExperimentalGraphResponseTransformTestPluralScalarQuery$variables;
export type RelayExperimentalGraphResponseTransformTestPluralScalarQuery$data = {|
  +me: ?{|
    +emailAddresses: ?$ReadOnlyArray<?string>,
  |},
|};
export type RelayExperimentalGraphResponseTransformTestPluralScalarQueryResponse = RelayExperimentalGraphResponseTransformTestPluralScalarQuery$data;
export type RelayExperimentalGraphResponseTransformTestPluralScalarQuery = {|
  variables: RelayExperimentalGraphResponseTransformTestPluralScalarQueryVariables,
  response: RelayExperimentalGraphResponseTransformTestPluralScalarQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emailAddresses",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayExperimentalGraphResponseTransformTestPluralScalarQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayExperimentalGraphResponseTransformTestPluralScalarQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e88a65a20d7faf61c73ed592eb27c02a",
    "id": null,
    "metadata": {},
    "name": "RelayExperimentalGraphResponseTransformTestPluralScalarQuery",
    "operationKind": "query",
    "text": "query RelayExperimentalGraphResponseTransformTestPluralScalarQuery {\n  me {\n    emailAddresses\n    id\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "cc42b530536583b2d3577d5fcd8d651e";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayExperimentalGraphResponseTransformTestPluralScalarQuery$variables,
  RelayExperimentalGraphResponseTransformTestPluralScalarQuery$data,
>*/);
