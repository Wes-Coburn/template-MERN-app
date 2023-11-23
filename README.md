# Template-MERN-App

[@Wes-Coburn](https://github.com/Wes-Coburn)

```shell
npx degit Wes-Coburn/template-MERN-app my-app
```

---

## Description

-> Template for a full-stack [MERN](https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client%2Dside%20JavaScript%20framework) app (MongoDB + Express + React + Node)

## Technologies

- Node
- TypeScript
- React
- Redux
- React-Router
- Vite
- Vitest
- React Testing Library
- [React-Helmet](https://www.npmjs.com/package/react-helmet)
- [React-Awesome-Reveal](https://www.npmjs.com/package/react-awesome-reveal)

## Development

### TODO!

- Create 'server/config.env' with ['config.sample-env'](server/config.sample-env) structure.
  - Alternatively, configure *secrets* in your deployment.
- Update [manifest.json](/client/manifest.json)
- Update [appInfo.json](/client//appInfo.json)
- Remove [responsive.ts](/client/src/app/responsive.ts) unless mobile subdomain is configured ('m.')

## Scripts

```shell
# install and update all packages
npm run install-update

#[sequential] run server 'start' THEN run client 'start'
npm start

#[parallel] run server 'test' AND run client 'test'
npm test
```
