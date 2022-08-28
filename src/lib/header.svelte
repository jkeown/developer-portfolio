<script>
  import { page } from '$app/stores'

 let navOpen = false

 const toggleMobileNav = () => navOpen = !navOpen
</script>

<header class:temporary-z-index = {$page.path == '/landing-pages/chat-app'} class:nav-open={navOpen} class:email-header = {$page.path === `/email/${$page.path.substring(7)}`}>
  <div class="logo">
    <a href="/" >
      <img class="logo" src="/images/logo.svg" alt="jared keown logo">
    </a>
  </div>
  <button class="nav-toggle" aria-label="toggle navigation" on:click={toggleMobileNav}>
    <span class="hamburger"></span>
  </button>
  <!-- {#if $page.path === `/email/${$page.path.substring(7)}`}
  <a style="color: var(--dark-green);text-decoration: none; padding-right: 25px;" href="/projects">Back to Projects Page</a>
  {/if} -->
  <nav class="mobile-nav">
    <a class:active = {$page.path === '/'} href="/" on:click={toggleMobileNav}>Home</a>
    <a class:active = {$page.path === '/projects'} href="/projects" on:click={toggleMobileNav}>Projects</a>
    <a class:active = {$page.path === '/contact'} href="/contact" on:click={toggleMobileNav}>Contact</a>
  </nav>
</header>


<style>
  header{
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
  }
  .logo {
    height: 50px;
}
.logo a img:hover{
    text-decoration: none !important;
}
.nav-toggle {
  padding: 0.5em;
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1000;
}
.hamburger {
  display: block;
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  background: var(--dark-blue);
  width: 2rem;
  height: 5px;
  border-radius: 1rem;
  transition: transform 250ms ease-in-out;
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
}

.hamburger::before {
  top: 8px;
}
.hamburger::after {
  bottom: 8px;
}
.mobile-nav {
background-image: var(--green-blue-gradient);
flex-direction: column;
justify-content: space-evenly;
align-items: center;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 100;

transform: translateX(100vw);
transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
}
.mobile-nav a{
  color: var(--light-gray);
  font-size: 2rem;
}
a:hover {
border-bottom: 2px solid var(--dark-green);
}
.email-header{
  position: sticky;
  top: 0;
  margin-bottom: 1rem;
  background-color: var(--light-gray);
  box-shadow: var(--border-shadow-bottom);
}
@media (min-width: 600px){
  .nav-toggle{
    display: none;
  }
.mobile-nav{
  width: 250px;
  position: static;
  transform: translateX(0);
  background-image: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: initial;
}
.mobile-nav a{
color: var(--dark-gray);
font-size: initial;
}
}

/* mobile nav open */
.nav-open .mobile-nav {
  transform: translateX(0);
}

.nav-open .nav-toggle {
  position: fixed;
}

.nav-open .hamburger {
  background: var(--light-gray);
  transform: rotate(0.625turn);
}

.nav-open .hamburger::before {
  background: var(--light-gray);
  transform: rotate(90deg) translateX(-8px);
}

.nav-open .hamburger::after {
  background: var(--light-gray);
  opacity: 0;
}

.temporary-z-index{
  z-index: 10;
}
</style>