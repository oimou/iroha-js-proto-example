// package: iroha.network.proto
// file: loader.proto

import * as loader_pb from "./loader_pb";
import * as block_pb from "./block_pb";
import {grpc} from "grpc-web-client";

type LoaderretrieveBlocks = {
  readonly methodName: string;
  readonly service: typeof Loader;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof loader_pb.BlocksRequest;
  readonly responseType: typeof block_pb.Block;
};

type LoaderretrieveBlock = {
  readonly methodName: string;
  readonly service: typeof Loader;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof loader_pb.BlockRequest;
  readonly responseType: typeof block_pb.Block;
};

export class Loader {
  static readonly serviceName: string;
  static readonly retrieveBlocks: LoaderretrieveBlocks;
  static readonly retrieveBlock: LoaderretrieveBlock;
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

export class LoaderClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  retrieveBlocks(requestMessage: loader_pb.BlocksRequest, metadata?: grpc.Metadata): ResponseStream<block_pb.Block>;
  retrieveBlock(
    requestMessage: loader_pb.BlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: block_pb.Block|null) => void
  ): void;
  retrieveBlock(
    requestMessage: loader_pb.BlockRequest,
    callback: (error: ServiceError, responseMessage: block_pb.Block|null) => void
  ): void;
}

