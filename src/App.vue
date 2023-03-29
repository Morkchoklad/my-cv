<template>
  <div class="app">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
   
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue"
</script>

<style lang="scss">
:root {

  --primary : #ff69b4;
  --grey : #64748b;
  --dark : #f9d16a;
  --dark-alt : #2a687a;
  --light : #f1f5f9;
  --sidebar-width: 300px;
}

* {
  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Montserrat', sans-serif;
}

body{
  background: var(--light); 
}

button{

  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app{

  display : flex;
  
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px){
      padding-left: 6rem;
    }
      
    text-align: center;
  }

}

h1{
  margin-bottom: 4rem;
}

ul{
  list-style-type: none;
  li{
    margin-bottom: 1.5rem;
  }
}

.text-box-dark{
    background-color: var(--dark-alt);
    width: 20rem;
    height: 25rem;
    border-radius: 5px;
    padding: 3%;
    color: var(--light);
    box-shadow: 3px 4px 0px 1px #000000;
    margin-bottom: 10em;    
    border: 1px solid black;
    h2{
        margin-bottom: 1em;
    }
    
    
}
</style>
