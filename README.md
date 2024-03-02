# The Neuk Server

    DESCRIPTION: The Neuk API is is an application that will be the back-end of the_neuk_frontend application. As a whole it is a website to manage the property The Neuk in Kames, Scotland which is to be let to holiday makers. It will give guests the ability to create bookings and pay, and view their bookings with relevant guest information. It will also serve as a blogging website and listing events to give guests information on the local area for site and attractions to visit.

---

## Get Started

Set these environment variables:

```shell
# Where to store images that get rendered to various sections of the page
S3_BUCKET_NAME
# Create an AWS role to access an S3 bucket
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
# Required for JWT authentication, generate a random hex
AUTH_SECRET
```

This is a rails application. To start it on your local host, in your terminal run:

```
$ git clone git@github.com:samyounger/the_neuk.git

$ bundle

$ rails db:create

$ rails db:migrate

$ rails s
```

And you should be good to go :thumbsup:

---

## User authentication

Json Web Token (JWT) authentication has been implemented. Instructions on setup [HERE](https://www.pluralsight.com/guides/ruby-ruby-on-rails/token-based-authentication-with-ruby-on-rails-5-api)

---

# The Neuk Client

A property letting and management website for a property on the West Coast of Scotland, Kames.

The front-end is built with ReactJS, Webpack, and Gulp.

Start the project:

```shell
$ yarn start
```