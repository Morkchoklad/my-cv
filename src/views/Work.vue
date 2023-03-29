 

<template>
    <main class="home-page"> 
        <h1>Work</h1>
        <div class="navigation">
            <button @click="rotateLeft">a</button>
            <button @click="rotateRight">b</button>
        </div>
        <div class="text-box-dark" id="jobs">fewf</div>
    </main>
</template>

<script setup>

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};


 const rotateLeft = async () => {
    
    document.getElementById('jobs').style.transform = "scaleX(0)";
    await sleep(1000);
    document.getElementById('jobs').style.transform = "scaleX(1)";
     

 }
 
 const rotateRight = async () => {
    
    document.getElementById('jobs').style.transform = "scaleX(0)";
    await sleep(1000);
    document.getElementById('jobs').style.transform = "scaleX(1)";
    
 }

</script>

<style lang="scss" scoped>

.navigation{
    display: flex;
    margin: auto;
    margin-bottom: 3em;
    
    button{
        margin: auto;
    }
}
.text-box-dark{
    margin: auto;
    transition: 1s ease-in-out;
    
    
}

.animate {
  animation-name: anim-scale;
  animation-duration: 2s;
  
  animation-fill-mode: forwards;
}

@keyframes anim-scale {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

</style>