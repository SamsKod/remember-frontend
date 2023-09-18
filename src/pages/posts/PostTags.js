import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";


const PostTags = ({ mobile }) => {

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

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
    <p>Tags:</p>
    {tags.results.map((tag) => (
                  <span>{tag.name}</span>
                ))}    
    </Container>
  );
};

export default PostTags;