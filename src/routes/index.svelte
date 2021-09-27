<script>
  import Skills from '$lib/skills.svelte'
</script>

<section>
  <div class="title">
    <h1 class="bg-gradient">Web<sup>^<span>and Email</span></sup>Developer</h1>
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
  
  h1{
    font-size: 2rem;
  }
  h1 sup{
    color: var(--dark-gray);
    font-size: 1.25rem;

  }
  h1 span{
    position: absolute;
    font-family: cursive;
    font-size: 1.5rem;
    transform-origin: left;
    transform: rotate(-15deg) translate(-10px, -20px);
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


</style>