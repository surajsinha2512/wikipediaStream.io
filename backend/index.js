const express=require('express');
const cors = require("cors");
const app=express();
app.use(express.json())
app.use(cors())
let userName=[];
let domain=[];
var EventSource = require('eventsource');
var url = 'https://stream.wikimedia.org/v2/stream/revision-create';

console.log(`Connecting to EventStreams at ${url}`);
var eventSource = new EventSource(url);

eventSource.onopen = function(event) {
    console.log('--- Opened connection.');
};

eventSource.onerror = function(event) {
    console.error('--- Encountered error', event);
};


eventSource.onmessage = function(event) {
    // event.data will be a JSON string containing the message event.
    //console.log(JSON.parse(event.data));
    userName=[...userName,JSON.parse(event.data)];
    domain=[...userName,JSON.parse(event.data)];
};

setInterval(()=>{
    userName=[];
    domain=[];
},60050)

app.get('/user',(req,res)=>{
res.set('Access-Control-Allow-Origin', '*');
console.log("/user End Point")
res.send({userName});
})

app.post('/',(req,res)=>{
    res.set('Access-Control-Allow-Origin','*');
})

app.get('/domain',(req,res)=>{
res.set('Access-Control-Allow-Origin', '*');
console.log("Domain End Point")
res.send({domain});
})

app.listen(9999);