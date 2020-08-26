# material-ui-hooks

Hooks utilities for material-ui

## Installation

```
yarn add @maruware/material-ui-hooks
```

## Usage

### useTextField 

```ts
const [text, handleChange] = useTextField()
// with set
const [text, handleChange, setText] = useTextField()
```

### useNumberField

```ts
const [num, handleChange] = useNumberField('int', 0)
```

### useSelectField

```ts
const [val, handleChange, setVal] = useSelectField<string>()
```

### useCheckboxField

```ts
const [checked, handleChange, setChecked] = useCheckboxField(false)
```

###  useOpen

for toggling Dialog

```ts
const [open, handleOpen, handleClose] = useOpen()
```
