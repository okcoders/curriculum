// Spreadsheet
const rows = [
    { first_name: "ErICh", last_name: "Keil", favorite_color: "Blue" },
    { first_name: "Erich", last_name: "SomeOtherErich", favorite_color: "grey" },
    { first_name: "Jason", last_name: "Newsom", favorite_color: "Green" }
];

const erich = rows.find((item) => item.first_name === "Erich");
const howManyErichs = rows.filter((item) => item.first_name.toLowerCase() === "erich").length
console.log(erich);
console.log({ howManyErichs, erich })
/**
 * {howManErichs: howManyErichs}
 */

// Blog Post with Comments
const posts = [
    {
        author: "me",
        title: "the awesomeness of comments and objects",
        comments: [
            { commenter: "Jake", comment: "You rawk!", friends: [] },
            { commenter: "Tondaylea", comment: "Be Better!", friends: [{ name: "Foo", email: "foo@foo.com" }] }
        ]
    }
]

function Comment(commenter, comment) {
    this.commenter = commenter;
    this.comment = comment;
}

posts[0].comments.push(new Comment("New Guy", "Some Words"));
