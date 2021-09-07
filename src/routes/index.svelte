<script>
  import Skills from '$lib/skills.svelte'
</script>

<section>
  <div>
    <h1 class="bg-gradient"><span>Email</span> Developer</h1>
    <h2>Jared Keown</h2>
  </div>
  <a class="button" href="/projects">My Work</a>
  <Skills />
</section>

<style>
  section{
    min-height: 95vh;
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
  h1 span{
    text-transform: uppercase;
  }
  .button{
    padding: 10px 25px;
  }
  @media (min-width: 400px){
    h1{
    font-size: 2.5rem;
  }
  }
  @media (min-width: 700px){
    section{
    background-size: contain;
  }
  }
  
</style>