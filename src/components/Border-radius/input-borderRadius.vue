<template>
    <div class="input-block">
        <!--<v-text-field @keyup="updateBorder()"  label="Width"  v-model="blockWidth"></v-text-field>-->
      <v-text-field @input="updateBorder()"  type="number" :label="firstValueName"   v-model="upperLeft">s</v-text-field>
      <v-text-field @input="updateBorder()"  type="number" :label="secondValueName"  v-model="upperRight"></v-text-field>
      <v-text-field @input="updateBorder()"  type="number" :label="thirdValueName"  v-model="lowerRight"></v-text-field>
      <v-text-field @input="updateBorder()"  type="number" :label="fourthValueName"  v-model="lowerLeft"></v-text-field>
      <v-btn @click="copyCode" >Copy code</v-btn>
    </div>

</template>
<script>
export default {
    name:'mainInput',
    props:{
        firstValueName:String,
        secondValueName:String,
        thirdValueName:String,
        fourthValueName:String
    },
    data () {
        return {
            upperLeft:null,
            upperRight:null,
            lowerLeft:null,
            lowerRight:null,
            updatedText:null,
            blockWidth:null,
            styles:"You haven't entered anything",
        }
    },
    methods:{
      copyCode () {
        this.$copyText(this.styles)
      },
      updateBorder(){
        this.$emit('Styles', this.upperRight,this.upperLeft,this.lowerRight,this.lowerLeft)
      }
    }   
}

</script>
<style scoped>
.input-block{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.input-block{
  background: #ffffff50;
  border-radius: 10px;
  color: #fff;
  padding: 20px;
}
</style>