import { apiService } from './index';
import { defaultUrl } from './config';

export const getAllUsersProjects = token => {
  return apiService({
    method: 'get',
    url: `${defaultUrl}/projects`,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  });
};

export const createProject = (token, projectTitle) => {
  return apiService({
    method: 'post',
    url: `${defaultUrl}/projects`,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    data: {
      projectTitle: projectTitle
    }
  });
};

export const getProjectById = (token, projectId) => {
  return apiService({
    method: 'get',
    url: `${defaultUrl}/projects/${projectId}`,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  });
};

export const deleteProject = (token, projectId) => {
  return apiService({
    method: 'delete',
    url: `${defaultUrl}/projects/${projectId}`,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  });
};

export const updateProject = (token, projectId, newData) => {
  return apiService({
    method: 'patch',
    url: `${defaultUrl}/projects/${projectId}`,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    data: {
      ...newData
    }
  });
};
