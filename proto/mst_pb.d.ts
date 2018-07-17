// package: iroha.network.transport
// file: mst.proto

import * as jspb from "google-protobuf";
import * as block_pb from "./block_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Peer extends jspb.Message {
  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    pubkey: Uint8Array | string,
    address: string,
  }
}

export class MstState extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<block_pb.Transaction>;
  setTransactionsList(value: Array<block_pb.Transaction>): void;
  addTransactions(value?: block_pb.Transaction, index?: number): block_pb.Transaction;

  hasPeer(): boolean;
  clearPeer(): void;
  getPeer(): Peer | undefined;
  setPeer(value?: Peer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MstState.AsObject;
  static toObject(includeInstance: boolean, msg: MstState): MstState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MstState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MstState;
  static deserializeBinaryFromReader(message: MstState, reader: jspb.BinaryReader): MstState;
}

export namespace MstState {
  export type AsObject = {
    transactionsList: Array<block_pb.Transaction.AsObject>,
    peer?: Peer.AsObject,
  }
}

