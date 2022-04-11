/**
 * 
 * This file have in-hour secret recipe function tha enables web sharing of content
 */

export function copyToClipboard(text) {
    try {
      var textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
      return true;
    } catch {
      console.log("Can't copy to clipboard.");
      return false;
    }
  }
  

export function generate_url(type, data) {
    let result = undefined;
    let final;
    switch (type) {
        case "snapchat":
            return `https://www.snapchat.com/scan?attachmentUrl=https%3A%2F%2Fjinz.herokuapp.com/${data.linkId}%2F`;
        case "whatsapp":
            return `whatsapp://send?${data.number}&text=${data.text + " " + data.url
                }`;
        case "twitterchat":
            return `https://twitter.com/messages/compose?text=${data.text} ${data.url}`;

        case "twittertweet":
            return `https://twitter.com/intent/tweet?text=${data.text} ${data.url}`;

        case "redditpost":
            final = "https://www.reddit.com/submit?";
            if (data.url) final += `url=${data.url}`;
            if (data.text) final += `&title=${data.text}`;
            return final;
        case "gmail":
            final = "mailto:?subject=";
            final += data.text;
            final += "&body=" + data.url;
            return final;
        case "imessage":
            return `sms:&body=${data.text} ${data.url}"`;

    }
}