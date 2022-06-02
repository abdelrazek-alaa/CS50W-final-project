# CS50 Web Final project ( Full Stack React-Django Web App)

Fully-Customizable Web App with a Modern UI using React & Tailwind CSS for frontend and RESTful API using Django REST framework on the backend

## Structure:

The project is structured as follows :

- capstone: This is the app created using django.
- final_project: This is the main Django ‘startproject’ folder
- frontend: This is the frontend app created using ReactJs.

## Created and edited files

The following is the file structure of the project where I added or modified. Default project files are omitted.

- ### capstone ( Django App )

  - `admin.py : ` This file tells Django which models we would like to have access to in the admin app.
  - `models.py : ` All the app models are stored here
  - `serializers.py : ` Django REST framework file responsible for serializing model data
  - `views.py : ` The API endpoints views

- ### final_project ( Root Django App )

  - `settings.py : ` App's Setting file, i've added these keys MEDIA_ROOT, MEDIA_URL to Serving files uploaded by a user.
  - `urls.py : ` URL Configuration file & register Api endpoints

- ### frontend (App's FrontEnd)

  - `public : ` React's Public Folder
    - `images : ` Svg files like arrow or close icons.
  - `src : ` React's source Folder
    - `components : ` App's Components
      - `App.js : ` App's Main Component
      - `Contact.js : ` App's Contact Section Component
      - `Download.js : ` App's Download Section Component
      - `FAQ.js : ` App's Frequently Asked Questions Section Component
      - `Features.js : ` App's Features Section Component
      - `Footer.js : ` App's Footer Component
      - `Intro.js : ` App's Intro Section Component
      - `Loading.js : ` App's Loading Component
      - `Navigation.js : ` App's Navigation Component
  - `index.css : ` Css file for Tailwindcss directives and custom font
  - `tailwind.config.js : ` add custom colors and font for tailwindcss

- ### Root Directory
  - `media : ` Backend media files ( uploaded files are stored here )
  - `requirements.txt : ` Python packages' file, Besides Django i only used Django REST framework
  - `package.json : ` App's metadata file, i've used a proxy key to redirect requests to the backend ip & port
  - `README.md: ` App's Readme File

## used libraries/packages :

### Front-end

1. React
1. Tailwindcss
1. headlessui/react

### Back-end

1. Django
1. Django REST framework

## How to run the application.

To get this project up and running locally on your computer, please do the following :

### Back-end :

1. you have to install Django and Django REST framework, you can Install both of them using :

```
python -m pip install -r requirements.txt

```

2. run the server

```
python manage.py runserver
```

### Front-end :

1. go to frontend directory :

```
cd frontend
```

1. install frontend dependencies :

```
npm install
```

1. run the app :

```
  npm start

```

screencast demonstrate my project’s functionality:

- https://youtu.be/s43sqfidBSc
