<template>
	<div class="container">
		<accountbar />
		<navbar />
		<main>
			<herobar />
			<featuredbar />
		</main>
	</div>
</template>
<script>
	import featuredbar from '../components/featuredbar.vue';
	export default {
		components: { featuredbar }
	};
</script>
<style lang="scss" scoped>
	main {
		-ms-overflow-style: none;
		bottom: 0;
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
		left: 0;
		overflow: auto;
		position: fixed;
		right: 0;
		scrollbar-width: none;
		top: 115px;
		z-index: 99;
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
