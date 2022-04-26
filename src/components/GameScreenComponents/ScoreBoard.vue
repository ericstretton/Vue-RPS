<template>
    <v-container>
        <v-card
        max-width="5vw"
        elevation=5
        outlined
        shaped
        
        >
        <h1>{{userScore}}:{{computerScore}}</h1>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name : "ScoreBoard",
        data() {
            return {
                userScore: 0,
                computerScore: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
h1{
    position: relative;
    left: 1vw;
}

</style>