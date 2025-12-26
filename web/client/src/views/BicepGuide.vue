<template>
    <div class="container">
        <div class="text-content">
            <h2>How to Do a Bicep Curl(Left/Right):</h2>

            <h3>Starting Position:</h3>
        <ul>
            <li>Stand with your feet shoulder-width apart, knees slightly bent.</li>
            <li>Hold a dumbbell in your left/right hand with your palm facing forward.</li>
            <li>Keep your arm fully extended, resting by your side.</li>
            <li>Engage your core and keep your back straight.</li>
        </ul>

        <h3>Curl the Dumbbell:</h3>
        <ul>
            <li>Slowly bend your corresponding elbow to lift the dumbbell toward your shoulder.</li>
            <li>Keep your upper arm stationary — only move your forearm.</li>
            <li>Squeeze your bicep at the top of the movement.</li>
        </ul>

        <h3>Maintain Form:</h3>
        <ul>
            <li>Keep your wrist straight; don't let it bend backward.</li>
            <li>Avoid swinging your body — control the movement with your arm.</li>
            <li>Keep your elbow close to your torso.</li>
        </ul>

        <h3>Lower the Dumbbell:</h3>
        <ul>
            <li>Slowly lower the dumbbell back to the starting position.</li>
            <li>Inhale as you lower the weight to maintain control.</li>
            <li>Repeat for the desired number of reps, then switch sides if needed.</li>
        </ul>
            

            <div class="button-container">
                <input type="button" value="Go Back" class="back-button" @click="$router.go(-1)" />
            </div>
        </div>

       <div class="image-content">
            <img src="/static/pictures/bicep.png" alt="Bicep Exercise" />
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
