<template>
	<div class="griditem">
		<img src="~assets/productone.jpg" alt="" />
		<h1>Watch</h1>
		<h2>$100.00</h2>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss" scoped>
	div.griditem {
		display: grid;
		grid-template-rows: auto repeat(2, min-content);
		height: 100%;
		width: 100%;
		img {
			height: auto;
			width: 100%;
		}
		h1,
		h2 {
			font-weight: normal;
			text-align: center;
		}
	}
</style>
