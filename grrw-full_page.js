console.log("extension is initialized")

const review_box = document.querySelector(".textBox", ".largeTextBox", ".reviewUserText", ".js-reviewUserText")

function complete(tag, offset) {
    if (tag === 'img src="" alt=""') {
        offset += 8
        tag_end = ""
    } else if (tag === 'a href=""') {
        offset += 1
        tag_end = "</a>"
    } else {
        tag_end = `</${tag}>`
    }

    offset += tag_end.length

    return {
        "start": `<${tag}>`,
        "end": tag_end,
        "offset": offset,
    }
    // [`<${tag_start}>`, tag_end, tag_end.length]
}

console.log(review_box)
if (review_box != null) {
    console.log("review box is found")

    let await_action = false
    const possible_actions = ['u', 'i', 'q', 't', 'b', 'p', 's', 'e', 'a', 'I']

    review_box.addEventListener("input", function(key) {
        console.log(key)
        let kp = key["data"]

        console.log(kp)
        console.log(await_action)

        // console.log(actions_buf)

        if (kp == "<" && await_action === false) {
            console.log("await action")
            await_action = true
        } else {
            console.log(possible_actions.includes(kp))
            console.log(await_action === true)
            if (possible_actions.includes(kp) && await_action === true) {
                console.log("action")
                let replace = {}
                const offset = review_box.value.length - review_box.selectionEnd 
                switch (kp) {
                    case 'q':
                        replace = complete("blockquote", offset); break
                    case 's':
                        replace = complete("spoiler", offset); break
                    case 'e':
                        replace = complete("pre", offset); break
                    case 't':
                        replace = complete("s", offset); break
                    case 'a':
                        replace = complete('a href=""', offset); break
                    case 'I':
                        replace = complete('img src="" alt=""', offset); break
                    default: 
                        replace = complete(kp, offset); break
                }
                console.log(replace)

                const start = review_box.value.substring(0, (review_box.selectionStart - 2)) + replace["start"]
                const end = replace["end"] + review_box.value.substring(review_box.selectionEnd)

                const added_result = start + end
                review_box.value = added_result

                review_box.focus()

                review_box.selectionEnd -= replace["offset"]

                await_action = false
            } else {
                console.log("action cancelled")
                await_action = false
                review_box.focus()
            }
        }
    })
}
