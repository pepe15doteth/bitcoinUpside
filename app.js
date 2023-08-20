// Bitcoin ERC20 Token ABI 
const B_ERC20_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_maxTxAmount",
				"type": "uint256"
			}
		],
		"name": "MaxTxAmountUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_maxTaxSwap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_maxTxAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_maxWalletSize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_taxSwapThreshold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "bots_",
				"type": "address[]"
			}
		],
		"name": "addBots",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "notbot",
				"type": "address[]"
			}
		],
		"name": "delBots",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "isBot",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openTrading",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "removeLimits",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

document.addEventListener('DOMContentLoaded', function () {
    const donateBtn = document.getElementById('donateBtn');
    const donationAmountBitcoinInput = document.getElementById('donationAmountBitcoin');
    const donationAmountEthInput = document.getElementById('donationAmountEth');

    donateBtn.addEventListener('click', async function () {
        // Check if Web3 is available
        if (typeof web3 !== 'undefined') {
            // Use the injected provider (e.g., Metamask)
            web3 = new Web3(web3.currentProvider);

            try {
                // Request access to the user's accounts
                const accounts = await web3.eth.requestAccounts();
                const userAddress = accounts[0]; // User's Ethereum address

                const donationRecipient = '0x19453329D1a6C9812331c76B06e8437C3AAeeF0e'; // Donation address finisus.eth

                let txHash;

                if (donationAmountBitcoinInput.value) {
                    const tokenAddressBitcoin = '0xe4eFDd2eb216A4620cfA55c5cC67Bd09DC64Ff24'; // Bitcoin token address
                    const tokenContractBitcoin = new web3.eth.Contract(B_ERC20_ABI, tokenAddressBitcoin);
                    const donationAmountBitcoin = web3.utils.toBN(donationAmountBitcoinInput.value).mul(web3.utils.toBN(10 ** 9));
                    txHash = await tokenContractBitcoin.methods.transfer(donationRecipient, donationAmountBitcoin).send({
                        from: userAddress,
                    });
                }

                if (donationAmountEthInput.value) {
                    const donationAmountEth = web3.utils.toWei(donationAmountEthInput.value, 'ether');
                    txHash = await web3.eth.sendTransaction({
                        from: userAddress,
                        to: donationRecipient,
                        value: donationAmountEth,
                    });
                }

                if (txHash) {
                    alert('Donation sent, Arigato <3');
                }
            } catch (error) {
                alert('Error while processing donation: ' + error.message);
            }
        } else {
            alert('Web3 is not available. Please install Metamask or another Ethereum wallet extension.');
        }
    });
});

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
const telegramBtn3 = document.getElementById('telegramBtn3');
const dextools = document.getElementById('dextools');
const dexscreener = document.getElementById('dexscreener');
const trademarkTwitter = document.getElementById('trademarkTwitter');
twitterBtn.addEventListener('click', function () {
    window.open('https://twitter.com/BitcoinSVupside', '_blank');
});
satoshiBtn.addEventListener('click', function () {
    window.open('https://etherscan.io/address/0x7a9d3ec77ef2f32016bb6a4c60479cc89c6a04d3', '_blank');
});
telegramBtn1.addEventListener('click', function () {
    window.open('https://t.me/BitcoinUpsideCommunity', '_blank');
});
telegramBtn2.addEventListener('click', function () {
    window.open('https://t.me/BitcoinUpsideCommunityCN', '_blank');
});
telegramBtn3.addEventListener('click', function () {
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
const emailBtn = document.getElementById('emailBtn');
emailBtn.addEventListener('click', function () {
    const recipientEmail = 'team@bitcoinupside.cash';
    const subject = encodeURIComponent('Contact Us');
    const body = encodeURIComponent('Hello ₿ Bitcoin Upside Community Team,\n\nI have a question:');

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
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