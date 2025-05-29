# app.py
import streamlit as st
import numpy as np
import tensorflow as tf
from PIL import Image

@st.cache_resource
def load_model():
    return tf.keras.models.load_model("fashion_classifier.h5")

model = load_model()

class_names = [
    "T-shirt/top", "Trouser", "Pullover", "Dress", "Coat",
    "Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"
]

st.set_page_config(page_title="Fashion Classifier", page_icon="👗")
st.title("👗 Fashion Image Classifier")
st.write("Upload a clothing image to identify the category.")

uploaded_file = st.file_uploader("Upload image", type=["png", "jpg", "jpeg"])

if uploaded_file:
    try:
        img = Image.open(uploaded_file).convert("L").resize((28, 28))
        img_array = np.array(img) / 255.0
        img_array = img_array.reshape(1, 28, 28)

        prediction = model.predict(img_array)
        label = class_names[np.argmax(prediction)]
        confidence = round(100 * np.max(prediction), 2)

        st.image(img, caption="Uploaded Image", width=150)
        st.success(f"Prediction: **{label}** ({confidence}% confidence)")
    except Exception as e:
        st.error(f"Error: {e}")
