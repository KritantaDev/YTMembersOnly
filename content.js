var sheets = document.styleSheets;
var sheet = document.styleSheets[sheets.length - 1];

sheet.insertRule("yt-live-chat-text-message-renderer {display: none!important;}");
sheet.insertRule("yt-live-chat-text-message-renderer.ytsanechat-show {display: inherit!important;}");

const targetNode = document.getElementsByClassName('yt-live-chat-item-list-renderer')[0].children[0].querySelector('#item-offset #items');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) 
{
    for(const mutation of mutationsList) 
    {
        if (mutation.type === 'childList') 
        {
            // Messages in spammy streams are rendered in batches
            for (const item of mutation.addedNodes) 
            {
                var isMemberElement = false;
                if (item.localName == "yt-live-chat-text-message-renderer") 
                {
                    if (item.attributes.length >= 3 && item.attributes[2].value == "member")
                    {
                        isMemberElement = true;
                    }
                    if (!isMemberElement)
                    {
                        item.remove();
                    }
                    else 
                    {
                        item.classList.add("ytsanechat-show");
                    }
                }

           }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);