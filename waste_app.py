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

def image_processing(img):
    model = load_model('./model/model2 (1).h5')
    data=[]
    image = Image.open(img)
    image = image.resize((300,300))
    data.append(np.array(image)/255.0)
    X_test=np.array(data)
    print('X 0 FROM AI', X_test)
    try:
        Y_pred = model.predict(X_test)
        print('Y FROM AI',  Y_pred)
        return Y_pred
    except:
        Y_pred = 'trash'
        print("An exception occurred")
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

        # Gets prediction
        result = image_processing(file_path)
        predicted_class = classes[np.argmax(result[0])]
        result2 = predicted_class
        if "trash" not in result2:
            os.remove(file_path)
            # Returns Class
            return result2
        else:
            print('Bad Image!')
            return result2  
    return None

if __name__ == '__main__':
    app.run(debug=True)