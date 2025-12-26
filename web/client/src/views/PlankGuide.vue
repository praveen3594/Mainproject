<template>
    <div class="container">
        <div class="text-content">
            <h2>How to Do a Plank:</h2>

            <h3>Starting Position:</h3>
            <ul>
                <li>Start face down on the floor, resting on your forearms and toes.</li>
                <li>Keep elbows under your shoulders and your body in a straight line.</li>
            </ul>

            <h3>Hold the Position:</h3>
            <ul>
                <li>Engage your core and squeeze your glutes.</li>
                <li>Keep your hips level — don't let them sag or lift too high.</li>
                <li>Breathe steadily and hold the position.</li>
            </ul>

            <h3>Finish the Plank:</h3>
            <ul>
                <li>Hold as long as you can with good form.</li>
                <li>Lower your body gently to rest.</li>
                <li>Repeat for more sets if desired.</li>
            </ul>

            

            <div class="button-container">
                <input type="button" value="Go Back" class="back-button" @click="$router.go(-1)" />
            </div>
        </div>

       <div class="image-content">
            <img src="/static/pictures/plank.png" alt="Plank Exercise" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    background-color: rgba(246, 166, 250, 0.9);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid #5500ff;
    font-family: Arial, sans-serif;
}

.text-content {
    flex: 1;
    max-width: 60%;
    padding: 20px;
    text-align: left;
}

.image-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-content img {
    max-width: 90%;
    height: auto;
    border-radius: 10px;
}

h2 {
    font-size: 24px;
    margin-top: 0;
    letter-spacing: 2px;
    text-align: center;
}

h3 {
    font-size: 20px;
    margin-top: 20px;
    letter-spacing: 1px;
}

ul {
    list-style-type: disc;
    padding-left: 20px;
}

li {
    font-size: 16px;
    line-height: 1.6;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.back-button {
    padding: 12px 24px;
    background-color: #1a4de7;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-style: oblique;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-button:hover {
    background-color: #f06f1f;
    color: #f7f7f7;
    transform: scale(1.1);
}

.back-button:active {
    transform: scale(0.9);
}
</style>
