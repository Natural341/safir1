const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
    console.log('Connected to server. Requesting interactive shell...');
    conn.shell((err, stream) => {
        if (err) {
            console.error('Shell error:', err);
            return conn.end();
        }

        stream.on('data', (data) => {
            process.stdout.write(data.toString());
        });

        stream.on('close', () => {
            console.log('\nShell closed.');
            conn.end();
        });

        // We can chain commands. Send them all at once or one by one.
        // Since we want to exit after it's done, we can just send the command string with exit.
        const cmdList = [
            'echo "Finding project directory..."',
            'cd /var/www/temizlik || cd /var/www/safir-temizlik-nextjs || cd /var/www/html/temizlik || cd /home/halime/temizlik',
            'pwd',
            'echo "Pulling latest code..."',
            'git pull origin main',
            'echo "Installing dependencies..."',
            'npm install',
            'echo "Building project..."',
            'npm run build',
            'echo "Restarting service..."',
            'pm2 restart all',
            'echo "Deploy finished."',
            'exit'
        ];

        stream.write(cmdList.join(' && ') + '\n');
    });
});

conn.on('error', (err) => {
    console.error('Connection error:', err);
});

conn.connect({
    host: '194.110.169.55',
    port: 22,
    username: 'halime',
    password: '212121q1q'
});
