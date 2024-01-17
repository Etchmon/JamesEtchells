// tests/Home.test.js

const React = require("react")
const { render, screen } = require("@testing-library/react")
const Home = require("../../src/app/page")

test("loads and displays HomePage", async () => {
    render(<Home />)

    expect(screen.getByText("Welcome to My Site")).toBeInTheDocument()
})
