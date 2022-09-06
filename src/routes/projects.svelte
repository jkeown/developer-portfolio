<script>
  import { page } from '$app/stores'
  import { fade, slide } from "svelte/transition";

  const emailImages = [{source: 'promotional-motorola-screenshot.png', category: 'promotional', href:'motorola-promotional'}, {source: 'promotional-shopify-screenshot.png', category: 'promotional', href:'shopify-promotional'}, {source: 'transactional-apple-screenshot.png', category: 'transactional', href:'apple-transactional'}, {source: 'transactional-dunkin-screenshot.png', category: 'transactional', href:'dunkin-transactional'}, {source: 'newsletter-maui-screenshot.png', category: 'newsletter', href:'maui-newsletter'}, ]
  const landingPageImages =[ {source: 'chat-app-screenshot.png', category: 'landing-page', href:'chat-app'}, {source: 'huddle-screenshot.png', category: 'landing-page', href:'huddle'}, {source: 'seven-suns-screenshot.png', category: 'landing-page', href:'seven-suns'},]
  
  let selectedImages = emailImages;
  let showAll = true;
  let showEmail = false;
  let allEmailLinkActive = false;
  let showLandingPages = false;
  let showPromotional = false;
  let showTransactional = false;
  let showNewsletter = false;
  const showAllProjects = () => {showAll = true; showEmail = false; showPromotional = false; showTransactional = false; showNewsletter = false; showLandingPages = false;getEmailCategory(emailImages);}
  const showOnlyEmail = () => {showAll = false; showEmail = true; showLandingPages = false; allEmailLinkActive = true; getEmailCategory(emailImages)} 
  const showOnlyLandingPages = () => {showAll = false; showPromotional = false; showTransactional = false; showNewsletter = false; showLandingPages = true; showEmail = false; allEmailLinkActive = false;} 
  const showingAllEmail = () => {allEmailLinkActive = true; showAll = false; showPromotional = false; showTransactional = false; showNewsletter = false; getEmailCategory(emailImages);}
  const showOnlyPromotional = () => {allEmailLinkActive = false; showAll = false; showPromotional = true; showTransactional = false; showNewsletter = false; showLandingPages = false; getEmailCategory(emailImages, 'promotional');} 
  const showOnlyTransactional = () => {allEmailLinkActive = false; showAll = false; showTransactional = true; showPromotional = false; showNewsletter = false; showLandingPages = false;getEmailCategory(emailImages, 'transactional');} 
  const showOnlyNewsletter = () => {allEmailLinkActive =false ;showAll = false; showNewsletter = true; showPromotional = false; showTransactional = false; showLandingPages = false;getEmailCategory(emailImages, 'newsletter');}
  function getEmailCategory(arr, category){
    if(category){
      selectedImages = arr.filter(img => img.category == category);
    }
    else{
      selectedImages = arr;
    } 
  }

let y;


</script>
<section class="header-projects" class:scroll-bg-border = {y >=100}>
  <h1>Projects</h1>
  <p>A selection of my range of work</p>
  <nav>
    <a href="/projects" class:active = {showAll} on:click={showAllProjects}>All</a>
    <a href="/projects" class:active = {showEmail} on:click={showOnlyEmail}>Email</a>
    <a href="/projects" class:active = {showLandingPages} on:click={showOnlyLandingPages}>Landing Pages</a>
    <a href="/websites">Websites</a>
  </nav>
  {#if showEmail}
  <div class="divider"></div>
  <p class="email-info"><em>*Emails created using&nbsp; <a href="https://mjml.io/" target="__blank">MJML</a>.</em></p>
  <nav transition:slide id="email-specific-nav">
      <a href="/projects" class:active = {allEmailLinkActive} on:click={showingAllEmail}>All Email</a>
      <a href="/projects" class:active = {showPromotional} on:click={showOnlyPromotional}>Promotional</a>
      <a href="/projects" class:active = {showTransactional} on:click={showOnlyTransactional}>Transactional</a>
      <a href="/projects" class:active = {showNewsletter} on:click={showOnlyNewsletter}>Newsletter</a>
    </nav>
    {/if}
</section>
<section class="project-images" class:nav-open-margin-top = {showEmail && y >= 100}>
  {#if showAll || showEmail}
  {#each selectedImages as img}
  <div class="img-card">

    <img transition:fade src="images/{img.source}" alt={`screenshot of ${img.category} email`}>
    <a class="button" rel="nofollow noopener noreferrer" href={`email/${img.href}`}>View Live
    </a>
  </div>
  {/each}
  {/if}
  {#if showAll || showLandingPages}
  {#each landingPageImages as img}
  <div class="img-card">

    <img transition:fade src="images/{img.source}" alt={`screenshot of ${img.category}`}>
    <a class="button" rel="nofollow noopener noreferrer" href={`landing-pages/${img.href}`}>View Live
    </a>
  </div>
  {/each}
  
  {/if}
</section>

<svelte:window bind:scrollY={y}/>
<style>
  section, nav{
    padding: 1rem;
  }
  .header-projects{
    background-color: var(--light-gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: -45px;
    width: 100vw;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  nav{
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
  }
  a:hover {
  border-bottom: 2px solid var(--dark-green);
}
  .project-images{
    /* max-width: 90vw; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 4rem;
  }
  .divider{
    border-bottom: 1px solid var(--dark-gray);
    width: 90%;
  }
  .email-info{
    line-height: 2;
  }
  .email-info a{
    font-style: normal;
  }
  #email-specific-nav{
      flex-wrap: wrap;
      justify-content: space-between;
    }
    #email-specific-nav a{
      margin-right: 1rem; 
      margin-bottom: 1rem; 
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
  .scroll-bg-border{
    box-shadow: var(--border-shadow-bottom);
  }
  /* .nav-open-margin-top{
    margin-top: 1rem;
  } */
  @media (min-width: 664px){
    nav{
      width: 50vw;
    }
     .img-card{
      width: 40vw;
    }
    .divider{
      width: 50%;
    }
  }
  @media (min-width: 1000px){
    .img-card{
      width: 25vw;
    }
  }
</style>