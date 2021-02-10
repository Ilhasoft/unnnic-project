# Unnnic-project

### Install dependancies
```
yarn install
```

### Launches storyboard for documentation view
```
yarn storybook
```

Inside the "Docs" tab, click "Show Code" to see an example of the component being used

## Importing the project

Add library to your Vue.js project
```
yarn add unnnic-project
```

Import and use components as needed

Ex.:
```
<template>
    <unnnic-input placeholder="Placeholder" />
</template>

<script>
import { unnnicInput } from 'unnnic-project';

export default {
  components: {
    unnnicInput,
  },
};
</script>

<style>
@import '~unnnic-project/dist/unnnic.css';
</style>


```