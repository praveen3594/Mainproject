<template>
    <div class="container">
        <div class="text-content">
            <h2>How to Do a Lunge:</h2>

            <h3>Starting Position:</h3>
            <ul>
                <li>Stand tall with your feet hip-width apart.</li>
                <li>Place your hands on your hips or keep them by your sides.</li>
            </ul>

            <h3>Step Forward:</h3>
            <ul>
                <li>Step forward with your right leg, keeping your torso upright.</li>
                <li>Bend both knees to lower your body until your front thigh is parallel to the floor.</li>
                <li>Make sure your front knee stays above your ankle, not past your toes.</li>
            </ul>

            <h3>Push Back:</h3>
            <ul>
                <li>Press through your front heel to push yourself back to the starting position.</li>
                <li>Maintain control and balance as you return to standing.</li>
            </ul>

            <h3>Repeat:</h3>
            <ul>
                <li>Switch legs and repeat the movement on the other side.</li>
                <li>Perform the desired number of reps, alternating legs or completing one side at a time.</li>
            </ul>

            

            <div class="button-container">
                <input type="button" value="Go Back" class="back-button" @click="$router.go(-1)" />
            </div>
        </div>

       <div class="image-content">
            <img src="/static/pictures/lunges.png" alt="Lunges Exercise" />
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
