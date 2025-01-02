<script lang="ts">
	import htmlImg from '../Assets/Image/html.png';
	import cssImg from '../Assets/Image/css.png';
	import javascriptImg from '../Assets/Image/javascript.png';
	import vscodeImg from '../Assets/Image/vscode.png';
	import pythonImg from '../Assets/Image/python.png';
	import bootstrapImg from '../Assets/Image/bootstrap.png';
	import firebaseImg from '../Assets/Image/firebase.png';
	import nodeImg from '../Assets/Image/node.png';
	import supabaseImg from '../Assets/Image/supabase.png';
	import svelteImg from '../Assets/Image/svelte.png';

	let imageWidth = '80px';
</script>

<section class="logos container">
	<div class="marquee">
		<div class="track">
			<img src={htmlImg} alt="HTML" width={imageWidth} />
			<img src={cssImg} alt="CSS" width={imageWidth} />
			<img src={javascriptImg} alt="JS" width={imageWidth} />
			<img src={vscodeImg} width={imageWidth} alt="VS Code" />
			<img src={pythonImg} width={imageWidth} alt="Python" />
			<img src={bootstrapImg} width={imageWidth} alt="Bootstrap" />
			<img src={firebaseImg} width={imageWidth} alt="Firebase" />
			<img src={nodeImg} width={imageWidth} alt="Node" />
			<img src={supabaseImg} width={imageWidth} alt="Supabase" />
			<img src={svelteImg} width={imageWidth} height="128" alt="Svelte" />

			<img src={htmlImg} alt="HTML" width={imageWidth} />
			<img src={cssImg} alt="CSS" width={imageWidth} />
			<img src={javascriptImg} alt="JS" width={imageWidth} />
			<img src={vscodeImg} width={imageWidth} alt="VS Code" />
			<img src={pythonImg} width={imageWidth} alt="Python" />
			<img src={bootstrapImg} width={imageWidth} alt="Bootstrap" />
			<img src={firebaseImg} width={imageWidth} alt="Firebase" />
			<img src={nodeImg} width={imageWidth} alt="Node" />
			<img src={supabaseImg} width={imageWidth} alt="Supabase" />
			<img src={svelteImg} width={imageWidth} alt="Svelte" />

			<img src={htmlImg} alt="HTML" width={imageWidth} />
			<img src={cssImg} alt="CSS" width={imageWidth} />
			<img src={javascriptImg} alt="JS" width={imageWidth} />
			<img src={vscodeImg} width={imageWidth} alt="VS Code" />
			<img src={pythonImg} width={imageWidth} alt="Python" />
			<img src={bootstrapImg} width={imageWidth} alt="Bootstrap" />
			<img src={firebaseImg} width={imageWidth} alt="Firebase" />
			<img src={nodeImg} width={imageWidth} alt="Node" />
			<img src={supabaseImg} width={imageWidth} alt="Supabase" />
			<img src={svelteImg} width={imageWidth} alt="Svelte" />
		</div>
	</div>
</section>

<style>
	.logos {
		border-radius: 30px;
		padding: 30px 0px;
		@media (max-width: 1440px) {
			border-radius: 0px;
		}
	}
	.marquee {
		width: 100vw;
		max-width: 100%;
		height: 100px;
		overflow: hidden;
		position: relative;
	}
	.track {
		position: absolute;
		white-space: nowrap;
		will-change: transform;
		animation: marquee 30s linear infinite;
		display: flex;
		gap: 10px;
	}
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
