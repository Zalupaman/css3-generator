<template>
  <v-container>
    <v-row>
            <v-col cols="4">
                <ShadowInput firstValueName="X Offset" secondValueName="Y Offset" thirdValueName="Blur" fourthValueName="Color" @Styles="ShadowStyles"/>
            </v-col>
            <v-col cols="8">
                <ShadowOutput :text="text" :botRight="botRight" :botLeft="botLeft" :topRight="topRight" :topLeft="topLeft" />
            </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ShadowInput from "../components/BoxShadow/input-BoxShadow"
import ShadowOutput from "../components/BoxShadow/output-BoxShadow"
export default {
  name:"BoxShadowMain",
  components:{
    ShadowInput,
    ShadowOutput
  }
}
</script>