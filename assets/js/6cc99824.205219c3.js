"use strict";(self.webpackChunkapollo_docs=self.webpackChunkapollo_docs||[]).push([[892],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3564:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],c={},i="Schema Examples",l={unversionedId:"schema/schema-examples",id:"schema/schema-examples",title:"Schema Examples",description:"Here you can find some example schemas to get you started.",source:"@site/docs/schema/schema-examples.md",sourceDirName:"schema",slug:"/schema/schema-examples",permalink:"/apollo-docs/schema/schema-examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/apollo-docs/schema/intro"}},u={},p=[{value:"Events",id:"events",level:2},{value:"ETH-USDC swap price vs. mid price",id:"eth-usdc-swap-price-vs-mid-price",level:3},{value:"Record every ERC20 transfer, and parse the value",id:"record-every-erc20-transfer-and-parse-the-value",level:3},{value:"Methods",id:"methods",level:2},{value:"Calculate the mid price of a Uniswap V2 pool",id:"calculate-the-mid-price-of-a-uniswap-v2-pool",level:3},{value:"Get your USDC balance over a period of time",id:"get-your-usdc-balance-over-a-period-of-time",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"schema-examples"},"Schema Examples"),(0,s.kt)("p",null,"Here you can find some example schemas to get you started."),(0,s.kt)("h2",{id:"events"},"Events"),(0,s.kt)("h3",{id:"eth-usdc-swap-price-vs-mid-price"},"ETH-USDC swap price vs. mid price"),(0,s.kt)("p",null,"This example gets the swap price of every Swap event on the ETH-USDC\nSushiswap pool. It also fetches the reserves at the previous block, to\ncalculate the mid price before the swap. Note that events are at the transaction level,\nwhile calling methods is at the block level (the state we get is the state at the end\nof the target block)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'contract usdc_to_eth_swaps "0x905dfCD5649217c42684f23958568e533C711Aa3" {\n  abi = "unipair.abi.json"\n  // Listen for events\n  event Swap {\n    // The outputs we\'re interested in, same way as with methods.\n    outputs = ["amount1In", "amount0Out", "amount0In", "amount1Out"]\n\n    method getReserves {\n      // Call at the previous block\n      block_offset = -1\n      // These are the outputs we\'re interested in. They are available \n      // to transform as variables in the "save" block below. Outputs should\n      // be provided as a list.\n      outputs = ["_reserve0", "_reserve1"]\n    }\n  }\n\n  // Besides the normal context, the "save" block for events provides an additional\n  // variable "tx_hash".\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    tx_hash = tx_hash\n\n    eth_reserve = parse_decimals(_reserve0, 18)\n    usdc_reserve = parse_decimals(_reserve1, 6)\n    mid_price = parse_decimals(_reserve1, 6) / parse_decimals(_reserve0, 18)\n\n    // Example: we want to calculate the price of the swap.\n    // We have to make sure we don\'t divide by 0, so we use the ternary operator.\n    price = amount0Out != 0 ? (parse_decimals(amount1In, 6) / parse_decimals(amount0Out, 18)) : (parse_decimals(amount1Out, 6) / parse_decimals(amount0In, 18))\n    dir = amount0Out != 0 ? upper("buy") : upper("sell")\n    size = amount1In != 0 ? parse_decimals(amount1In, 6) : parse_decimals(amount1Out, 6)\n  }\n}\n')),(0,s.kt)("h3",{id:"record-every-erc20-transfer-and-parse-the-value"},"Record every ERC20 transfer, and parse the value"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'event Transfer {\n  abi = "erc20.abi.json"\n\n  // The outputs we\'re interested in, same way as with methods.\n  outputs = ["from", "to", "value"]\n\n  method decimals {\n    outputs = ["decimals"]\n  }\n\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    tx_hash = tx_hash\n\n    sender = from\n    receiver = to\n    value = parse_decimals(value, decimals)\n  }\n}\n')),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"calculate-the-mid-price-of-a-uniswap-v2-pool"},"Calculate the mid price of a Uniswap V2 pool"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'contract usdc_eth_reserves "0x905dfCD5649217c42684f23958568e533C711Aa3" {\n  abi = "unipair.abi.json"\n\n  // Call methods\n  method getReserves {\n    // These are the outputs we\'re interested in. They are available \n    // to transform as variables in the "save" block below. Outputs should\n    // be provided as a list.\n    outputs = ["_reserve0", "_reserve1"]\n  }\n\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    eth_reserve = parse_decimals(_reserve0, 18)\n    usdc_reserve = parse_decimals(_reserve1, 6)\n\n    // Example: we want to calculate the mid price from the 2 reserves.\n    // Cannot reuse variables that are defined in the same "save" block.\n    // We have to reuse variables that were defined in advance, i.e.\n    // in "inputs" or "outputs"\n    mid_price = parse_decimals(_reserve1, 6) / parse_decimals(_reserve0, 18)\n  }\n}\n')),(0,s.kt)("h3",{id:"get-your-usdc-balance-over-a-period-of-time"},"Get your USDC balance over a period of time"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'contract usdc_balance "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8" {\n  abi = "erc20.abi.json"\n\n  method balanceOf {\n    // Inputs should be defined as a map.\n    inputs = {\n      address = "0xe1Dd30fecAb8a63105F2C035B084BfC6Ca5B1493"\n    }\n\n    outputs = ["balance"]\n  }\n\n  save {\n    account = address\n    account_balance = parse_decimals(balance, 18)\n  }\n}\n')))}m.isMDXComponent=!0}}]);