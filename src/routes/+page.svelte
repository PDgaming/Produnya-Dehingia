<script lang="ts">
	import Navbar from './components/navbar.svelte';
	import resume from './Assets/Resume.pdf';
	import githubImg from './Assets/Image/github.png';
	import linkedinImg from './Assets/Image/linkedin.png';
	import logo from './Assets/Image/logo.png';
	import Marquee from './components/marquee.svelte';
</script>

<div class="main">
	<div class="header">
		<Navbar />
	</div>
	<div class="main-content">
		<div class="hero flex min-h-screen" id="home">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="hero-image">
					<img
						src={logo}
						class="max-w-sm rounded-lg shadow-2xl"
						width="400px"
						alt="Produnya Dehingia"
					/>
				</div>
				<div class="hero-blue">
					<h1 class="text-5xl font-bold">
						<small>Hi I'm</small>
						Produnya Dehingia
					</h1>
					<p class="py-6">
						A fullstack Developer from Assam who creates educational content on YouTube, and creates
						applications to help students with their daily life problems.
					</p>
					<div class="call-to-action">
						<a href={resume} class="btn btn-primary"> View Resume </a>
						<a href="mailto:produnyadehingia@gmail.com" class="btn btn-primary"> Contact Me </a>
					</div>
					<div class="social-links mt-1 flex">
						<a href="https://github.com/PDgaming">
							<img src={githubImg} alt="GitHub" width="48" />
						</a>
						<a href="/">
							<img src={linkedinImg} alt="LinkedIn" width="48" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<hr />
		<div class="marquee-section">
			<Marquee />
		</div>
		<hr />
		<div class="skills" id="skills">
			<div class="holder-blue">
				<div class="left-column">
					<h2 class="text-5xl">Skills</h2>
					<h3 class="text-3xl">Frontend</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Tailwind CSS</li>
						<li>JavaScript</li>
						<li>Typescript</li>
						<li>Svelte</li>
						<li>Svelte Kit</li>
						<li>React Native</li>
						<li>Expo</li>
						<li>Responsive Design</li>
						<li>Bootstrap</li>
						<li>Daisy UI</li>
					</ul>
					<h3 class="text-3xl">Backend</h3>
					<ul>
						<li>Node</li>
						<li>Supabase</li>
						<li>Firebase</li>
						<li>Neon DB</li>
						<li>SQL</li>
						<li>PostgreSQL</li>
						<li>Docker</li>
					</ul>
					<h3 class="text-3xl">Platforms</h3>
					<ul>
						<li>Web</li>
						<li>Docker</li>
						<li>Android</li>
					</ul>
					<h3 class="text-3xl">Programming Languages</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>Python</li>
						<li>C</li>
						<li>C++</li>
						<li>Go</li>
						<li>SQL</li>
						<li>PostgreSQL</li>
						<li>Java</li>
						<li>Svelte</li>
						<li>React Native</li>
					</ul>
				</div>
				<div class="right-column">
					<h2 class="text-5xl">A bit about me</h2>
					<p>
						Hi, I'm Produnya Dehingia, a fullstack Developer from Assam. I'm passionate about
						creating educational content on YouTube and developing applications that make a positive
						impact on students' daily lives.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		background: rgb(47, 1, 112);
		background: linear-gradient(
			180deg,
			rgba(47, 1, 112, 1) 0%,
			rgba(36, 9, 86, 1) 50%,
			rgba(17, 24, 40, 1) 100%
		);
	}
	.hero-blue {
		flex: 1;
		background-color: #374151;
		border-radius: 30px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.hero-image {
		background-color: #ffda4b;
		border-radius: 30px;
		padding: 0px 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hero-image img {
		margin-top: -60px;
		max-width: 420px;
		margin-bottom: -10px;
	}
	.holder-blue {
		background-color: var(--blue-100);
		border-radius: 30px;
		padding: 30px;
		display: flex;
		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
	.left-column ul {
		list-style-type: none;
		gap: 10px;
		margin-right: 100px;
		margin-bottom: 20px;
	}
	ul li {
		display: inline-block;
		background-color: #0a61ae;
		padding: 10px 20px;
		border-radius: 15px;
		margin-bottom: 10px;
		color: white;
	}
</style>
