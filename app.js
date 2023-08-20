// Copy Button for Contract Address
document.getElementById('caCopyIcon').addEventListener('click', function() {
	const textToCopy = document.getElementById('bitcoinCa').innerText;

	// Create a temporary element to hold the text
	const tempElement = document.createElement('textarea');
	tempElement.value = textToCopy;
	tempElement.setAttribute('readonly', ''); // Make it read-only to prevent keyboard from showing on mobile devices
	tempElement.style.position = 'absolute';
	tempElement.style.left = '-9999px'; // Move it off-screen
	document.body.appendChild(tempElement);
  
	// Select and copy the text
	tempElement.select();
	tempElement.setSelectionRange(0, 99999);

	// Use the modern Clipboard API to copy the selected text to clipboard
	if (navigator.clipboard) {
		navigator.clipboard.writeText(textToCopy)
		.then(() => {
		// Do something when the text is successfully copied
		console.log('Text copied to clipboard');
		})
		.catch((err) => {
			// Handle any errors that may occur during the copy process
			console.error('Error copying text to clipboard:', err);
		});
	} else {
		// Fallback for browsers that do not support the Clipboard API
		document.execCommand('copy');
	}

	// Clean up
	document.body.removeChild(tempElement);
});

// Buy Button
document.getElementById('buyBtn').addEventListener('click', function() {
	window.open('https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xe4eFDd2eb216A4620cfA55c5cC67Bd09DC64Ff24&use=V2', '_blank');
});

// Social Buttons
const twitterBtn = document.getElementById('twitterBtn');
const satoshiBtn = document.getElementById('satoshiBtn');
const telegramBtn1 = document.getElementById('telegramBtn1');
const telegramBtn2 = document.getElementById('telegramBtn2');
const dextools = document.getElementById('dextools');
const dexscreener = document.getElementById('dexscreener');
const trademarkTwitter = document.getElementById('trademarkTwitter');
twitterBtn.addEventListener('click', function () {
    window.open('https://twitter.com/basicbitcoineth', '_blank');
});
satoshiBtn.addEventListener('click', function () {
    window.open('https://etherscan.io/address/0x7a9d3ec77ef2f32016bb6a4c60479cc89c6a04d3', '_blank');
});
telegramBtn1.addEventListener('click', function () {
    window.open('https://t.me/BitcoinUpsideCommunity', '_blank');
});
telegramBtn2.addEventListener('click', function () {
    window.open('https://t.me/BitcoinUpside', '_blank');
});
dextools.addEventListener('click', function () {
    window.open('https://www.dextools.io/app/en/ether/pair-explorer/0x1d9992600d22d336e9ab9f0807989feb945aedce', '_blank');
});
dexscreener.addEventListener('click', function () {
    window.open('https://dexscreener.com/ethereum/0x1d9992600d22d336e9ab9f0807989feb945aedce', '_blank');
});
trademarkTwitter.addEventListener('click', function () {
    window.open('https://twitter.com/finisvisus', '_blank');
});

// Dollar Sign Background
const lightsContainer = document.querySelector(".lights");
function createLight() {
	const light = document.createElement("img");
	light.classList.add("light");
    light.style.position = "absolute";
	light.style.left = `${getRandomInt(window.innerWidth)}px`;
    light.src = "./metadata/bitcoinDollar_full.png";
    light.style.width = "25px";
    light.style.height = "auto";
	lightsContainer.appendChild(light);

	setTimeout(() => {
		light.remove();
	}, 8000);
}
setInterval(() => {
	createLight();
}, 500);
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
