const express = require('express');
const dotenv = require('dotenv')
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')


const envPath = `${__dirname}/.env`
dotenv.config({ path: envPath })
app = express();
app.use(express.json())
const port = process.env.PORT;

const dirname = `${__dirname}`
const testpath = `./../common/proto/simpleCrud.rpc.proto`

const protoPath = `${dirname}/${testpath}`


const packageDefinition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: 'string',
  defaults: true,
})

const server = new grpc.Server()


const simpleProto = grpc.loadPackageDefinition(packageDefinition)

const simpleServiceA = require('./controllers/index');

server.addService(simpleProto.example.simpleCrud.rpc.simpleCrudService.service, {
  create: simpleServiceA.createStudents,
  read: simpleServiceA.readStudents,
  readAll: simpleServiceA.readAllStudents,
  update: simpleServiceA.updateStudents,
  delete: simpleServiceA.deleteStudents
})

server.bindAsync(
  `${process.env.GRPC_HOST}:${port}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      server.start();
    }
  }
);
