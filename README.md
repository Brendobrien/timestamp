# Timestamp Microservice

<a href="https://brendobrien-timestamp.herokuapp.com">https://brendobrien-timestamp.herokuapp.com</a>

## Upgrading to heroku 18

https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack#upgrading-an-app

```
heroku stack:set heroku-18 -a brendobrien-timestamp
heroku git:remote -a brendobrien-timestamp
git commit --allow-empty -m "Upgrading to heroku-18" && git push heroku master
```
