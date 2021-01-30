<template>
	<div>
		<div class="hero" />
		<h1>Shop</h1>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
	div {
		position: relative;
		height: 90%;
		width: 100%;
		div.hero {
			background-image: url('~assets/hero.jpg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			height: 100%;
			width: 100%;
		}
		h1 {
			font-family: 'Niconne', cursive;
			color: white;
			cursor: pointer;
			font-weight: normal;
			font-size: 3rem;
			left: 7%;
			position: absolute;
			text-decoration: underline;
			top: 30%;
		}
	}
</style>
