![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver for PeopleData

This is an [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for PeopleData **did:peopledata** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## Example DIDs

```
did:peopledata:0000000000123456
did:peopledata:0000000000456789
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t peopledata.org.cn/uni-resolver-driver-did-example
docker run -p 8080:8080 peopledata.org.cn/uni-resolver-driver-did-example
curl -X GET http://localhost:8080/1.0/identifiers/did:example:0000000000123456
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniresolver_driver_did_peopledata_Setting`

 * A setting for the driver.
 * Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `exampleMetadata`: Example metadata
