// package: iroha.consensus.yac.proto
// file: yac.proto

import * as yac_pb from "./yac_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "grpc-web-client";

type YacSendVote = {
  readonly methodName: string;
  readonly service: typeof Yac;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof yac_pb.Vote;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type YacSendCommit = {
  readonly methodName: string;
  readonly service: typeof Yac;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof yac_pb.Commit;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type YacSendReject = {
  readonly methodName: string;
  readonly service: typeof Yac;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof yac_pb.Reject;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class Yac {
  static readonly serviceName: string;
  static readonly SendVote: YacSendVote;
  static readonly SendCommit: YacSendCommit;
  static readonly SendReject: YacSendReject;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class YacClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  sendVote(
    requestMessage: yac_pb.Vote,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  sendVote(
    requestMessage: yac_pb.Vote,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  sendCommit(
    requestMessage: yac_pb.Commit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  sendCommit(
    requestMessage: yac_pb.Commit,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  sendReject(
    requestMessage: yac_pb.Reject,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  sendReject(
    requestMessage: yac_pb.Reject,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
}

