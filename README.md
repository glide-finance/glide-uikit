# Glide UIkit

[![Version](https://img.shields.io/npm/v/@glide-finance/uikit)](https://www.npmjs.com/package/@glide-finance/uikit) [![Size](https://img.shields.io/bundlephobia/min/@glide-finance/uikit)](https://www.npmjs.com/package/@glide-finance/uikit)

Glide UIkit is a set of React components and hooks used to build pages on Glide's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @glide-finance/uikit`

## Setup

### Theme

Before using Glide UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@glide-finance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@glide-finance/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.