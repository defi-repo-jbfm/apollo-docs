"use strict";(self.webpackChunkapollo_docs=self.webpackChunkapollo_docs||[]).push([[892],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3564:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),o=["components"],i={},l="Schema examples",c={unversionedId:"schema/schema-examples",id:"schema/schema-examples",title:"Schema examples",description:"Here you can find some example schemas to get you started.",source:"@site/docs/schema/schema-examples.md",sourceDirName:"schema",slug:"/schema/schema-examples",permalink:"/schema/schema-examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced features",permalink:"/schema/advanced-features"}},u={},p=[{value:"Events",id:"events",level:2},{value:"Uniswap V2 ETH-USDC swap price vs. mid price",id:"uniswap-v2-eth-usdc-swap-price-vs-mid-price",level:3},{value:"Per-swap fees on Uniswap V3",id:"per-swap-fees-on-uniswap-v3",level:3},{value:"Record every ERC20 transfer on Ethereum and Arbitrum",id:"record-every-erc20-transfer-on-ethereum-and-arbitrum",level:3},{value:"Methods",id:"methods",level:2},{value:"Mid price of Uniswap V2 pools",id:"mid-price-of-uniswap-v2-pools",level:3},{value:"Query token balance",id:"query-token-balance",level:3},{value:"Query native balance",id:"query-native-balance",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"schema-examples"},"Schema examples"),(0,s.kt)("p",null,"Here you can find some example schemas to get you started."),(0,s.kt)("h2",{id:"events"},"Events"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When filtering events, ",(0,s.kt)("strong",{parentName:"p"},"start")," and ",(0,s.kt)("strong",{parentName:"p"},"end")," parameters are required. These schema's could start with"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'start_time = format_date("02-01-2006 15:04", "01-05-2022 00:00")\nend_time = format_date("02-01-2006 15:04", "31-05-2022 00:00")\n')),(0,s.kt)("p",{parentName:"div"},"or "),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},"start_block = 13400000\nend_block = 13500000\n")))),(0,s.kt)("h3",{id:"uniswap-v2-eth-usdc-swap-price-vs-mid-price"},"Uniswap V2 ETH-USDC swap price vs. mid price"),(0,s.kt)("p",null,"This example gets the swap price of every Swap event on the ETH-USDC\nSushiswap pool. It also fetches the reserves at the previous block, to\ncalculate the mid price before the swap. Note that events are at the transaction level,\nwhile calling methods is at the block level (the state we get is the state at the end\nof the target block)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'// query defines the name of your query -> name of your output files and SQL tables\nquery usdc_eth_swaps {\n  chain = "arbitrum"\n\n  contract {\n    // specify the contract address\n    address = "0x905dfCD5649217c42684f23958568e533C711Aa3" \n    // contract needs an ABI\n    abi = "unipair.abi.json"\n\n    // Listen for events\n    event Swap {\n      // The outputs we\'re interested in, same way as with methods.\n      outputs = ["amount1In", "amount0Out", "amount0In", "amount1Out"]\n\n      // We can call methods on the occurence of the Swap event\n      method getReserves {\n        // Call at the previous block\n        block_offset = -1\n        // These are the outputs we\'re interested in. They are available \n        // to transform as variables in the "transform" block below. Outputs should\n        // be provided as a list.\n        outputs = ["_reserve0", "_reserve1"]\n      }\n    }\n\n    // "transform" blocks are at the contract-level,\n    // they allow you to do some preliminary cleaning of the outputs\n    // before moving on.\n    transform {\n      eth_reserve = parse_decimals(_reserve0, 18)\n      usdc_reserve = parse_decimals(_reserve1, 6)\n\n      usdc_sold = parse_decimals(amount1In, 6)\n      eth_sold = parse_decimals(amount0In, 18)\n\n      usdc_bought = parse_decimals(amount1Out, 6)\n      eth_bought = parse_decimals(amount0Out, 18)\n\n      buy = amount0Out != 0\n    }\n  }\n\n  // Besides the normal context, the "save" block for events provides an additional\n  // variable "tx_hash". "save" blocks are at the query-level and have access to variables\n  // defined in the "transform" block\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    tx_hash = tx_hash\n\n    eth_reserve = eth_reserve\n    usdc_reserve = usdc_reserve\n    mid_price = usdc_reserve / eth_reserve\n\n    // Example: we want to calculate the price of the swap.\n    // We have to make sure we don\'t divide by 0, so we use the ternary operator.\n    swap_price = eth_bought != 0 ? (usdc_sold / eth_bought) : (usdc_bought / eth_sold)\n    direction = buy ? b : s\n    size_in_udsc = eth_bought != 0 ? usdc_sold : usdc_bought\n  }\n}\n')),(0,s.kt)("h3",{id:"per-swap-fees-on-uniswap-v3"},"Per-swap fees on Uniswap V3"),(0,s.kt)("p",null,"In this example we calculate every swap fee in USDC on the Uniswap V3 WETH-USDC pool (0.3% fee tier).\nWe do this on Ethereum mainnet. We also note whether the swap bought of sold ETH."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query "usdc_eth_fees_3000" {\n  chain = "ethereum"\n\n  contract {\n    address = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8" \n    abi = "uni_v3_pool.abi.json"\n\n    event "Swap" {\n      outputs = ["sender", "recipient", "amount0", "amount1", "liquidity", "tick"]\n    }\n\n    transform {\n      eth_amount = parse_decimals(amount1, 18)\n      usdc_amount = parse_decimals(amount0, 6)\n    }\n  }\n\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    tx = tx_hash\n\n    eth_amount = eth_amount\n    usdc_amount = usdc_amount\n    liquidity = liquidity\n    tick = tick\n\n    sender = sender\n    recipient = recipient\n\n    // Calculate the swap fee in USDC (0.3% fee tier)\n    lp_fee = abs(0.003 * usdc_amount)\n\n    type = eth_amount < 0 ? "ETH_SELL" : "ETH_BUY"\n  }\n}\n')),(0,s.kt)("h3",{id:"record-every-erc20-transfer-on-ethereum-and-arbitrum"},"Record every ERC20 transfer on Ethereum and Arbitrum"),(0,s.kt)("p",null,"This is an example of where a loop would come in handy. We also call ",(0,s.kt)("inlineCode",{parentName:"p"},"decimals()")," on the contract\nbecause we want to save the parsed value, and we filter out ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," values. Note that in this case\nit's recommended to save the ",(0,s.kt)("inlineCode",{parentName:"p"},"chain"),", since you otherwise won't be able to determine on which chain the\ntransfer took place."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'loop {\n  items = ["arbitrum", "ethereum"]\n\n  query arbi_eth_transfers {\n    chain = item\n\n    event Transfer {\n      abi = "erc20.abi.json"\n\n      outputs = ["from", "to", "value"]\n\n      method decimals {\n        outputs = ["decimals"]\n      }\n\n      transform {\n        value = parse_decimals(value, decimals)\n      }\n    }\n\n    filter = [\n      value != 0\n    ]\n\n    save {\n      chain = chain\n      block = blocknumber\n      timestamp = timestamp\n      tx_hash = tx_hash\n\n      from = from\n      to = to\n      value = value\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When calling methods, an ",(0,s.kt)("strong",{parentName:"p"},"interval"),", along with ",(0,s.kt)("strong",{parentName:"p"},"start")," and ",(0,s.kt)("strong",{parentName:"p"},"end")," parameters is mandatory, otherwise\n",(0,s.kt)("inlineCode",{parentName:"p"},"apollo")," won't know when to call the methods. An example start of the following schema's would be"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'start_time = format_date("02-01-2006 15:04", "01-06-2022 16:10")\nend_time = now\n// Call method every 30s. This will be converted to an estimated block interval.\ntime_interval = 30\n')),(0,s.kt)("p",{parentName:"div"},"or"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},"start_block = 13400000\nend_block = 13500000\n// Call every 100 blocks.\nblock_interval = 100\n")))),(0,s.kt)("h3",{id:"mid-price-of-uniswap-v2-pools"},"Mid price of Uniswap V2 pools"),(0,s.kt)("p",null,"This example shows you how to calculate the mid price of a Uniswap V2 pool using the reserves.\nWe do this for the WETH-USDC pool on Arbitrum."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query usdc_eth_mid_price {\n  chain = "arbitrum"\n\n  contract {\n    address = "0x905dfCD5649217c42684f23958568e533C711Aa3" \n    abi = "unipair.abi.json"\n\n    // Call methods\n    method getReserves {\n      // These are the outputs we\'re interested in. They are available \n      // to transform as variables in the "save" block below. Outputs should\n      // be provided as a list.\n      outputs = ["_reserve0", "_reserve1"]\n    }\n\n\n    transform {\n      eth_reserve = parse_decimals(_reserve0, 18)\n      usdc_reserve = parse_decimals(_reserve1, 6)\n    }\n  }\n\n  save {\n    block = blocknumber\n    timestamp = timestamp\n    mid_price = usdc_reserve / eth_reserve\n  }\n}\n')),(0,s.kt)("h3",{id:"query-token-balance"},"Query token balance"),(0,s.kt)("p",null,"In this example we first define some variabels for later use, and then query our USDC balance\non Ethereum mainnet. The custom function ",(0,s.kt)("inlineCode",{parentName:"p"},"token_balance(owner, token)")," returns the parsed balance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'// Define variables for later use\nvariables = {\n  owner = "0xDeAdB33F"\n  usdc = "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"\n}\n\nquery usdc_balance {\n  chain = "ethereum"\n\n  // Previous blocks are optional, we can just skip straight to the save block\n  save {\n    block = blocknumber\n    time = timestamp\n    account = owner\n    // Custom helper function which returns the parsed ERC20 balance\n    account_balance = token_balance(owner, usdc)\n  }\n}\n')),(0,s.kt)("h3",{id:"query-native-balance"},"Query native balance"),(0,s.kt)("p",null,"If you want to query your native balance on a specific chain, let's say ",(0,s.kt)("inlineCode",{parentName:"p"},"avax"),", you would use the\n",(0,s.kt)("inlineCode",{parentName:"p"},"balance(owner)")," helper function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query avax_balance {\n  chain = "avax"\n\n  save {\n    block = blocknumber\n    time = timestamp\n\n    account_balance = balance("0xDeAdB33F")\n  }\n}\n')))}d.isMDXComponent=!0}}]);