## COVID-19 Trusted Sources

Twitter API Project - **Alexandre MOURIEC - Romain GEFFROY**

Our Twitter API Project's goal is to **highlight important tweets about the COVID-19**. It was built during the first 2 weeks of lockdown in France, for a class project. **We used an experts' Twitter list made by [Fortune Magazine](https://fortune.com/2020/03/14/coronavirus-updates-twitter-accounts-covid-19-news/)**.

We wanted to get tweets from **these individuals or companies in the list** and show them in a clean and easy to read interface, for people who don't use Twitter. 

## Tutorial

### Clone the repo

```shell
git clone https://github.com/mrcalexandre/twitter-api-project.git
cd twitter-api-project
```

### Install npm packages for the backend

Navigate to the `backend` folder:

```
cd backend
```



Fill every key and token needed in the app.js file, based on what the Twitter API gave you

```javascript
const client = new Twitter({
  consumer_key: "CONSUMER_KEY",
  consumer_secret: "CONSUMER_SECRET",
  access_token: "ACCESS_TOKEN",
  access_token_secret: "ACCESS_TOKEN_SECRET",
});
```



Install the packages listed in `package.json`:

```shell
npm install
npm run servdev
```

If you have any issue, run this command to start over

```shell
rm -rf node_modules/ && rm -rf package-lock.json && npm install && npm start
```

If you run `npm run servdev` ,it will launch this command `nodemon app.js`, to watch for any modifications in our code. It will run on `4201` port.

You can stop the server using `Ctrl-C`.

### Install npm packages for the backend

Navigate to the `frontend` folder:

```
cd frontend
```

Install the packages listed in `package.json`:

```shell
npm install
ng serve
```

If you have any issue, run this command to start over

```shell
rm -rf node_modules/ && rm -rf package-lock.json && npm install && npm start
```

 `ng serve` will launch TypeScript compilations and watch for any change. It will run on `4200` port.

You can stop the server using `Ctrl-C`.

If needed you can find the Angular documentation here : https://angular.io/docs

---

When everything is done, you can visit http://localhost:4200/home
