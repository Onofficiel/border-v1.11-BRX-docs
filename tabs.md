# `border.tabs` API

## `border.tabs`

### `create()`
Creates a new tab.

Parameters:<br>
`details:`[`BorderTabOptions`](/tabs.md#tabcreationdetails) Configuration to use when creating the tab.

Returns: A `Promise` resulting in a [`BorderTab`](/tabs.md#bordertab) object.

```javascript
border.tabs.create({ url: "https://www.gooogle.com/" }).then(tab => {
  console.log(tab.title);
});
```

### `remove()`
Removes (closes) a browser tab.

Parameters:<br>
`id:number` The ID of the tab to close.

Returns: A `Promise` resolving with `void` once the tab is closed.

```javascript
border.tabs.remove(tab.id).then(_ => {
  console.log('Tab removed! Yay!')
}
```

### `get()`
Gets a [`BorderTab`](/tabs.md#bordertab) object by its ID.

Parameters:<br>
`id:number` The ID of the tab to resolve.

Returns: A `Promise` resolving with a `[BorderTab](https://borderbrx once the tab is 





