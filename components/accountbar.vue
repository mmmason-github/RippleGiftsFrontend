<template>
	<div>
		<p>Login</p>
		<p>Create Account</p>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss" scoped>
	div {
		align-items: center;
		background: black;
		color: white;
		column-gap: 1rem;
		display: grid;
		grid-template-columns: repeat(2, max-content);
		height: 30px;
		justify-content: flex-end;
		left: 0;
		padding-right: 16px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 101;
		p {
			font-weight: bold;
			text-decoration: underline;
			text-transform: uppercase;
		}
	}
</style>
