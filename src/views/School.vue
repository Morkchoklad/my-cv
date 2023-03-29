<template>
    <main class="home-page"> 
        <h1>School</h1>
        <div class="wrapper">
        <div class="column-a">
        <button id="udem" class="school-panel" name="activated" @click="udem">
            <img id="logo-udem" class="logo" src="../assets/logo/Universite_de_Montreal_logo.svg">
            <div>University</div>
        </button>
        <button id="sl" class="school-panel" name="" @click="sl">
            <img id="logo-sl" class="logo" src="../assets/logo/Logo-Cégep_de_Saint-Laurent.svg">
            <div>Cegep</div>
        </button>
        <button id="face" class="school-panel" name="" @click="face">
            <img id="logo-face" class="logo" src="../assets/logo/face-logo.svg">
            <div>Highschool</div>
        </button>
        </div>
        <div class="column-b">
            <div class="text-box-dark">
                <span id="morphing-text" class="morphing-text">test</span>
            </div>


            
            
        </div>
        </div>
        
    </main>
</template>

<script setup>

const udem = () => {
    
    document.getElementById('morphing-text').innerHTML = "personText"
    document.getElementById('udem').name = "activated"
    document.getElementById('sl').name = ""
    document.getElementById('face').name = "" 
}

const sl = () => {
    document.getElementById('morphing-text').innerHTML = "computerText"
    document.getElementById('udem').name = ""
    document.getElementById('sl').name = "activated"
    document.getElementById('face').name = ""
  
}

const face = () => {
    document.getElementById('morphing-text').innerHTML = "rpgText"
    document.getElementById('udem').name = ""
    document.getElementById('sl').name = ""
    document.getElementById('face').name = "activated" 
     
}

</script>

<style lang="scss" scoped>

    .wrapper{
        display: flex;
        flex-wrap: wrap ;
        gap: 1em;
        flex-direction: row;

        div{
            margin-left: auto;
            margin-right: auto;
        }
        .text-box-dark{
            margin-top: 0;
            width: 25rem;
            
        }
        
    }
    
    
    

    
    .school-panel{
        border: 1px solid black;

        width: 25rem;
        height: 6rem;
        background-color: var(--dark);
        border-radius:  0.5rem;
        box-shadow: 10px 10px 0 black;
        font-size: large;
        margin-left: 0%;
        color: white;
        text-align: left;
        display: flex;
        transition: 0.2s ease-out;  

        margin-bottom: 3.5rem;

        

        div{
            top: 2rem;
            position: relative; 
            margin-left: 2rem;
            
        }

        .logo{
            margin-left: 2rem;
            width: 12rem;
            margin-top: auto;
            margin-bottom: auto;
            
        }

         

        
    
    }

    button:hover{
        color: #ff69b4;
    }

    [name|="activated"] {
            transform: translate(9px,9px);
            box-shadow: 1px 1px 0 black;
            transition: 0.2s ease-out;
        
        }

</style>