/**
 * The namespace used to access all of Border's extension APIs.
 */
namespace border {
    /**
     * Access the Blugin runtime API.
     */
    export declare namespace runtime {
        /**
         * Send a message from an extension page to the background context.
         * @param message The content of the message.
         * @param onreply An optional function to call when the message is replied to.
         */
        function sendMessage(
            message: string,
            onreply?: (reply) => void
        ):void;
        /**
         * Gets the extension manifest.
         */
        function getManifest(): {
            name: string,
            description?: string,
            version: string,
            manifest_version: number,
            permissions?: string[],
            icons?: {
                [string]: string
            },
            background?: {
                scripts?: string[]
            }
        }
        function on<K extends keyof BorderRuntimeEventType>(
            type: K,
            callback: (event: BorderRuntimeEventType[K]) => any
        )
    }
}

interface BorderRuntimeEventType {
    "message": BorderRuntimeMessageEvent
}