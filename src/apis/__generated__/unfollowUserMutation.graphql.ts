/**
 * @generated SignedSource<<6e4cdc77180f57af20f422ab723cb3db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type unfollowUserMutation$variables = Record<PropertyKey, never>;
export type unfollowUserMutation$data = {
  readonly unfollowUser: {
    readonly followerCount: number;
    readonly followingCount: number;
    readonly id: string;
  };
};
export type unfollowUserMutation = {
  response: unfollowUserMutation$data;
  variables: unfollowUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "followingId",
        "value": 2
      }
    ],
    "concreteType": "FollowResponseDTO",
    "kind": "LinkedField",
    "name": "unfollowUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "followingCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "followerCount",
        "storageKey": null
      }
    ],
    "storageKey": "unfollowUser(followingId:2)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "unfollowUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "unfollowUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dc1687ea6be45fed87624711a51614d7",
    "id": null,
    "metadata": {},
    "name": "unfollowUserMutation",
    "operationKind": "mutation",
    "text": "mutation unfollowUserMutation {\n  unfollowUser(followingId: 2) {\n    id\n    followingCount\n    followerCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "889195c5825907fa299552a11d8ee92c";

export default node;
