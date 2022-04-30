from flask import *
import os
from werkzeug.utils import secure_filename
from keras.models import load_model
import numpy as np
from PIL import Image
from keras.preprocessing.image import ImageDataGenerator, img_to_array, load_img, array_to_img
from keras.preprocessing import image
app = Flask(__name__)

# Classes of trafic signs
classes = { 0:'cardboard',
            1:'glass',
            2:'metal',
            3:'paper',
            4:'plastic',
            5:'trash' }

"""
def image_processing(img):
    model = load_model('./model/resnet.pt')
    data=[]
    image = Image.open(img)
    image = image.resize((256,256))
    data.append(np.array(image)/255.0)
    X_test=np.array(data)
    Y_pred = model.predict(X_test)
    return Y_pred
"""


def image_processing(img):
    model = load_model('./model/model2 (1).h5')
    data=[]
    image = Image.open(img)
    image = image.resize((300,300))
    data.append(np.array(image)/255.0)
    X_test=np.array(data)
    Y_pred = model.predict(X_test)
    return Y_pred


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']
        file_path = secure_filename(f.filename)
        f.save(file_path)

        # Make prediction
        result = image_processing(file_path)
        
        predicted_class = classes[np.argmax(result[0])]
        result = predicted_class
        os.remove(file_path)
        return result
    return None

if __name__ == '__main__':
    app.run(debug=True)