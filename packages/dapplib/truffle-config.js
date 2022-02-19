require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food charge rifle tape public gown light army gauge'; 
let testAccounts = [
"0xb403d2688914574b6a400014a0feb3a183e1a22289de49dcaf8755040ccba96c",
"0x76ff4c07b72d867abc12e422e32a03f62ba19d70ebb7592d2acfbfe305af29ec",
"0x834b302e57b9ada2867c0a5ff352164bd26a7400a43deffc03310c4cff6869b4",
"0xa2818094a70656e3e1d1769594aaa1bfd9a65cb51626d80fa5fc3b5f82e0b1f2",
"0xb3988981c63d9e265727cc9dc174b6b5dab222cb89491e4e6dfc7dcfcf8ed913",
"0x5cf624b39e8434de150121db024099fa4ccf1b66f393991b98cca1871f5a64c1",
"0x20ee25274d55f86e558f1bac7d57124518b5cb9f02f908e6a3a2afbb16aa24c1",
"0x783e1f93861fec713f5e8d3be6ee5819bba458bdf10694e13a0044fee36211f9",
"0x80f5d0ff022a8044c5b7dcc04b40e5a80580d143d50ec7b5bd67142d0a38cc46",
"0xa027a857a0aae3011ac62ca6068b0ffa47ae0d90230681753e054cc5d13aa278"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


