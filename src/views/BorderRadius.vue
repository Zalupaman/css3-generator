<template>
<v-container>
    <main>
        <v-row>
            <v-col cols="4">
                <BorderInput firstValueName="Top Left" secondValueName="Top Right" thirdValueName="Bottom Right" fourthValueName="Bottom Left" @Styles="borderStyles"/>
            </v-col>
            <v-col cols="8">
                <BorderOutput  :botRight="botRight" :botLeft="botLeft" :topRight="topRight" :topLeft="topLeft" />
            </v-col>
        </v-row>
    </main>
</v-container>
</template>
<script>
import BorderInput from '../components/Border-radius/input-borderRadius'
import BorderOutput from '../components/Border-radius/output-borderRadius'
export default {
    name:'mainContent',
    components:{
        BorderInput,
        BorderOutput
    },
    data(){
        return{

            topRight:null,
            topLeft:null,
            botRight:null,
            botLeft:null
        }
    },
    methods:{
        borderStyles(topRight,topLeft,botRight,botLeft){

            this.topRight = topRight
            this.topLeft = topLeft
            this.botRight = botRight
            this.botLeft = botLeft
        }
    },
}
</script>
