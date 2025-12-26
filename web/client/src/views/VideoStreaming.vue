<script setup> 
import { ref } from "vue"; 
import axios from "axios"; 
 
import Dropzone from "../components/Dropzone.vue"; 
import DropzoneLoading from "../components/DropzoneLoading.vue"; 
import Result from "../components/Result.vue"; 
 
const apiUrl = "http://127.0.0.1:8000"; 
 
const EXERCISES = ["squat", "plank", "bicep_curl", "lunge"]; 
 
const submitData = ref({ 
    videoFile: null, 
    exerciseType: null, 
}); 
const processedData = ref(null); 
const isProcessing = ref(false); 
 
const uploadToServer = async () => { 
    if (!submitData.value.videoFile) { 
        alert("No video selected"); 
        return; 
    } 
 
    if (!submitData.value.exerciseType) { 
        alert("No exercise type selected"); 
        return; 
    } 
 
    processedData.value = null; 
    try { 
        isProcessing.value = true; 
        const formData = new FormData(); 
        formData.append("file", submitData.value.videoFile); 
        formData.append("type", submitData.value.exerciseType); 
 
        console.log("Sending request to:", `${apiUrl}/api/video/upload?type=${submitData.value.exerciseType}`); 
        console.log("FormData:", formData); 
 
        const { data } = await axios.post( 
            `${apiUrl}/api/video/upload?type=${submitData.value.exerciseType}`, 
            formData, 
            { 
                headers: { 
                    "Content-Type": "multipart/form-data", 
                }, 
            } 
        ); 
        processedData.value = data; 
    } catch (e) { 
        console.error("Error uploading video:", e); 
        alert("Failed to upload video"); 
    } finally { 
        isProcessing.value = false; 
    } 
}; 
</script> 
 
<template> 
    <!-- Input section --> 
    <section class="input-section"> 
        <Dropzone 
            v-show="!isProcessing" 
            @file-uploaded="(file) => (submitData.videoFile = file)" 
        /> 
        <DropzoneLoading v-show="isProcessing" /> 
 
        <div class="right-container"> 
            <!-- exercises selection --> 
            <div class="exercises-container"> 
                <p 
                    class="exercise" 
                    v-for="exercise in EXERCISES" 
                    :class="{ active: submitData.exerciseType == exercise }" 
                    @click="submitData.exerciseType = exercise" 
                > 
                    {{ exercise }} 
                </p> 
            </div> 
 
            <button class="process-btn" @click="uploadToServer"> 
                <span>Process!</span> 
            </button> 
        </div> 
    </section> 
 
    <!-- Results section --> 
    <Result v-if="processedData" :data="processedData" /> 
</template> 
 
<style lang="scss" scoped> 
.input-section { 
    margin-top: 70px;
    display: flex; 
    gap: 1rem; 
 
    * { 
        flex: 1; 
    } 

    
 
    .right-container { 
        display: flex; 
        flex-direction: column; 
        width: 100%; 
        padding-left: 100px;
 
        .exercises-container { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 1rem; 
            margin-bottom: 1rem; 
            transition: all 0.25s ease-in-out;
 
            .exercise { 
                font-family: Arial, sans-serif;
                display: flex; 
                max-width: 200px;
                justify-content: center; 
                align-items: center; 
                padding: 1rem 0; 
                flex: 45%; 
                color: #ffffff;
                border: none; 
                text-transform: uppercase; 
                background: linear-gradient(135deg, #4575be, #3e15e3);
                border-radius: 20px; 
                cursor: pointer; 
                transition: all 0.25s ease; 
 
                &:hover { 
 
                    transform: translateY(-6px);
                    background: linear-gradient(135deg, #4b42d4, #6c63ff);
                    
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
   
                } 
 
                &.active { 
                    background: rgb(255, 0, 195); 
                    font-weight: 800; 
                    color: #fff;
                    border: 2px solid #fafafa;
                } 
            } 
        } 
 
        .process-btn { 
            border: none; 
            background-color: rgb(255, 0, 81); 
            padding: 1.25rem 0; 
            max-width: 150px;
            max-height: 70px;
            margin-left: 130px;
 
            color: whitesmoke; 
            font-size: 1.3rem; 
            font-weight: 700;
            cursor: pointer; 
            border-radius: 20px; 
            transition: all 0.25s ease; 
 
            &:hover { 
                box-shadow: 0 6px 18px 0 rgba(#000, 0.1); 
                color: rgb(0, 128, 255); 
                border-color: transparent; 
                color: rgb(0, 200, 255);
                
                transform: translateY(-6px); 
                 
            } 
        } 
    } 
} 
</style>