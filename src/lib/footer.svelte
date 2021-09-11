<script> 
  import { page } from '$app/stores'
  import Skills from './skills-footer.svelte';
</script>

<footer class:temporary-z-index = {$page.path == '/landing-pages/chat-app'}>
  
  {#if $page.path !== '/'}
  <Skills />
  {/if}
  <div class="footer">
    {#if $page.path !== '/'}
    <img id="profile-pic" src="/images/bw-profile-removebg.png" alt="jared keown profile picture">
    {/if}
    &copy; 2021 Jared Keown
  </div>

</footer>

<style>
  footer{
    background: var(--dark-gray);
    color: var(--light-gray);
    min-height: 50px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  #profile-pic{
    width: 50px;
    border-radius: 50px;
    margin-right: 1rem;
    transition: width ease .5s;
  }
  #profile-pic:hover{
    width: 125px;
  }
  .temporary-z-index{
    z-index: 1;
  }
</style>