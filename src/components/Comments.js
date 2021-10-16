import React from "react"
import GiTalk from "gatsby-plugin-gitalk"

const Comments = ({ post }) => {
  const gitalkConfig = {
    id: post.slug || post.id,
    title: post.frontmatter.title,
  }
  return <GiTalk options={gitalkConfig} />
}
export default Comments
