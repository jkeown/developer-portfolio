<script>
  import { page } from '$app/stores'
  import { fade, slide } from "svelte/transition";

  const websites =[ {image: 'nn-screenshot.png', title: 'nati natash', href:'https://www.natinatash.com/'}, {image: 'sng-screenshot.png', title: 'shine n go detailing', href:'https://www.shinengodetailing.com'},{image: 'ba-screenshot.png', title: 'bodyboarding adventures', href:'http://bodyboardingadventures.com'}, {image: 'fh-screenshot.png', title: 'fearless hustle', href:'https://www.fearlesshustlebrand.com'}, ]
</script>

<section class="websites">
  <h1>Recent Websites</h1>
  <section class="website-images">
    {#each websites as website}
  <div class="img-card">

    <img transition:fade src="images/{website.image}" alt={`screenshot of ${website.title} website`}>
    <a class="button" rel="nofollow noopener noreferrer" target="_blank" href={website.href}>View Live
    </a>
  </div>
  {/each}
</section>
</section>
<style>
section{
    padding: 1rem;
  }
  h1{
    text-align: center;
  }
  .website-images{
    /* max-width: 90vw; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 4rem;
  }
  .img-card{
    width: 100%;
    height: 300px; 
    margin: 3rem 1rem;
  }
  .img-card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
    box-shadow: 0 0 3px var(--dark-gray);
  }

  @media (min-width: 664px){
    nav{
      width: 50vw;
    }
     .img-card{
      width: 40vw;
    }
  }
  @media (min-width: 1000px){
    .img-card{
      width: 25vw;
    }
  }
</style>