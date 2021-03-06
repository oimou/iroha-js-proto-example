/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var primitive_pb = require('./primitive_pb.js');
var transaction_pb = require('./transaction_pb.js');
goog.exportSymbol('proto.iroha.protocol.Block', null, global);
goog.exportSymbol('proto.iroha.protocol.Block.Payload', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Block.repeatedFields_, null);
};
goog.inherits(proto.iroha.protocol.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Block.displayName = 'proto.iroha.protocol.Block';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iroha.protocol.Block.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.iroha.protocol.Block.Payload.toObject(includeInstance, f),
    signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    primitive_pb.Signature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Block}
 */
proto.iroha.protocol.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block;
  return proto.iroha.protocol.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Block}
 */
proto.iroha.protocol.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iroha.protocol.Block.Payload;
      reader.readMessage(value,proto.iroha.protocol.Block.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = new primitive_pb.Signature;
      reader.readMessage(value,primitive_pb.Signature.deserializeBinaryFromReader);
      msg.addSignatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iroha.protocol.Block.Payload.serializeBinaryToWriter
    );
  }
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      primitive_pb.Signature.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Block.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Block.Payload.repeatedFields_, null);
};
goog.inherits(proto.iroha.protocol.Block.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Block.Payload.displayName = 'proto.iroha.protocol.Block.Payload';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iroha.protocol.Block.Payload.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Block.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Block.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Block.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    transaction_pb.Transaction.toObject, includeInstance),
    txNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    prevBlockHash: msg.getPrevBlockHash_asB64(),
    createdTime: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Block.Payload}
 */
proto.iroha.protocol.Block.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block.Payload;
  return proto.iroha.protocol.Block.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Block.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Block.Payload}
 */
proto.iroha.protocol.Block.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new transaction_pb.Transaction;
      reader.readMessage(value,transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrevBlockHash(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Block.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Block.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getTxNumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPrevBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getCreatedTime();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array<!proto.iroha.protocol.Transaction>}
 */
proto.iroha.protocol.Block.Payload.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.iroha.protocol.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 1));
};


/** @param {!Array<!proto.iroha.protocol.Transaction>} value */
proto.iroha.protocol.Block.Payload.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iroha.protocol.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iroha.protocol.Transaction}
 */
proto.iroha.protocol.Block.Payload.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Transaction, opt_index);
};


proto.iroha.protocol.Block.Payload.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * optional uint32 tx_number = 2;
 * @return {number}
 */
proto.iroha.protocol.Block.Payload.prototype.getTxNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.iroha.protocol.Block.Payload.prototype.setTxNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.iroha.protocol.Block.Payload.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.iroha.protocol.Block.Payload.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes prev_block_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.iroha.protocol.Block.Payload.prototype.getPrevBlockHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes prev_block_hash = 5;
 * This is a type-conversion wrapper around `getPrevBlockHash()`
 * @return {string}
 */
proto.iroha.protocol.Block.Payload.prototype.getPrevBlockHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrevBlockHash()));
};


/**
 * optional bytes prev_block_hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrevBlockHash()`
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Block.Payload.prototype.getPrevBlockHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrevBlockHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iroha.protocol.Block.Payload.prototype.setPrevBlockHash = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint64 created_time = 6;
 * @return {number}
 */
proto.iroha.protocol.Block.Payload.prototype.getCreatedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.iroha.protocol.Block.Payload.prototype.setCreatedTime = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Payload payload = 1;
 * @return {?proto.iroha.protocol.Block.Payload}
 */
proto.iroha.protocol.Block.prototype.getPayload = function() {
  return /** @type{?proto.iroha.protocol.Block.Payload} */ (
    jspb.Message.getWrapperField(this, proto.iroha.protocol.Block.Payload, 1));
};


/** @param {?proto.iroha.protocol.Block.Payload|undefined} value */
proto.iroha.protocol.Block.prototype.setPayload = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.iroha.protocol.Block.prototype.clearPayload = function() {
  this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iroha.protocol.Block.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Signature signatures = 2;
 * @return {!Array<!proto.iroha.protocol.Signature>}
 */
proto.iroha.protocol.Block.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.iroha.protocol.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, primitive_pb.Signature, 2));
};


/** @param {!Array<!proto.iroha.protocol.Signature>} value */
proto.iroha.protocol.Block.prototype.setSignaturesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.iroha.protocol.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iroha.protocol.Signature}
 */
proto.iroha.protocol.Block.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iroha.protocol.Signature, opt_index);
};


proto.iroha.protocol.Block.prototype.clearSignaturesList = function() {
  this.setSignaturesList([]);
};


goog.object.extend(exports, proto.iroha.protocol);
