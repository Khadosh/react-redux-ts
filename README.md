## How To Run
```sh
$ cd react-redux-ts
$ yarn install
$ yarn start
```

## Required
- Node >= v10.16.3
- Yarn >= v1.22.4

## Environment Variables
Since this project is not using predefiend configuration for eslint therefore it's needed to overrid that configuration following the `.env.example` file.

## Tasks
[x] Setup Project
[ ] Decide Folder structure
[ ] Create Responsive Main Layout
[ ] Create main logic and retrieve all posts from reddit + UT
[ ] Create Post Payload to filter Post information + UT
[ ] Create Post List component - Drawer + Detail
[ ] Show post detail on click + UT - Expandable vs Modal
[ ] Remove Post from list + UT
[ ] Remove all posts + UT
[ ] Fetch more posts + UT
[ ] Pagination vs Infinite Scrolling + UT
[ ] Filter + UT
[ ] Add CSS Animations

## Online Resources
- https://www.npmjs.com/package/cra-template-redux-typescript
- https://enbonnet.me/article/46/usar-eslint-y-prettier-en-proyectos-typescript
- https://github.com/typescript-eslint/typescript-eslint/issues/1845
- https://github.com/reduxjs/redux-toolkit/blob/master/docs/api/createSlice.md

## Endpoints
https://www.reddit.com/top.json?limit=10&t=month&after=<Provided after first request>
