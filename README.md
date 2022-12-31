## Requirements

- Typescript >= 4.5.x
- node >= 16.x
- pnpm

## Install

Any package manager should do the trick but i recommend using [Pnpm](https://pnpm.io).

```bash
pnpm i
```

## Start

### Dev

```bash
pnpm start:dev
```

### Production

You need to transpile the Typescript because executing the command.

```bash
pnpm tsc && pnpm start:production
```

## Tests & Lint

```bash
pnpm test
```

```bash
pnpm lint
```
