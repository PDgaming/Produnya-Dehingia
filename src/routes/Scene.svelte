<script>
	import * as Threlte from '@threlte/core';
	import * as Extra from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	const scale = new Spring(1);
	let rotation = 0;

	Extra.interactivity();
	Threlte.useTask((delta) => {
		rotation += delta;
	});
</script>

<Threlte.T.DirectionalLight position={[0, 8.5, -7.5]} castShadow intensity={5} />
<Threlte.T.DirectionalLight position={[7.5, 8.5, 0]} castShadow intensity={2} />

<Threlte.T.PerspectiveCamera
	makeDefault
	position={[9, 11, -11]}
	oncreate={(ref) => {
		ref.lookAt(0, 4, 0);
	}}
>
	<Extra.OrbitControls />
</Threlte.T.PerspectiveCamera>

<Extra.GLTF
	url="modals/man_working_on_laptop.glb"
	position.y={1.1}
	args={[0.5, 0.5, 0.5]}
	castShadow
/>

<Threlte.T.Mesh rotation.x={-Math.PI / 2} receiveShadow position.y={1}>
	<Threlte.T.BoxGeometry args={[15, 15, 0.1]} />
	<Threlte.T.MeshStandardMaterial color="white" />
</Threlte.T.Mesh>
