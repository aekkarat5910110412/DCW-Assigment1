const { connect } = require('http2')
var net = require('net')
var readline = require('readline')



var HOST = '127.0.0.1'
var PORT = 6969

var client = new net.Socket()
client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT)
    //client.write('sword')
});
//var keydata = window.prompt(" Enter Item : ");
//let data = prompt("Enter Item : ");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
client.on('r1', function(data) {
    
    
    //const readline = require('readline');
    //const data = readline.createInterface({
    //   input : process.stdin,
    //    output : process.stdout
    //});

    console.log('ServerGameData : ' + data)
    sendline()
    client.destroy()
});

client.on('close', function() {
    console.log('GAMEOVER!')
})

function sendline() {
    var line = r1.question('DataSent: ')
    if(line == 'GAMEOVER!') {
        client.end()
    }else {
        client.write(line)
    }
    r1.close();
}