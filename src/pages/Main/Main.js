import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects} from '../../components'
import GitHubStats from '../../components/Github/GithubStats'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            {/* <Blog /> */}
            {/* <Achievement /> */}
            {/* <Services /> */}
            <GitHubStats />
            {/* <Testimonials/> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
