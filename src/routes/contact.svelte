<script>
  import { page } from '$app/stores'
  import Testimonials from "$lib/testimonials.svelte";
</script>
<section class="header-projects">
  <h1>Feel free to contact me using the form below</h1>
  <section class="contact-form">
    <form action="https://formspree.io/f/meqvvkbr" method="post">
      <label for="email">Your Email:</label>
      <input name="Email" id="email" type="email">
      <label for="message">Write here:</label>
      <textarea name="Message" id="message" cols="30" rows="10"></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>

  <Testimonials />
  
</section>
<style>
  section{
    padding: 2.5rem 0;
  }
  h1{
    text-align: center;
  }
  form{
    background: var(--green-blue-gradient);
    color: var(--light-gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
  input{
    height: 30px;
  }
  input, textarea{
    width: 300px;
    margin-bottom: 1rem;
  }
  button{
    border: none;
    color: var(--light-gray);
    padding: 10px 25px;
    background-color: transparent;
    font-size: 1.3rem;
    border: 2px solid var(--dark-green);
    box-shadow: 0 0 5px var(--light-gray);
  }
  button:hover, button:focus{
    background-color: var(--dark-green);
  }

  @media (min-width: 600px){
    h1{
      padding-top: 1rem;
    }
  }
</style>