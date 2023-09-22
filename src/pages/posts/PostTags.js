import React, { useEffect, useState } from "react";
import { Badge } from 'react-bootstrap';
import { axiosReq } from "../../api/axiosDefaults";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import postTagsStyles from "../../styles/PostTags.module.css";


const PostTags = ({ mobile, onClick }) => {

  const [tags, setTags] = useState({ results: [] });

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/tags`);
        setTags(data);
      } catch (err) {
        console.log(err);
      }
    };

    const timer = setTimeout(() => {
      fetchTags();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClick=(tag)=>{
    console.log("tag");
    onClick(tag);
  }

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
    <p>Tags:</p>
    {tags.results.map((tag, index) => (
      <Badge key={index} pill variant="info"
       className={`${postTagsStyles.TagBadge} mr-2`}
       onClick={() => handleClick(tag.name)}>
        {tag.name}
      </Badge>
      ))}    
    </Container>
  );
};

export default PostTags;