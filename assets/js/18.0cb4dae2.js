(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{413:function(t,a,e){"use strict";e.r(a);var r=e(5),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"register-your-terra-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-your-terra-validator"}},[t._v("#")]),t._v(" Register your Terra validator")]),t._v(" "),e("p",[t._v("This is a detailed step-by-step guide for setting up a Terra validator. Please be aware that while it is easy to set up a rudimentary validating node, running a production-quality validator node with a robust architecture and security features requires an extensive setup.")]),t._v(" "),e("p",[t._v("For more information on setting up a validator, see "),e("RouterLink",{attrs:{to:"/How-to/Manage-a-Terra-validator/Overview.html#additional-resources"}},[t._v("additional resources")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("You have completed "),e("a",{attrs:{href:"https://docs.terra.money/How-to/Run-a-full-Terra-node/Hardware-requirements.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("how to run a full Terra node"),e("OutboundLink")],1),t._v(", which outlines how to install, connect, and configure a node.")]),t._v(" "),e("li",[t._v("You are familiar with "),e("RouterLink",{attrs:{to:"/Reference/terrad/"}},[t._v("terrad")]),t._v(".")],1),t._v(" "),e("li",[t._v("you have read through "),e("RouterLink",{attrs:{to:"/How-to/Manage-a-Terra-validator/faq.html"}},[t._v("the validator FAQ")])],1),t._v(" "),e("li",[t._v("Hardware requirements: see "),e("RouterLink",{attrs:{to:"/How-to/Run-a-full-Terra-node/Hardware-requirements.html"}},[t._v("requirements for running a full node")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"_1-retrieve-the-consensus-pubkey-of-your-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-retrieve-the-consensus-pubkey-of-your-node"}},[t._v("#")]),t._v(" 1. Retrieve the consensus PubKey of your node")]),t._v(" "),e("p",[t._v("The consensus PubKey ("),e("code",[t._v("terravalconspub-")]),t._v(") of your node is required to create a new validator. Run:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terrad tendermint show-validator\n")])])]),e("h2",{attrs:{id:"_2-create-a-new-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-new-validator"}},[t._v("#")]),t._v(" 2. Create a new validator")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Get tokens")]),t._v(" "),e("p",[t._v("In order for Terrad to recognize a wallet address it must contain tokens. For the testnet, use "),e("a",{attrs:{href:"https://faucet.terra.money/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the faucet"),e("OutboundLink")],1),t._v(" to send Luna to your wallet. If you are on mainnet, send funds from an existing wallet. 1-3 luna are sufficient for most setup processes.")])]),t._v(" "),e("p",[t._v("To create the validator and initialize it with a self-delegation, run the following command. "),e("code",[t._v("key-name")]),t._v(" is the name of the private key that is used to sign transactions.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terrad tx staking create-validator "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --amount"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("5000000uluna "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-consensus-PubKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --moniker"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-moniker>"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --commission-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.10"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --commission-max-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.20"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --commission-max-change-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.01"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --min-self-delegation"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Warning:")]),t._v(" "),e("p",[t._v("When you specify commission parameters, the "),e("code",[t._v("commission-max-change-rate")]),t._v(" is measured as a percentage-point change of the "),e("code",[t._v("commission-rate")]),t._v(". For example, a change from 1% to 2% is a 100% rate increase, but the "),e("code",[t._v("commission-max-change-rate")]),t._v(" is measured as 1%.")])]),t._v(" "),e("h2",{attrs:{id:"_3-confirm-your-validator-is-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-confirm-your-validator-is-active"}},[t._v("#")]),t._v(" 3. Confirm your validator is active")]),t._v(" "),e("p",[t._v("If running the following command returns something, the validator is active.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terrad query tendermint-validator-set "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("terrad tendermint show-validator"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),e("p",[t._v("You are looking for the "),e("code",[t._v("bech32")]),t._v(" encoded "),e("code",[t._v("address")]),t._v(" in the "),e("code",[t._v("~/.terra/config/priv_validator.json")]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Note:")]),t._v(" "),e("p",[t._v("Only the top 130 validators in voting power are included in the active validator set.")])])])}),[],!1,null,null,null);a.default=s.exports}}]);