<script>
  import Skills from '$lib/skills.svelte'
</script>

<section>
  <div class="title">
    <h1 class="bg-gradient"><span class="typing"></span><span class="cursor">|</span>Developer</h1>
    <h2>Jared Keown</h2>
  </div>
  <a class="button" href="/projects">My Work</a>
  <Skills />
</section>

<style>
  section{
    min-height: 100vh;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(/images/profile-bg-trace.svg);
    background-repeat: no-repeat;    
    background-size: cover;
  }
  .title{
    min-width: 300px;
    /* min-width: 83vw; */
    /* min-width: 370px; */
  }
  h1{
    font-size: 2rem;
  }
  .button{
    padding: 10px 25px;
  }
  @media (min-width: 400px){
    h1{
    font-size: 2.5rem;
  }
  .title{
    min-width: 370px;
  }
  }
  @media (min-width: 700px){
    section{
    background-size: contain;
  }
  }
  .cursor{
    animation: blinking 1s linear infinite;
    color: var(--dark-gray);
  }
  .typing:before {
  content: "";
  animation: type-words 7.5s linear infinite;
  animation-fill-mode: forwards;
  background-image: var(--green-blue-gradient);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  letter-spacing: 2px;
}

@keyframes blinking{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes type-words {
  0% {
    content: "";
  }
  5% {
    content: "W";
  }
  10% {
    content: "We";
  }
  15% {
    content: "Web";
  }
  25% {
    content: "Web";
  }
  30% {
    content: "We";
  }
  35%{
    content: "W";
  }
  40% {
    content: "";
  }
  45% {
    content: " E";
  }
  50% {
    content: " Em";
  }
  55% {
    content: " Ema";
  }
  60% {
    content: " Emai";
  }
  65% {
    content: "Email";
  }
  75% {
    content: "Email";
  }
  80% {
    content: " Emai";
  }
  85% {
    content: " Ema";
  }
  90% {
    content: " Em";
  }
  95% {
    content: " E";
  }
  100% {
    content: "";
  }
}
</style>