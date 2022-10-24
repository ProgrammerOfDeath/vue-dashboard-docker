# vue-dashboard-docker
Simple dashboard application with Vue

## What you need

You need to have docker installed.

You also can install everything locally. Than you'll need node installed (v16.8).

## Project setup
```
docker-compose up -d --build
```

or 

```
npm install && npm run serve
```

Afterwards, you should access the site under
```
localhost:8080
```

## Lints and fixes files
```
docker-compose exec frontend npm run lint
```

## Features

- Light/dark theme support
- Docker
- Responsive
- TypeScript
- DaisyUI with Tailwind
- Vue3 with composition API
