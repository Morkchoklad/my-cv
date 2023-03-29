<template>
  <aside :class ="`${isExpanded ? 'isExpanded' : ''}`">
    <div class="logo">
      <span>C.V.</span>
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click ="ToggleMenu">
        <span class="material-icons">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>

    <h3>Navigation</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">face</span>
        <span class="text">William Senneron</span>
      </router-link>
      <router-link class="button" to="/school">
        <span class="material-icons">school</span>
        <span class="text">School</span>
      </router-link>
      <router-link class="button" to="/work">
        <span class="material-icons">work</span>
        <span class="text">Work</span>
      </router-link>
      <router-link class="button" to="/portfolio">
        <span class="material-icons">folder_open</span>
        <span class="text">Portfolio</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link class="button" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>
    </div>

  </aside>
</template>

<script setup>
import { ref } from "vue";



const isExpanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {

  isExpanded.value = !isExpanded.value;

  localStorage.setItem("is_expanded", isExpanded.value) 

}

</script>



<style lang="scss" scoped>



aside{
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: 4rem;
  overflow: hidden;
  
  padding: 1rem;
  min-height: 100vh;
  transition: 0.2s ease-out;
  
  .flex{
    flex: 1 1 0;
  }
  .logo {
    margin-bottom: 1rem;
    img{
      width: 2rem;
    }
  }
  .menu-toggle-wrap{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;
    .menu-toggle{
      transition: 0.2s ease-out;
      .material-icons{
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;

        &:hover{
          color: var(--primary);
          translate: 0.5rem;
        }
      }
    }
  }
  h3 {
    color: var(--grey);
    font-size: 0.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  h3, .button .text {

    opacity: 0;
    transition: 0.3s ease-out;

  }

  .menu {
    margin: 0 - 1rem;

    .button {

      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2 ease-out;

      .material-icons{
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
        
      }

      .text{
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover, &.router-link-exact-active {
       
        
        background-color: var(--dark-alt);
        border-radius: 0 0.5rem 0.5rem 0;
        box-shadow:inset -0.3rem -0.3rem 0 var(--primary),0px -1px 0 var(--primary);
        .material-icons, .text{
          color: var(--primary);
        }
      }

     
    }
  }
  &.isExpanded{
    width: var(--sidebar-width);
    transition: 0.2s ease-out;
    .menu-toggle-wrap{
      top: -3rem;
      .menu-toggle{
        transform: rotate(-180deg);
      }
    }

    .button {
      .material-icons{
        margin-right: 1rem;
      }
    }

    h3, .button .text {
 
      opacity: 1;
      transition: 0.3s ease-out;

}
  }
  @media (max-width :768px) 
  {
    position: fixed;
    z-index: 99;
  }
  
  
}

  
</style>