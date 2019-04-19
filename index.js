import Client from 'ssh2-sftp-client';
const sftp = new Client();

sftp.connect({
  host: '',
  port: '',
  username: '',
  password: ''
}).then(() => {
  return sftp.list('/home/limliht/');
}).then((data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
    let filename = data[i].name;
    sftp.fastGet('/home/limliht/' + filename, __dirname + '/' + filename).then((file) => {
      console.log(file + 'is downloaded')
    });
  }
}).catch((err) => {
  console.log(err, 'catch error');
});


// What is missing?
// 1. aws s3 sdk to read private key from s3
// 2. aws s3 sdk to allow lambda save file to s3
