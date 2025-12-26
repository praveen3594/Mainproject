<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigation = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
        router.push(selectedPath);
    }
};

</script>

<template>
    <div class="container">
        <div class="box">
            <RouterLink :to="{ name: 'ExcerciseSelection' }" class="box_link">
                <!--<i class="fa-solid fa-video"></i>-->
                <img src="../views/video.png" alt="Real Time" class="icon" />
                <p class="box__description">Real Time</p>
            </RouterLink>
        </div>

        <div class="box">
            <RouterLink :to="{ name: 'VideoStreaming' }" class="box_link">
                <!--<i class="fa-solid fa-upload"></i>-->
                <img src="../views/upload.png" alt="Real Time" class="icon" />
                <p class="box__description">Upload a video</p>
            </RouterLink>
        </div>

        <!--
        <div class="box">
        <RouterLink :to="{ name: 'LearnExercise' }" class="box_link">
            <img src="../views/upload.png" alt="Learn Exercise" class="icon" />
            <p class="box__description">Learn Exercise</p>
        </RouterLink>
        </div>

    -->


    <div class="box1">
            <div class="box_link">
                <!--<img src="../views/upload.png" alt="Learn Exercise" class="icon" />
                <p class="box__description">Learn Exercise</p>-->
                <select @change="handleNavigation" class="dropdown">
                    <option value="">Learn Exercises</option>
                    <option value="/learn/squat">Squat Guide</option>
                    <option value="/learn/pushup">Pushup Guide</option>
                    <option value="/learn/bicep">Bicep Guide</option>
                    <option value="/learn/plank">Plank Guide</option>
                    <option value="/learn/lunges">Lunges Guide</option>
                </select>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.box {
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3; /* Light gray background */
    border-radius: 30px; /* Rounded corners */
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
 /* Subtle shadow */
    transition: transform 0.3s ease-in-out;
    border: 2px solid black; 
}

.box:hover {
    transform: rotate(5deg) scale(1.05);
    transition: transform 0.3s ease-in-out;
}

.box_link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    
}

.box__description {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight:lighter;
}
.icon {
    width: 50px;  
    height: 50px; 
    object-fit: contain; /* Ensures image is properly fitted */
}






/* Style the dropdown */
.dropdown {
    width: 200px;
    height: 130px;
    margin-top: 1rem;
    padding: 8px 12px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    border-radius: 30px;
    font-size: 18px;
    cursor: pointer;
    background-color: #fff;
    color: black;
    border: 2px solid black; 
    
}

.dropdown:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    
}


.dropdown:focus {
    outline: none;
    border-color: #4b42d4;
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);
}


.dropdown {
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none;    /* Firefox */
    appearance: none;         /* Standard */
    background-image: none;   /* Remove background icon */
    padding-left: 30px;     /* Adjust padding to balance */
}
</style>