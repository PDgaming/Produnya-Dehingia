<script>
	import * as Threlte from '@threlte/core';
	import * as Extra from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	Extra.interactivity();
	const scale = new Spring(1);
	let rotation = 0;
	Threlte.useTask((delta) => {
		rotation += delta;
	});
</script>

<Threlte.T.DirectionalLight position={[0, 10, 10]} castShadow />

<Threlte.T.PerspectiveCamera
	makeDefault
	position={[10, 10, 15]}
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
	rotation={[0, rotation, 0]}
/>

<Threlte.T.Mesh rotation.x={-Math.PI / 2} receiveShadow position.y={1} rotation.z={rotation}>
	<Threlte.T.BoxGeometry args={[15, 13, 0.1]} />
	<Threlte.T.MeshStandardMaterial color="white" />
</Threlte.T.Mesh>
