<script>
  import { page } from '$app/stores'
</script>

<section id="contact" class="contact-form">
    <h1>Feel free to contact me</h1>
    <form action="https://formspree.io/f/meqvvkbr" method="post">
      <div class="form-group">
      <label for="name">Name</label>
      <input name="Name" id="name" type="text">
      </div>
      <div class="form-group">
      <label for="email">Email</label>
      <input name="Email" id="email" type="email">
      </div>
      <div class="form-group">
      <label for="message">Message</label>
      <textarea name="Message" id="message" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>  

<style>
  section.contact-form{
    margin-top: 50px;
    width: 100%;
    max-width: 810px;
  }
  h1{
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 1rem;
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
  .form-group{
    width: 90%;
    margin-bottom: 1rem;
    position: relative;
  }
  input, textarea{
    width: 100%;
  }
  button{
    border: none;
    color: var(--light-gray);
    padding: 10px 25px;
    background-color: transparent;
    font-size: 1.3rem;
    border: 1px solid var(--dark-green);
    box-shadow: 0 0 5px var(--light-gray);
    transition: all 400ms ease;
    margin-top: 1rem;
  }
  button:hover, button:focus{
    background-color: var(--dark-green);
    box-shadow: none;
    border-color: #fff;
  }
  
  @media (min-width: 600px){
    h1{
      padding-top: 1rem;
    }
    form{
      padding: 2rem;
    }
  }
  @media (min-width: 811px){
    section.contact-form{
      margin-bottom: 100px;
    }
  }
</style>