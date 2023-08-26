// Here is the Word Captilizer function which help you to captilize your headings, blogs, titles...

export const capitlize = (words) => {

    let data = words.split(" ");
    let capitalWords = data.map((val) => {
        return val.charAt(0).toUpperCase() + val.slice(1)
    });

    return capitalWords.join(" ");
}

console.log(capitlize("hello world")) // -> Hello World
