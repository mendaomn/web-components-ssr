# WebComponentsSSR
Experiments in the realm of SSR for Web Components

## Idea
I am trying to create a thin layer of abstraction that will allow to render Web Components on the server. Specifically, it relies on [server-components](https://github.com/pimterry/server-components) while trying to remove the need of authoring the Web Components twice. 

Basic goal: write components once, render both on the client and on the server
