# `border.runtime` API

## `border.runtime`

### `sendMessage()`
Sends a message to another page in the extension.

Parameters:<br>
`message: string` The message to send.<br>
`onreply?: (reply: string) => void` A function to call once the message has been replied to via `event.sender.reply`.

Returns: Nothing.
```javascript
border.runtime.sendMessage("this-is-the-message", (reply) => {
  console.log(`Reply received: ${reply}`);
});
```

### `message` event
Fired when one of the extension's pages receives a message.

Fires: A [`BorderMessageEvent`](/events.md#bordermessageevent)

```javascript
border.runtime.on("message", function (event) {
  if(event.message == "this-is-the-message") {
    event.sender.reply("...")
  }
});
```

### `getManifest()`
Gets the extension's [`manifest.json`](/manifest.md) file.

Parameters:<br>
None.

Returns: An [`Object`](/types.md#Object) containing the contents of the [`manifest.json`](/manifest.md) file.

```javascript
console.log(`Welcome to ${border.runtime.getManifest().name}, version ${border.runtime.getManifest().version}!`)
```
