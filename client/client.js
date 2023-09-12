"use strict";
const grpc = require('@grpc/grpc-js');
const protoLoader= require('@grpc/proto-loader');
const dotenv= require('dotenv');

(()=>{
    const protoPath= `./../common/proto/simpleCrud.rpc.proto`
    const envPath=`${__dirname}/.env`
    dotenv.config({path:envPath})
    const portFromGrpc= process.env.PORTFROMGRPC;

    const packageDefinition = protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: 'string',
        defaults: true,
      })

      const simpleProto = grpc.loadPackageDefinition(packageDefinition)


      const SimpleCrudService = simpleProto.example.simpleCrud.rpc.SimpleCrudService;
    
      const client = new SimpleCrudService(
          `localhost:${portFromGrpc}`,
          grpc.credentials.createInsecure()
      );

      module.exports=client

})();