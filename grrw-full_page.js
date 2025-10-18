console.log("extension is initialized")

const review_box = document.querySelector(".textBox", ".largeTextBox", ".reviewUserText", ".js-reviewUserText")

console.log(review_box)
if (review_box != null) {
    console.log("review box is found")

    let await_action = false

    review_box.addEventListener("input", function(key) {
        console.log(key)
        let kp = key["data"]

        if (kp != null) {
            kp = kp.toLowerCase()
        }
        console.log(kp)
        console.log(await_action)

        // console.log(actions_buf)

        if (kp == "<" && await_action === false) {
            console.log("await action")
            await_action = true
        } else {
            if (kp in ['u', 'i', 'q', 't', 'b', 'p', 's', 'e'] && await_action === true) {
                console.log("action")
                let tag_name = ""
                switch (kp) {
                    case 'q':
                        tag_name = "blockquote"; break
                    case 's':
                        tag_name = "spoiler"; break
                    case 'e':
                        tag_name = "pre"; break
                    default:
                        tag_name = kp; break
                }
                console.log(tag_name)

                review_box.value += ">"
                review_box.selectionEnd++
                review_box.value += `</&{tag_name}>`
            } else {
                console.log("action cancelled")
                await_action = false
            }
        }
    })
}
