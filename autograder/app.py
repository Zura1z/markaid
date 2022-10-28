from flask import Flask,render_template, request, redirect, flash
from werkzeug.utils import secure_filename
import os
import html
import pandas as pd
import pytesseract

try:  
    from PIL import Image
except ImportError:  
    import Image
    
from sklearn.svm import LinearSVC
import pickle

UPLOAD_FOLDER = "F:\\\flask_projects\\\discourse_frontend\\uploaded\\"
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
classed_span_format = '<span class="{}">{}</span>'
pre_line_p_format = '<p style="white-space: pre-line">{}</p>'

train = pd.read_csv('./train/train.csv')
train[['discourse_id', 'discourse_start', 'discourse_end']] = train[['discourse_id', 'discourse_start', 'discourse_end']].astype(int)

mainfilename = ""


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/discourse_home')
@app.route('/discourse_home/')
def discourse_home():
    return render_template('discourse_home.html')
@app.route('/discourse/')
def discourse(text=None):
    if text:
        return render_template('discourse.html', text=text)
    else:
        return render_template('discourse.html')



def add_fonts(text, parts):
    full_parts = []
    if parts is None or len(parts) == 0:
        full_parts = [[0, len(text), None]]
    else:
        parts.sort()
        full_parts.append([0, parts[0][0], None])
        for i in range(len(parts)):
            full_parts.append(parts[i])
            if i+1<len(parts):
                full_parts.append([parts[i][1], parts[i+1][0], None])
            else:
                full_parts.append([parts[i][1], len(text), None])
    full_parts_rendered = []
    for part in full_parts:
        text_html = html.escape(text[part[0]:part[1]])
        if part[2] is None:
            full_parts_rendered.append(text_html)
        else:
            full_parts_rendered.append(classed_span_format.format(part[2].lower().replace(' ','_'), text_html))
    html_p = pre_line_p_format.format(''.join(full_parts_rendered))
    # html_p = html_p.replace('\n\n', '</p><p>')
    return html_p

def get_parts(query_id):
	x = train.query('id == "' + query_id + '"')
	parts = [list(x.iloc[i][['discourse_start','discourse_end','discourse_type']]) for i in range(len(x))]
	return parts

def display_text(query_id):
    if query_id == 'imgtext':
        with open('imgtext.txt', 'r') as f:
            t = f.read()
            return t
    with open("./train/" + query_id + ".txt", 'rt') as f:
        t = f.read()
    t.replace('Â','')
    return add_fonts(t, get_parts(query_id))

@app.route('/labelling', methods=['POST'])
def labelling():
    filename = request.form.get('filename')
    textfield = request.form.get('textfield')
    return render_template('labelling.html', data = display_text(filename.replace('.txt', '')))

@app.route('/copysidebar')
@app.route('/copysidebar/')
def copysidebar():
    return render_template('copysidebar.html')