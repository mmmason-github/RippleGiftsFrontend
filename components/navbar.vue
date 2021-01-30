<template>
	<div>
		<button class="shiftleft">
			<svg
				aria-hidden="true"
				data-name="Icon"
				fill="rgba(255,255,255,0.95)"
				focusable="false"
				height="3rem"
				role="presentation"
				stroke="rgba(255,255,255,0.5)"
				viewBox="0 0 24 24"
				width="3rem"
			>
				<path
					d="M3.438 5.479h17.375v1.25H3.438zM3.438 11.104h17.375v1.25H3.438zM3.438 16.729h17.375v1.25H3.438z"
				/>
			</svg>
		</button>
		<h1>RippleGifts.</h1>
		<button class="shiftright">
			<svg
				aria-hidden="true"
				data-name="Icon"
				fill="rgba(255,255,255,0.95)"
				focusable="false"
				height="3rem"
				role="presentation"
				stroke="rgba(255,255,255,0.5)"
				viewBox="0 0 24 24"
				width="3rem"
			>
				<path
					d="M19.884 21.897a.601.601 0 0 1-.439.186h-15a.6.6 0 0 1-.439-.186.601.601 0 0 1-.186-.439v-15a.6.6 0 0 1 .186-.439.601.601 0 0 1 .439-.186h3.75c0-1.028.368-1.911 1.104-2.646.735-.735 1.618-1.104 2.646-1.104s1.911.368 2.646 1.104c.735.736 1.104 1.618 1.104 2.646h3.75a.6.6 0 0 1 .439.186.601.601 0 0 1 .186.439v15a.604.604 0 0 1-.186.439zM18.819 7.083h-3.125v2.5a.598.598 0 0 1-.186.439c-.124.124-.271.186-.439.186s-.315-.062-.439-.186a.6.6 0 0 1-.186-.439v-2.5h-5v2.5a.598.598 0 0 1-.186.439c-.124.124-.271.186-.439.186s-.315-.062-.439-.186a.6.6 0 0 1-.186-.439v-2.5H5.069v13.75h13.75V7.083zm-8.642-3.018a2.409 2.409 0 0 0-.733 1.768h5c0-.69-.244-1.279-.732-1.768s-1.077-.732-1.768-.732-1.279.244-1.767.732z"
				/>
			</svg>
		</button>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
	.shiftleft {
		transform: translateX(15%);
	}
	.shiftright {
		transform: translateX(-15%);
	}
	div {
		background-origin: 0;
		background: url('~assets/hero.jpg');
		border-bottom: 2px solid black;
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
		display: grid;
		grid-template-columns: 48px auto 48px;
		height: 80px;
		left: 0;
		position: fixed;
		right: 0;
		top: 30px;
		z-index: 100;
		button {
			align-self: center;
			background: none;
			border: none;
			height: 3rem;
			justify-self: center;
			margin: 0 auto;
			outline: none;
			width: 3rem;
		}
		h1 {
			align-self: center;
			color: white;
			font-family: 'Niconne', cursive;
			font-size: 4rem;
			@media only screen and (max-width: 425px) {
				font-size: 3.5rem;
			}
			@media only screen and (max-width: 375px) {
				font-size: 3rem;
			}
			@media only screen and (max-width: 375px) {
				font-size: 2.8rem;
			}
			font-weight: normal;
			justify-self: center;
		}
	}
</style>
