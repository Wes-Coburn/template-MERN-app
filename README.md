# Template-MERN-App

Template for a full-stack [MERN](https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client%2Dside%20JavaScript%20framework) app (MongoDB + Express + React + Node)

## Scripts

```shell
npm start #[sequential] run server 'start' THEN run client 'start'
npm test #[parallel] run server 'test' AND run client 'test'
```

## Development

### Packages

```shell
# install all packages and update
npm run install-and-update
```

### Environment Variables

- Configure environment variables.
  - Create 'server/config.env' with ['config.sample-env'](server/config.sample-env) structure.
  - Use built-in environment variables (i.e. for Netlify)
