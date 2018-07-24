import { grpc } from "grpc-web-client";
var ed25519 = require('ed25519.js')

import { GetAccount, Query, QueryPayloadMeta } from "../proto/queries_pb";
import { Signature } from "../proto/primitive_pb";
import { QueryServiceClient } from "../proto/endpoint_pb_service";

const date = Date.now();

let accountRequest = new GetAccount();
accountRequest.setAccountId("admin@test");

let meta = new QueryPayloadMeta();
meta.setCreatorAccountId("admin@test")
meta.setCreatedTime(date)
meta.setQueryCounter(1)

let payload = new Query.Payload();
payload.setGetAccount(accountRequest)
payload.setMeta(meta)

let query = new Query();
query.setPayload(payload)

var adminPriv =
  '0f0ce16d2afbb8eca23c7d8c2724f0c257a800ee2bbd54688cec6b898e3f7e33'
var adminPub =
  '889f6b881e331be21487db77dcf32c5f8d3d5e8066e78d2feac4239fe91d416f'

var sign = ed25519.sign(Buffer.from(payload.serializeBinary()), Buffer.from(adminPub, 'hex'), Buffer.from(adminPriv, 'hex'))

var s = new Signature()
s.setPubkey(Buffer.from(adminPub, 'hex'))
s.setSignature(sign)

query.setSignature(s)

const queryClient = new QueryServiceClient(
  'http://localhost:8080',
)

queryClient.find(query, (err, response) => {
  console.log(JSON.stringify(response))
})
