## Live Demo
https://stoic-fermi-6acad6.netlify.app/

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
- [x] Setup Project
- [x] Deploy the repo on Netlify
- [x] Decide Folder structure
- [x] Create Responsive Main Layout
- [x] Create main logic and retrieve all posts from reddit + UT
- [x] Create Post Payload to filter Post information + UT
- [x] Create Post List component - Drawer + Detail
- [x] Show post detail on click + UT - Expandable vs Modal
- [x] Remove Post from list + UT
- [x] Remove all posts + UT
- [x] Fetch more posts + UT
- [x] Add CSS Animations

## Decition Making
- I choose the typescript template since I didn't use typescript before and I found this as a good oportunity to learn deeper about it.
- On the layout, I chose a variation of the holy grail layout, listed on the online resources.
- I loved the new sliced implementation of redux, specially how clean it is, so I decided to go for it instead of the old school.
- I chose styled-components for many reasons, but the one I like most is because it can handle the styling "logic" into a separate component and just inject props into to fire how to behave, instead of having complex (hard-to-read) implementations on the component to change the layout according the combination of viewport + application state.
- React Testing Library instead of Enzyme: I always found enzyme counter-intuitive and you need to read a lot of documentation to test stuff that will mostly change on time (because it depends on the implementation). Instead react-testing-library relies on the functionality instead.
- I followed the dry principle (don't repeat yourself) by adding redux selectors to remove code duplication on components

## Online Resources
- https://www.npmjs.com/package/cra-template-redux-typescript
- https://enbonnet.me/article/46/usar-eslint-y-prettier-en-proyectos-typescript
- https://github.com/typescript-eslint/typescript-eslint/issues/1845
- https://github.com/reduxjs/redux-toolkit/blob/master/docs/api/createSlice.md
- https://en.wikipedia.org/wiki/Holy_grail_(web_design)#CSS_Flexible_Box_Layout_(Flexbox)
- https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
- https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21#:~:text=Styled%20Components%20help%20keep%20the,multitude%20of%20conditional%20class%20names.
- https://testing-library.com/docs/react-testing-library/intro#:~:text=The%20React%20Testing%20Library%20is,that%20encourages%20better%20testing%20practices.&text=The%20utilities%20this%20library%20provides,same%20way%20the%20user%20would.
- https://testing-library.com/docs/guiding-principles
- https://momentjs.com/docs/#/displaying/fromnow/
- https://styled-components.com/docs/basics#animations
- https://stackoverflow.com/questions/24111813/
- https://refactoring.guru/
- https://testing-library.com/docs/example-react-redux
- https://www.youtube.com/watch?v=h7ukDItVN_o 
- https://codesandbox.io/s/pk22r6rkzm?module=%2Fsrc%2F__tests__%2Freact-redux.js
- https://github.com/facebook/jest/issues/2007
- https://testing-library.com/docs/guide-disappearance

## Endpoints
https://www.reddit.com/top.json?limit=10&t=month&after=<Provided after first request>
