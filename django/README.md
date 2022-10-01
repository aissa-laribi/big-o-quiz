# Big-O Quiz

Big-O Quiz is a web application designed to help students currently learning DSA. Questions are about complexities regarding operations and algorithms in different data structures.

## Purposes 

Helping students learning DSA, creating web applications on popular Python frameworks such as Flask, Django.

## Setup 🛠
1. Clone or download the repository  
```bash
git clone --branch django https://github.com/aissa-laribi/big-o-quiz.git
cd bigoapp/
```
2. Create and activate virtual environment
```bash
python -m venv venv
```
Windows: `venv\Scripts\activate.bat`  
Linux: `source venv/bin/activate`

3. Install required packages
```bash
pip install django
```

4. Navigate to chat-app-django and run the server
```bash
python manage.py runserver
```
*Note: make migrations if any error occurs*
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Navigate to http://127.0.0.1:8000 on a browser of your choice.