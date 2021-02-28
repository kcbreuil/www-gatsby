/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useRef, useState } from 'react'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components';
import tw from 'twin.macro';

// import NavModal from './NavModal'
// import Header from './Header'
// import './layout.css'
import NewNav from './NewNav'
import Footer from './footer';

const Main = styled.main`
    ${tw`transition duration-1000`}
    background-color: ${({ hasBgColorTransition, isBgTransitioned, isCaseStudy }) => (
        isCaseStudy
            ? 'var(--white)'
            : !hasBgColorTransition
            ? 'var(--brand-2)'
            : isBgTransitioned
            ? 'var(--brand-1)'
            : 'var(--brand-2)'
    )}
`;
export default function Layout ({ hasBgColorTransition, children, darkTheme, hasFooter, isCaseStudy }) {
    const main = useRef();
    const [isBgTransitioned, setisBgTransitioned] = useState(false)

    const handleScroll = () => {
        const elHeight = main.current.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > elHeight * .45) {
            setisBgTransitioned(true);
        } else {
            setisBgTransitioned(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <NewNav darkTheme={darkTheme} isCaseStudy={isCaseStudy} />
                    <Main
                        hasBgColorTransition={hasBgColorTransition}
                        isBgTransitioned={isBgTransitioned}
                        isCaseStudy={isCaseStudy}
                        ref={main}
                    >
                        {children}
                    </Main>
                    {hasFooter &&
                        <Footer />
                    }
                </>
            )}
        />
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
