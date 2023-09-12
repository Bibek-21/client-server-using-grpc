"use strict";
const grpc = require('@grpc/grpc-js');
const protoLoader= require('@grpc/proto-loader');
const dotenv= require('dotenv');

(()=>{
    const portFromGrpc= process.env.PORTFROMGRPC;
    dotenv.config({path:'./.env'})
    const packageDefinition = protoLoader.loadSync('./proto/simpleCrud.rpc.proto', {
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