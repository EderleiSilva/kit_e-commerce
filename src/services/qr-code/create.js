import prompt from "prompt";
import promptQRCorde from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(promptQRCorde, handle);

    prompt.start();
}

export default createQRCode;