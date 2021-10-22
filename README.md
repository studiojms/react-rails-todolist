# README

This project is a simple getting started to Rails as API, using React as the view lib.

It uses a db based on docker, so to run the app it's needed to, first, start up the containter as follows:

```
docker compose up
```

Then, create the db using:

```
rails db:create
```

and finally, create the migrations:

```
rails db:migrate
```
