import axios from "axios";
import { mapHeadersConfigQuery } from "services/mapping/common.mapping.service";
import * as _ from "lodash";
/* 
    This service is used to get the data of post by sending postId to the service
    This config is builded by common service, it includes json web token. Jwt is saved in local storage
*/
export const getPost = async (postId) => {
  const getPostEndpoint = `https://taskeeperv2.herokuapp.com/posts/getPost?postId=${postId}`;
  const config = mapHeadersConfigQuery();
  const requestData = await axios.get(getPostEndpoint, config);

  if (postData.status === 302) {
    return requestData.data;
  }

  throw new Error(postData.message);
};

/*
    the postData contains title, description, requirement, jobType(freelance, fulltime, partime), tags, industries, positions, skills, expiredDate 
    These fields are mandatory fields
*/
export const addNewPost = async (postData) => {
  const addNewPostEndpoint =
    "https://taskeeperv2.herokuapp.com/posts/addNewPost";
  const headersData = mapHeadersConfigQuery();
  const responseData = await axios.post(
    addNewPostEndpoint,
    postData,
    headersData
  );

  if (responseData.status === 201) {
    return responseData.data;
  }

  throw new Error(responseData.message);
};

/*
    the postData contains title, description, requirement, jobType(freelance, fulltime, partime), tags, industries, positions, skills, expiredDate 
    These fields are optional fields
*/
export const editPost = async (postData) => {
  const editPostEndpoint = "https://taskeeperv2.herokuapp.com/posts/editPost";
  const headersData = mapHeadersConfigQuery();
  const responseData = await axios.post(
    editPostEndpoint,
    postData,
    headersData
  );

  if (responseData.status === 200) {
    return responseData.data;
  }

  throw new Error(responseData.message);
};

/*
    the postData contains _id(postId),title, description, requirement, jobType(freelance, fulltime, partime), tags, industries, positions, skills, expiredDate 
    These fields are optional fields
*/
export const editPost = async (postData) => {
  const editPostEndpoint = "https://taskeeperv2.herokuapp.com/posts/editPost";
  const headersData = mapHeadersConfigQuery();
  const responseData = await axios.put(editPostEndpoint, postData, headersData);

  if (responseData.status === 200) {
    return responseData.data;
  }

  throw new Error(responseData.message);
};

/*
    Delete post data contains _id
    These fields are optional fields
*/
// export const deletePost = async (postData) => {
//   const editPostEndpoint = "https://taskeeperv2.herokuapp.com/posts/editPost";
//   const headersData = mapHeadersConfigQuery();
//   const responseData = await axios.put(editPostEndpoint, postData, headersData);

//   if (responseData.status === 200) {
//     return responseData.data;
//   }

//   throw new Error(responseData.message);
// };
