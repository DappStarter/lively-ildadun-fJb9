require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name regret ranch method good problem metal giant'; 
let testAccounts = [
"0x36a35af6c3c3aeb479d314df8243e5f98b596afccd1c1f7fda401769580d351b",
"0xe963b6b8831aa716f729d86820a9099e81f94aaad609d459bfc76c1709832cdc",
"0xd02fb6264765644b063aae629b661c127c58f16c32160ba5b839156666deffe0",
"0x56872a25fad603fdc3b3f89b26da262abb5b80723f312646234e7301057fa792",
"0x4ab30b78d6d65f5ebad87673c2e9b39aef19db3fc7c2e70d2ec8c5100c147169",
"0xf8f9755a1ad8ceec505b26ccfacaa6dd4dbe5734adf91d8e5aa0d3842cfbdf35",
"0x049630e12c704ff743cf920ef5e086827e98202b7399e305b219ad055ab43105",
"0x671361dfeb0e6518d9e7bc38c407fd2b1346bb41f544f9664ca3e93f779ca95f",
"0x649bd98979b841043263e9adf11c1ca55d2c378a2d7b996404420f9b42c8268a",
"0x49412ed069dd172e30b27e7b0575f47ec53d41f0d7b4157b516a239e4e0fb4a7"
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


