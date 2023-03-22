# Type Structures

## Events

### `BorderMessageEvent`
Received when the `message` event on [`border.runtime`](/runtime.md) is fired.
```javascript
{
  "bubbles": false,
  "cancelable": false,
  "message": "[this string includes the message]",
  "sender": {
    "id": "...",
    "reply": function Anonymous(reply) { ... }
  }
}
```
