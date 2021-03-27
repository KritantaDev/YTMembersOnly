var sheets = document.styleSheets;
var sheet = document.styleSheets[sheets.length - 1];

sheet.insertRule("yt-live-chat-text-message-renderer {display: none!important;}");
sheet.insertRule("yt-live-chat-text-message-renderer[author-type=\"member\"] {display: inherit!important;}");
sheet.insertRule("yt-live-chat-membership-item-renderer[show-only-header] {display: none!important;}");