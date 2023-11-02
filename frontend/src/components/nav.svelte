<script lang="ts">
  import { goto } from "$app/navigation";
  import svelteLogo from "$lib/assets/Svelte_Logo.png";

  const setNum = (num: number) => {
    currentPageNum = num;
  };
  export let currentPageNum: number = 0;

  export let currentPageName: string[] = ["Main", "Experience", "About"];
</script>

<head>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
</head>
<nav>
  <div class="container">
    <div class="row">
      <div class="col-xs-4 col-sm-2">
        <div class="dropdown">
          <div class="dropbtn text-center">Menu</div>
          <div class="dropdown-content">
            <button style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
              on:click={() => {
                setNum(0);
                goto("/");
              }}>Home</button
            >
            <button
              on:click={() => {
                setNum(1);
                goto("/experience");
              }}>Experience</button
            >
            <button style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
              on:click={() => {
                setNum(2);
                goto("/about");
              }}>About</button
            >
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-6" />
      <div class="col-xs-4 img-title">
        <span
          style="color: white; font-weight: bold; text-transform: uppercase;"
        >
          {currentPageName[currentPageNum]}
        </span>
        <img
          width="30em"
          height="40em"
          class="img rounded image-svelte"
          src={svelteLogo}
          alt="Svelte Logo"
        />
      </div>
    </div>
  </div>
</nav>

<style>
  .container {
    padding: 0px;
  }
  .img-title {
    display: flex;
    align-content: end;
    padding: 0px;
  }
  span {
    margin: auto;
  }

  .dropbtn {
    margin-top: 2px;
    border-radius: 5px;
    padding: 6px 8px;
    background-color: #1ECBE0;
    display: block;
    border: 1px solid black;
    min-width: 100px;
  }

  .dropdown {
    display: block;
  }

  .dropdown-content {
    border-radius: 10px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 137px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  button {
    width: 100%;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .dropdown-content button {
    color: black;
    border: 1px solid black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: inline-block;
  }

  nav {
    width: 100%;
    height: auto;
    background-color: #4ad6e7;
    display: flex;
    margin-bottom: 1em;
  }

  .image-svelte {
    padding: 0px;
    float: right;
  }
</style>
