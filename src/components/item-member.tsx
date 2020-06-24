import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const ItemMember = ({ data }) => {
    const [focused, changeFocused] = useState(false)

    return (
        <div className="blog-item w-full md:w-1/2 lg:w-1/4 p-4">
            <div
                className={`transition-all duration-300 hover:shadow-2xl shadow ${focused &&
                    "focused"}`}
            >
                <Link
                    to={data.fields.slug}
                    title={data.frontmatter.fullname}
                    onFocus={() => changeFocused(true)}
                    onBlur={() => changeFocused(false)}
                >
                    <div className="image">
                        <Img
                            fluid={
                                data.frontmatter.avatar.childImageSharp.fluid
                            }
                            alt={data.frontmatter.fullname}
                            className="w-full"
                        />
                    </div>
                    <div className="p-4 py-3">
                        <h4 className="text-color-2 font-black text-2xl pt-1">
                            {data.frontmatter.fullname}
                        </h4>
                        <h2 className="text-2xl font-sans">
                            {data.frontmatter.role}
                        </h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemMember
