const { Client } = require('ssh2');
const conn = new Client();
conn.on('ready', () => {
    console.log('Connected! Using interactive shell...');
    conn.shell((err, stream) => {
        if (err) throw err;
        stream.on('data', (data) => process.stdout.write(data.toString()));
        stream.on('close', () => conn.end());

        stream.write('DIR=$(find /var/www /home/halime -type f -name "package.json" -path "*/temizlik*" -exec dirname {} \\; 2>/dev/null | head -n 1)\n');
        stream.write('if [ -z "$DIR" ]; then DIR=$(find /var/www /home/halime -type f -name "package.json" -exec dirname {} \\; 2>/dev/null | head -n 1); fi\n');
        stream.write('if [ -n "$DIR" ]; then echo "Deploying to $DIR..."; cd "$DIR"; git config --global pull.rebase false; git pull origin main; npm install; npm run build; pm2 restart all; else echo "Not found!"; fi\n');
        stream.write('exit\n');
    });
}).on('error', (err) => {
    console.log('SSH Connection Error: ', err);
}).connect({
    host: '194.110.169.55',
    port: 22,
    username: 'halime',
    password: '212121q1q'
});
