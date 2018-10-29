---
id: ownership_AssetGovernance_DB
title: DB
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">interface</span> DB</h2><div class="source">Source: <a href="https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.1.9/contracts/ownership/AssetGovernance.sol" target="_blank">ownership/AssetGovernance.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="ownership_AssetGovernance_DB.html#addressStorage">addressStorage</a></li><li><a href="ownership_AssetGovernance_DB.html#setUint">setUint</a></li><li><a href="ownership_AssetGovernance_DB.html#uintStorage">uintStorage</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="addressStorage" class="anchor-marker"></span><h4 class="name">addressStorage</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>addressStorage</strong><span>(bytes32 _key) </span><span>external </span><span>view </span><span>returns  (address) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_key</code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>address</dd></dl></div></div></li><li><div class="item function"><span id="setUint" class="anchor-marker"></span><h4 class="name">setUint</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>setUint</strong><span>(bytes32 _key, uint _value) </span><span>external </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_key</code> - bytes32</div><div><code>_value</code> - uint</div></dd></dl></div></div></li><li><div class="item function"><span id="uintStorage" class="anchor-marker"></span><h4 class="name">uintStorage</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>uintStorage</strong><span>(bytes32 _key) </span><span>external </span><span>view </span><span>returns  (uint) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_key</code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint</dd></dl></div></div></li></ul></div></div></div>