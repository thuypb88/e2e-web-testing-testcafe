fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/blog/")
test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText("#developer-name", "AUT")
        .click("#macos")
        .click("#submit-button")
})