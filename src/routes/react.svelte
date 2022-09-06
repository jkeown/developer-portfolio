<script> 
  import { page } from '$app/stores'
</script>


    <h1>Marvelous Data React App</h1>
  <section class="project">
    <div class="snapshot">
    <a href="http://mapi.surge.sh/" rel="nofollow noopener noreferrer" target="_blank">
    <img src="images/mapi-lg.png" alt="Marvel API React App" />
    </a>
    <a class="button" rel="nofollow noopener noreferrer" target="_blank" href="http://mapi.surge.sh/">View Live
    </a>
    </div>
    <div class="content">
    <ul>
      <li>Create React App</li>
      <li>Marvel Data API</li>
      <li>Quick Search</li>
      <li>Advanced Search</li>
      <li>Light / Dark Mode</li>
      <li>Grid / List Layouts</li>
      <li>Pagination</li>
      <li><small><em>Not a tutorial project</em></small></li>
    </ul>
    </div>
  </section>

<a class="button projects" href="/projects">Other Works</a>

<style>
h1{
  text-align: center;
}
.project{
  display: flex;
  max-width: 90vw;
  margin: 50px 0;
  justify-content: end;
}
.project div{
  width: 50%;
}
img{
  width: 100%;
}
.project .snapshot img {
  box-shadow: 0 0 3px var(--dark-gray);
}
.project .content{
  padding: 0 0 50px 50px;
  width: 25%;
}
.project .content ul{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: square inside;
}
.project .content ul li::marker{
  color: var(--dark-green);
}
.button{
    padding: 10px 25px;
  }
.button.projects{
  margin-bottom: 50px;
}

@media (max-width: 1079px){
  .project{
  flex-direction: column;
  align-items: center;
  }
  .project div{
    width: 100%;
  }
  .project .content{
  padding: 25px 0 0;
  width: 100%;
  }
  .project .content ul{
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  }
  .project .content ul li{
  min-width: 160px;
  margin-bottom: 10px;
  }
}
@media (max-width: 450px){
  h1{
    font-size: 25px;
  }
}
</style>