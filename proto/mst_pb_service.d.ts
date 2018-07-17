// package: iroha.network.transport
// file: mst.proto

import * as mst_pb from "./mst_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "grpc-web-client";

type MstTransportGrpcSendState = {
  readonly methodName: string;
  readonly service: typeof MstTransportGrpc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mst_pb.MstState;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class MstTransportGrpc {
  static readonly serviceName: string;
  static readonly SendState: MstTransportGrpcSendState;
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

export class MstTransportGrpcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  sendState(
    requestMessage: mst_pb.MstState,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  sendState(
    requestMessage: mst_pb.MstState,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
}

