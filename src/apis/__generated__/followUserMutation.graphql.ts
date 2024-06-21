/**
 * @generated SignedSource<<b40b5a5313ef2369db7d2deea993f32e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type followUserMutation$variables = Record<PropertyKey, never>;
export type followUserMutation$data = {
  readonly followUser: {
    readonly followerCount: number;
    readonly followingCount: number;
    readonly id: string;
  };
};
export type followUserMutation = {
  response: followUserMutation$data;
  variables: followUserMutation$variables;
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
    "name": "followUser",
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
    "storageKey": "followUser(followingId:2)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "followUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "followUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7dc72f76b8f6cee8943b4aefa23a4223",
    "id": null,
    "metadata": {},
    "name": "followUserMutation",
    "operationKind": "mutation",
    "text": "mutation followUserMutation {\n  followUser(followingId: 2) {\n    id\n    followingCount\n    followerCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5155b86e0818f42c24661ad142f61a4";

export default node;
