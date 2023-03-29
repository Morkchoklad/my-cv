<template>
    <main class="home-page"> 
        <h1>William Senneron</h1>
        <div class="page-wrapper">
            <div class="flex-wrapper">
                <div class="text-box-dark">
                    <h2>About me</h2>
                    <div class="flex-wrapper">
                        <button id="personText" @click="personText" class="material-icons">person</button>
                        <button id="computerText" @click="computerText" class="material-icons">keyboard</button>
                        <button id="rpgText" @click="rpgText" class="material-icons">casino</button>
                    </div>
                    <span id='morphing-text' class="morphing-text">
                        My name is William
                    </span>
                </div>
                <div class="text-box-dark">
                    <h2>Contact info</h2>
                    <ul>
                        <li>
                            <span class="material-icons">phone</span>
                            <span>514-797-1933</span>
                        </li>
                        <li>
                            <span class="material-icons">alternate_email</span>
                            <span>william.senneron@gmail.com</span>
                        </li>
                        <li>
                            <span class="material-icons">linkedin</span>
                        </li>
                        <li>
                            <span class="material-icons">discord</span>
                        </li>
                        <li>Test</li>
                    </ul>
                </div>  
            </div>
            
                
            
        </div>
    </main>
</template>

<script setup>

 

const personText = () => {
    
    document.getElementById('morphing-text').innerHTML = "personText"
    document.getElementById('personText').name = "activated"
    document.getElementById('computerText').name = ""
    document.getElementById('rpgText').name = "" 
}

const computerText = () => {
    document.getElementById('morphing-text').innerHTML = "computerText"
    document.getElementById('personText').name = ""
    document.getElementById('computerText').name = "activated"
    document.getElementById('rpgText').name = ""
  
}

const rpgText = () => {
    document.getElementById('morphing-text').innerHTML = "rpgText"
    document.getElementById('personText').name = ""
    document.getElementById('computerText').name = ""
    document.getElementById('rpgText').name = "activated" 
     
}

</script>

<style lang="scss" scoped>

     
    .flex-wrapper{
        display: flex;
        gap: 1em;
        flex-direction: row;
        flex-wrap: wrap;  


        div, button{
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2em;
            color: var(--light);

            &personText {

                color: var(--primary);
            } 

        }

        button{
            
            transition: 0.2s ease-out;
            color: var(--dark-alt);
            background-color: var(--dark);
            border-radius: 2px;
            box-shadow: 2px 2px 0 black;
            width: 1.5em;
            
            
            
        }
        button:hover{
             
                color: var(--primary);
           
        }
        
          
    }

    .text-box-dark{
            
        
        h2{
            margin-bottom: 1em;
        }

        ul{
            margin-top: 5rem;
            li{
                display: flex;
                span{
                    margin-right: 0.6rem;
                }
            }
        }



        [name|="activated"] {
            transform: translate(1px,1px);
            box-shadow: 1px 1px 0 black;
            transition: 0.1s ease-out;
        }

    }
</style>