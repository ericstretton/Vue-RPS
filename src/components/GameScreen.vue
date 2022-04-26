<template>
    <div>
        <v-responsive :aspect-ratio="16/9">
            <v-container>
                <h1>Welcome To the Game!</h1>
                <ScoreBoard/>
                <UserSelection/>
                <ComputerSelection/>
                
                <v-row  
                    no-gutters 
                    dense
                    >
                    <v-col>
                        <v-btn
                        elevation=2
                        click="selected">
                            Rock
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn
                        elevation=2
                        click="selected">
                            Paper
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn
                        elevation=2
                        click="selected">
                            Scissors
                        </v-btn>
                    </v-col>
                </v-row>
            
            </v-container>
        </v-responsive>
    </div>
    
</template>

<script>
import ScoreBoard from '@/components/GameScreenComponents/ScoreBoard.vue'
import UserSelection from './GameScreenComponents/UserSelection.vue'
import ComputerSelection from './GameScreenComponents/ComputerSelection.vue'
import {useSelectionStore} from '@/stores/selection'
import {mapState} from 'pinia'

    export default {
  components: { ScoreBoard, UserSelection, ComputerSelection },
        name: "GameScreen",
        computed: {
            // State
            ...mapState(useSelectionStore, ['counter'])

        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
.col{
    flex-grow: 1;
    max-width: 15%;
}

</style>