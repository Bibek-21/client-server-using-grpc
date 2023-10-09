const proto = require('google-proto-files');

const start = async()=>{
    const files = proto.getProtoPath('logging','v2');

    const loadPackage = await proto.load('./proto/simpleCrud.rpc.proto');
    const service1 = loadPackage.lookup('example.simpleCrud');
  console.log(service1);
}
start();