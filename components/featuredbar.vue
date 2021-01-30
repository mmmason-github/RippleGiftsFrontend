<template>
	<div>
		<h1>Featured Products</h1>
		<div class="grid">
			<productcard />
			<productcard />
			<productcard />
			<productcard />
			<productcard />
			<productcard />
			<productcard />
		</div>
	</div>
</template>
<script>
	import productcard from './productcard.vue';
	export default {
		components: { productcard }
	};
</script>
<style lang="scss" scoped>
	div {
		@media only screen and (min-width: 1280px) {
			width: 95%;
		}
		@media only screen and (min-width: 1415px) {
			width: 90%;
		}
		@media only screen and (min-width: 1580px) {
			width: 85%;
		}
		@media only screen and (min-width: 1770px) {
			width: 80%;
		}

		@media only screen and (min-width: 2000px) {
			width: 75%;
		}
		@media only screen and (min-width: 2275px) {
			width: 70%;
		}
		margin: 0 auto;
		h1 {
			font-size: 3rem;
			font-style: italic;
			font-weight: normal;
			margin: 2rem 0;
			text-align: center;
		}
		div.grid {
			display: grid;
			grid-template-columns: repeat(
				auto-fit,
				minmax(320px, 1fr)
			);
		}
	}
</style>
