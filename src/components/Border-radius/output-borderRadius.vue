<template>
    <div class="output">
        <div class="iteractionBlock" id="iteraction-radius_block" :style="setBorder"  ></div>
        <div class="output-block">
          <span v-show="setBorder['border-top-left-radius'] !== 'nullpx'">Здесь будет код:<br><br> border-radius:{{setBorder["border-top-left-radius"]}} {{setBorder["border-top-right-radius"]}} {{setBorder["border-bottom-right-radius"]}} {{setBorder["border-bottom-left-radius"]}}</span>

        </div>
    </div>
</template>
<script>
export default {
    name:'mainOutput',
     props:['botRight','botLeft','topRight','topLeft','borderStyles'],
    computed:{
        setBorder(){
            return{
                "border-top-left-radius":`${this.topLeft}px`,
                "border-top-right-radius":`${this.topRight}px`,
                "border-bottom-right-radius":`${this.botRight}px`,
                "border-bottom-left-radius":`${this.botLeft}px`
            }
        },
    },
  watch:{
      updateText(){

        let block = document.getElementById("iteraction-radius_block").style
        console.log(block)
      }
  }
   
}
</script>
<style >
.output{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.iteractionBlock{
    width: 400px;
    height: 200px;
    background: #3d50b6;
    transition: all .3s ease;
}
.output-block{
    background: #13141870;
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    backdrop-filter: blur(20px);
}
.output{
  background: #ffffff50;
  border-radius: 10px;
  color: #fff;
  padding: 20px;
}

</style>