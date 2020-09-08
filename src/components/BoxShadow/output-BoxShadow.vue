<template>
    <div class="output">
        <div class="iteractionBlock" id="iteraction-radius_block" :style="setBorder"  ></div>
        <div class="output-block">
            Здесь будет код:<br><br>
            {{ text }}
        </div>
            <v-color-picker
      elevation="15"
    ></v-color-picker>
    </div>
</template>
<script>
export default {
    name:'mainOutput',
     props:['text','botRight','botLeft','topRight','topLeft','borderStyles'],
    data(){
        return {
            
        }
    },
    computed:{
        setBorder(){
            return{
                "border-top-left-radius":`${this.topLeft}px`,
                "border-top-right-radius":`${this.topRight}px`,
                "border-bottom-right-radius":`${this.botRight}px`,
                "border-bottom-left-radius":`${this.botLeft}px`
            }
        }
    }
   
}
</script>