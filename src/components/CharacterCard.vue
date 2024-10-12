<script setup>
</script>

<template>
    <div class="card">
        <img src="https://rickandmortyapi.com/api/character/avatar/21.jpeg" alt="Imagen personaje" class="card_image">
        <div class="card_info">
            <div class="mb-3">
                <h2 class="text-h4">Rick Sanchez</h2>
                <div class="statusRow"><span class="status"></span> <p class="text-body-1">Alive - Human</p></div>
            </div>
            
            <div class="mb-3">
                <p class="text-body-1 font-weight-bold">Last known location:</p>
                <p class="text-body-2">Citadel of Ricks</p>
            </div>
            
            <div>
                <p class="text-body-1 font-weight-bold">First seen in:</p>
                <p class="text-body-2">Close Rick-counters of the Rick kind</p>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba($color: #fff, $alpha: 0.2);

    .card_image {
        width: 100%;
        object-fit: contain;
    }

    .card_info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 100%;
        padding: 1rem;

        .statusRow {
            display: flex;
            gap: 1rem;

            .status {
                width: .5rem;
                height: .5rem;
                border-radius: 50%;
                margin-top: 10px;
                background-color: #f00;
            }
        }
    }
}

@media (min-width: 768px) {
    .card {
        width: calc(50% - 30px);
    }
}

@media (min-width: 1024px) {
    .card {
        width: calc(30% - 30px);
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        overflow: hidden;
        background-color: rgba($color: #fff, $alpha: 0.2);
        height: 300px;
    
        .card_image {
            height: 100%;
            width: 50%;
            object-fit: cover;
        }
    
        .card_info {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            width: 100%;
            padding: 1rem;
    
            .statusRow {
                display: flex;
                gap: 1rem;
    
                .status {
                    width: .5rem;
                    height: .5rem;
                    border-radius: 50%;
                    margin-top: 10px;
                    background-color: #f00;
                }
            }
        }
    }
}
</style>