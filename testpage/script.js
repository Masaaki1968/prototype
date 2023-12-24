document.addEventListener('DOMContentLoaded', function() {
    liff.init({ liffId: "YOUR_LIFF_ID" }).then(() => {
        initializeApp();
    }).catch(err => {
        console.error('LIFF Initialization failed', err);
    });
});

function initializeApp() {
    if (!liff.isLoggedIn()) {
        liff.login();
    }

    const buttonContainer = document.getElementById('button-container');
    for (let row of ['a', 'b', 'c']) {
        for (let i = 1; i <= 7; i++) {
            const button = document.createElement('button');
            button.classList.add('button');
            button.textContent = row + i;
            button.onclick = () => sendText(button.textContent);
            buttonContainer.appendChild(button);
        }
    }
}

function sendText(text) {
    if (!liff.isInClient()) {
        alert('This feature is available only in the LINE app.');
        return;
    }

    liff.sendMessages([{
        type: 'text',
        text: text
    }]).then(() => {
        console.log('Message sent');
    }).catch(err => {
        console.error('Send message failed', err);
    });
}
