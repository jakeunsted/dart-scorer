import speech_recognition as sr
import requests

# Initialize the recognizer
recognizer = sr.Recognizer()

# Function to convert speech to text
def speech_to_text():
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        audio = recognizer.listen(source)  # Listen for audio input

        try:
            print("Recognizing...")
            text = recognizer.recognize_google(audio)  # Recognize speech using Google Speech Recognition
            return text
        except sr.UnknownValueError:
            print("Sorry, I couldn't understand what you said.")
            return ""
        except sr.RequestError as e:
            print("Could not request results from Google Speech Recognition service; {}".format(e))
            return ""

# Function to post data to a local server
def post_to_server(number):
    url = 'http://localhost:3000/dart/score'
    data = {'score': number}  # Data to be sent in the POST request
    try:
        response = requests.post(url, json=data)  # Send POST request with JSON data
        if response.status_code == 200:
            print("Number sent successfully to server.")
        else:
            print("Failed to send number to server. Status code:", response.status_code)
    except requests.RequestException as e:
        print("Error sending POST request:", e)

# Main function
if __name__ == "__main__":
    while True:
        text = speech_to_text()
        if text.isdigit():  # Check if the recognized text is a number
            print("You said:", text)
            post_to_server(text)
        elif text.startswith("double"):  # Check if the recognized text starts with "double"
            number = text.split("double")[1].strip()  # Remove "double" from the recognized text
            if number.isdigit():
                print("You said: double", number)
                post_to_server(number)
        # else:
        #     print('nope')
