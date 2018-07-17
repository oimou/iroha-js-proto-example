import { grpc } from "grpc-web-client";

import { GetAccount } from "../proto/queries_pb.d";

const accountRequest = new GetAccount();
accountRequest.setAccountId("admin@test");
