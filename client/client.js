"use strict";
const grpc = require('@grpc/grpc-js');
const protoLoader= require('@grpc/proto-loader');
const dotenv= require('dotenv');
const path= require('path');

(()=>{


    const filePath =`${__dirname}`
    const testPath= `./../common/proto/simpleCrud.rpc.proto`
    const protoPath= `${filePath}/${testPath}`
    const envPath=`${__dirname}/.env`
    dotenv.config({path:envPath})
    const portFromGrpc= process.env.PORTFROMGRPC;

    const packageDefinition = protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: 'string',
        defaults: true,
      })

      const protoDefinition = grpc.loadPackageDefinition(packageDefinition)


      const SimpleCrudService = protoDefinition.example.simpleCrud.rpc.simpleCrudService;
    
      const client = new SimpleCrudService(
          `localhost:3000`,
          grpc.credentials.createInsecure()
      );

      module.exports=client

})();