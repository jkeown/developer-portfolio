<script>
  import { onMount } from 'svelte';
  import Skills from '$lib/skills.svelte'
  import About from '$lib/about.svelte'
  import Contact from '$lib/contact.svelte'

  const words =['Front-End', 'React', 'Email']
  let word =[]
  let i = 0
  let j = 0
  let isDeleting = false

  async function typing(){
    if(i < words.length){

      if (!isDeleting && j <= words[i].length){
          word.push(words[i][j])
          word = word
        j++
      }
      if (isDeleting && j <= words[i].length){
          word.pop(words[i][j])
          word = word
        j--
      }
      if (j == words[i].length){
        await new Promise(r => setTimeout(r, 1500))
        isDeleting = true
      }
      if (isDeleting && j === 0){
        // word = []
        isDeleting = false
        i++
        if(i == words.length){
          i = 0
        }
      }
      
    setTimeout(typing, 300)
    }
  }
  

  onMount(() => {
    typing();
  })
</script>

<section>
  <div class="title">
    <h1 class="bg-gradient">{word.join('')}<span class="cursor">|</span>Developer</h1>
    <h2>Jared Keown</h2>
  </div>
  <a class="button" href="/react">My Work</a>
  <Skills />
</section>
<About />
<Contact />

<style>
  section{
    width: 100%;
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(/images/profile-bg-trace.svg);
    background-repeat: no-repeat;    
    background-size: cover;
    min-height: 80vh;
  }
  .title{
    min-width: 300px;
  }
  h1{
    font-size: 1.5rem;
  }
  .cursor{
    color: var(--dark-gray);
    animation: blinking 1s linear infinite;
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
    background-size: 35%;
    background-position: 25% 0;
    justify-content: space-evenly;
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