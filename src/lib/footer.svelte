<script> 
  import { page } from '$app/stores'
  </script>

<footer>
  {#if $page.path !== '/'}
  <img src="/images/bw-profile-removebg.png" alt="jared keown profile picture">
  {/if}
  &copy; 2021 Jared Keown
</footer>

<style>
  footer{
    background: var(--dark-gray);
    color: var(--light-gray);
    text-align: center;
    min-height: 50px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 50px;
    border-radius: 50px;
    margin-right: 1rem;
    transition: width ease .5s;
  }
  img:hover{
    width: 125px;
  }
</style>