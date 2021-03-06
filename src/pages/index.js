import React, { Component, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

class ApiCall extends Component {
    constructor() {
        super();
        this.state = {
            todo: {}
        };
    }

    render() {
        useEffect(a => {
            console.log(window);
        }, [])
        const { todo } = this.state;
        console.log(todo)
        return (
            <Layout>
                <Seo title="Home" />
                <h1>Hi Ahmet</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                />
                <p>
                    <Link to="/page-2/">Go to page 2</Link> <br />
                    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
                </p>
            </Layout>
        );
    }
}

export default ApiCall;
