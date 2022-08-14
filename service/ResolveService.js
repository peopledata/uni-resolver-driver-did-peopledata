'use strict';


/**
 * Resolve a DID or other identifier.
 *
 * identifier String A DID or other identifier to be resolved.
 * accept String The requested MIME type of the DID document or DID resolution result. (optional)
 * returns Object
 **/


exports.resolve = function(identifier,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['did:peopledata:123456789'] = {
      "@context": "https://www.w3.org/2019/did/v1",
      "id": "did:peopledata:123456789",
      "publicKey": [ {
        "id": "did:peopledata:123456789#key-1",
        "type": "Ed25519VerificationKey2018",
        "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
      } ]
    };
    examples['did:peopledata:5678'] = {
      "@context": "https://www.w3.org/2019/did/v1",
      "id" : "did:peopledata:5678",
      "publicKey" : [ {
        "id" : "did:peopledata:5678#key-1",
        "type" : "Ed25519VerificationKey2018",
        "publicKeyBase58": "EKmHWjiDDeMhEBs75uv86dC89zZ6yTTxEAHkYroJ7wZP"
      } ]
    };
    examples['did:peopledata:1234'] = {
      "@context": "https://www.w3.org/2019/did/v1",
      "id" : "did:peopledata:1234",
      "publicKey" : [ {
        "id" : "did:peopledata:1234#key1",
        "type" : "Ed25519VerificationKey2019",
        "publicKeyBase58" : "H3C2AVvLMv6gmMsdduVAjZpfkcJCwDwnZn6z3wXmqPs"
      } ]
    };
    var found = examples[identifier];
    if (found) {
      resolve(found);
    } else {
      resolve(404);
    }
  });
}

