<script>
  /** @type {import('./$types').LayoutData} */
  export let data;


</script>

<section>
  <nav>
    Nav
  </nav>
  <main>
    <slot></slot>
  </main>
</section>


<style>
  section {
    display: grid;
    gap: 1rem;
    grid-template-columns: 200px 1fr; /* Adjust the width of nav as needed */
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  nav {
    background: #f9f9f9;
    overflow-y: auto; /* Allows vertical scrolling */
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    overflow-y: auto; /* Allows vertical scrolling */
    background-color: #fff; /* Example background color */
    min-height: 100%;
    margin: 0;
    padding: 0;
  }
</style>