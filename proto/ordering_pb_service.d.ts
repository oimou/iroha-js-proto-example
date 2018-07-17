// package: iroha.ordering.proto
// file: ordering.proto

import * as ordering_pb from "./ordering_pb";
import * as block_pb from "./block_pb";
import * as proposal_pb from "./proposal_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "grpc-web-client";

type OrderingGateTransportGrpconProposal = {
  readonly methodName: string;
  readonly service: typeof OrderingGateTransportGrpc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proposal_pb.Proposal;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class OrderingGateTransportGrpc {
  static readonly serviceName: string;
  static readonly onProposal: OrderingGateTransportGrpconProposal;
}

type OrderingServiceTransportGrpconTransaction = {
  readonly methodName: string;
  readonly service: typeof OrderingServiceTransportGrpc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof block_pb.Transaction;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class OrderingServiceTransportGrpc {
  static readonly serviceName: string;
  static readonly onTransaction: OrderingServiceTransportGrpconTransaction;
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

export class OrderingGateTransportGrpcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  onProposal(
    requestMessage: proposal_pb.Proposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  onProposal(
    requestMessage: proposal_pb.Proposal,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
}

export class OrderingServiceTransportGrpcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  onTransaction(
    requestMessage: block_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
  onTransaction(
    requestMessage: block_pb.Transaction,
    callback: (error: ServiceError, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): void;
}

