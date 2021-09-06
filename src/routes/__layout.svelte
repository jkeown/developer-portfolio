<script>
  import '../global.css'
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
<style>
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
  }
</style>