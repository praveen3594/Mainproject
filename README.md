Prerequisites

1. Backend Framework: python >= 3.9, flask, mediapipe
   - Other Software Dependencies

Installation

1. Clone the repository:

   ```bash
   https://github.com/Sovik-Ghosh/GymJam-AI-assistant-using-mediapipe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend
   ```

3. Create a virtual environment:
    ```bash
    python3 -m venv my_env
    ```

4. Activate the virtual environment:
    ```bash
    source my_env/bin/activate
    ```

5. Install dependencies (if any) and set up your development environment.
   ```bash
   pip3 -r requirements.txt
   ```
## Framework

### Mediapipe:

![](assets/pipe.jpeg)

MediaPipe is an open-source framework developed by Google that provides a comprehensive solution for building machine learning (ML) pipelines to process multimedia data, including video, audio, and image streams. It is designed to facilitate the development of real-time perception and processing pipelines, particularly for tasks related to computer vision and media processing.

## Running the Simulation

1. Go to backend directory

2. Activate the virtual environment:
    ```bash
    source my_env/bin/activate
    ```
    

3. Run the code:
    ```bash
    python app.py
    ```

4. Copy and paste anyone of the url in a browser.
    - Left Bicep Curl:
        ```
        http://localhost:5000/video_feed_left
        ```
    - Right Bicep Curl:
        ```
        http://localhost:5000/video_feed_right
        ```
    - Pushup:
        ```
        http://localhost:5000/video_feed_pushup
        ```
    - Squat:
        ```
        http://localhost:5000/video_feed_squat
        ```




