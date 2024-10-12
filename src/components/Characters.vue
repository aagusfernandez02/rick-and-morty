<script setup>
import CharacterCard from './CharacterCard.vue';

</script>

<template>
    <div class="charactersContainer">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
    </div>
</template>

<style scoped lang="scss">
.charactersContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

@media (min-width: 768px) {
    .charactersContainer{
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>